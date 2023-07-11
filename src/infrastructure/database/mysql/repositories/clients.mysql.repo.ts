import { Injectable, NotFoundException } from '@nestjs/common';
import { ClientMysqlEntity } from '../models';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IClientsRepository } from '../../../../domain/interfaces';
import { Observable, catchError, from, map, of, switchMap, tap } from 'rxjs';
import { ClientDomainEntityBase } from '../../../../domain/entities';

/**
 * Repository of Clients for mysql
 *
 * @export
 * @class ClientsMysqlRepository
 * @implements {IClientsRepository<ClientMysqlEntity>}
 */
@Injectable()
export class ClientsMysqlRepository
  implements IClientsRepository<ClientMysqlEntity>
{
  /**
   * The constructor function is used to inject the repository into the service
   * @param repository - Repository<ClientMysqlEntity>
   */
  constructor(
    @InjectRepository(ClientMysqlEntity)
    private readonly repository: Repository<ClientMysqlEntity>,
  ) {}

  /**
   * It takes a ClientDomainEntityBase, saves it to the database, and returns a ClientMysqlEntity
   * @param {ClientDomainEntityBase} entity - ClientDomainEntityBase
   * @returns An Observable of ClientMysqlEntity
   */
  create(entity: ClientDomainEntityBase): Observable<ClientMysqlEntity> {
    return from(this.repository.save(entity)).pipe(
      catchError((error: Error) => {
        throw error;
      }),
    );
  }

  /**
   * It updates a client in the database
   * @param {ClientDomainEntityBase} entity - ClientDomainEntityBase
   * @returns Observable<ClientMysqlEntity>
   */
  update(entity: ClientDomainEntityBase): Observable<ClientMysqlEntity> {
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
   * It returns an Observable of ClientMysqlEntity[] (an array of ClientMysqlEntity objects) that is
   * obtained by mapping the result of the find() function of the MysqlDB repository
   * @returns Observable<ClientMysqlEntity[]>
   */
  findAll(): Observable<ClientMysqlEntity[]> {
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
   * @returns Observable<ClientMysqlEntity>
   */
  findById(id: string): Observable<ClientMysqlEntity> {
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
