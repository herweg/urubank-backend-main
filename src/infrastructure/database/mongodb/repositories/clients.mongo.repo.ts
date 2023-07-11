import { Injectable, NotFoundException } from '@nestjs/common';
import { ClientMongoEntity } from '../models';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IClientsRepository } from '../../../../domain/interfaces';
import { Observable, catchError, from, map, of, switchMap, tap } from 'rxjs';
import { ClientDomainEntityBase } from '../../../../domain/entities';

/**
 * Repository of Clients for mongo
 *
 * @export
 * @class ClientsMongoRepository
 * @implements {IClientsRepository<ClientMongoEntity>}
 */
@Injectable()
export class ClientsMongoRepository
  implements IClientsRepository<ClientMongoEntity>
{
  /**
   * The constructor function is used to inject the repository into the service
   * @param repository - Repository<ClientMongoEntity>
   */
  constructor(
    @InjectRepository(ClientMongoEntity)
    private readonly repository: Repository<ClientMongoEntity>,
  ) {}

  /**
   * It takes a ClientDomainEntityBase, saves it to the database, and returns a ClientMongoEntity
   * @param {ClientDomainEntityBase} entity - ClientDomainEntityBase
   * @returns An Observable of ClientMongoEntity
   */
  create(entity: ClientDomainEntityBase): Observable<ClientMongoEntity> {
    return from(this.repository.save(entity)).pipe(
      catchError((error: Error) => {
        throw error;
      }),
    );
  }

  /**
   * It updates a client in the database
   * @param {ClientDomainEntityBase} entity - ClientDomainEntityBase
   * @returns Observable<ClientMongoEntity>
   */
  update(entity: ClientDomainEntityBase): Observable<ClientMongoEntity> {
    return from(this.repository.findOneBy({ id: entity.id })).pipe(
      tap((value) => {
        if (value == null) {
          throw new NotFoundException(
            `Error: not found client with id: ${entity.id}`,
          );
        }
      }),
      map((value) => {
        from(
          this.repository.update({ id: entity.id }, { ...value, ...entity }),
        ).subscribe();
        return { ...value, ...entity };
      }),
      catchError((error: Error) => {
        throw error;
      }),
    );
  }

  /**
   * "If the entity exists, delete it and return true, otherwise return false."
   *
   * The first thing we do is find the entity by its ID. If it doesn't exist, we return an observable
   * that emits false. If it does exist, we delete it and return an observable that emits true if the
   * delete was successful
   * @param {string} id - The id of the entity to remove.
   * @returns Observable<boolean>
   */
  remove(id: string): Observable<boolean> {
    return from(this.repository.findOneBy({ id: id })).pipe(
      switchMap((entity) => {
        if (entity == null) {
          return of(false);
        }
        return from(this.repository.delete({ id: id })).pipe(
          map((deleteResult) => deleteResult.affected > 0),
        );
      }),
      catchError(() => {
        return of(false);
      }),
    );
  }

  // Reading

  /**
   * It returns an Observable of ClientMongoEntity[] (an array of ClientMongoEntity objects) that is
   * obtained by mapping the result of the find() function of the MongoDB repository
   * @returns Observable<ClientMongoEntity[]>
   */
  findAll(): Observable<ClientMongoEntity[]> {
    return from(this.repository.find()).pipe(
      map((value) => {
        if (value.length == 0) {
          throw new NotFoundException(`Error: not found clients`);
        }
        return value;
      }),
      catchError((error: Error) => {
        throw error;
      }),
    );
  }

  /**
   * It finds a client by its id and returns it as an observable
   * @param {string} id - string - the id of the client to find
   * @returns Observable<ClientMongoEntity>
   */
  findById(id: string): Observable<ClientMongoEntity> {
    return from(this.repository.findOneBy({ id: id })).pipe(
      map((value) => {
        if (value == null) {
          throw new NotFoundException(`Error: not found client with id: ${id}`);
        }
        return value;
      }),
      catchError((error: Error) => {
        throw error;
      }),
    );
  }
}
