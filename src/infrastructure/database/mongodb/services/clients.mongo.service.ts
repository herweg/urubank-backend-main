import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import { ClientMongoEntity } from '../models';
import { ClientsMongoRepository } from '../repositories';
import { IClientsService } from '../../../../domain/interfaces';
import { ClientDomainEntityBase } from '../../../../domain/entities';

/**
 * Clients mongo service class
 *
 * @export
 * @class ClientsMongoService
 * @implements {IClientsService<ClientMongoEntity>}
 */
@Injectable()
export class ClientsMongoService implements IClientsService<ClientMongoEntity> {
  /**
   * The constructor function is a special function that is called when an instance of the class is
   * created
   * @param {ClientsMongoRepository} repository - ClientsMongoRepository
   */
  constructor(private readonly repository: ClientsMongoRepository) {}

  /**
   * > The function creates a new client entity in the database
   * @param {ClientDomainEntityBase} entity - ClientDomainEntityBase - this is the entity that we want
   * to create in the database.
   * @returns Observable<ClientMongoEntity>
   */
  create(entity: ClientDomainEntityBase): Observable<ClientMongoEntity> {
    return this.repository.create(entity);
  }

  /**
   * > The function takes a ClientDomainEntityBase object as a parameter, and returns an Observable of
   * ClientMongoEntity
   * @param {ClientDomainEntityBase} entity - ClientDomainEntityBase - this is the entity that we want
   * to update.
   * @returns Observable<ClientMongoEntity>
   */
  update(entity: ClientDomainEntityBase): Observable<ClientMongoEntity> {
    return this.repository.update(entity);
  }

  /**
   * "Remove the item with the given id from the repository and return an observable that will emit true
   * if the item was removed and false if it wasn't."
   *
   * The first thing we do is call the remove function on the repository. This function returns an
   * observable that will emit true if the item was removed and false if it wasn't
   * @param {string} id - The id of the entity to remove.
   * @returns Observable<boolean>
   */
  remove(id: string): Observable<boolean> {
    return this.repository.remove(id);
  }

  /**
   * "Find all the clients in the database and return them as an array of ClientMongoEntity objects."
   *
   * The function is marked as public, so it can be called from outside the class. It returns an
   * Observable of ClientMongoEntity objects. The Observable is a class from the RxJS library. It's a
   * way of returning a stream of data. The stream can be empty, or it can contain one or more
   * ClientMongoEntity objects
   * @returns An observable of an array of ClientMongoEntity objects.
   */
  findAll(): Observable<ClientMongoEntity[]> {
    return this.repository.findAll();
  }

  /**
   * "Find a client by its id."
   *
   * The function is defined as an Observable of ClientMongoEntity
   * @param {string} id - The id of the client to find.
   * @returns Observable<ClientMongoEntity>
   */
  findById(id: string): Observable<ClientMongoEntity> {
    return this.repository.findById(id);
  }
}
