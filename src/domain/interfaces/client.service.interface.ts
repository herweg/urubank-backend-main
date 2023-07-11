import { ClientDomainEntityBase } from '../entities';
import { Observable } from 'rxjs';

export interface IClientsService<
  T extends ClientDomainEntityBase = ClientDomainEntityBase,
> {
  create(entity: ClientDomainEntityBase): Observable<T>;
  update(entity: ClientDomainEntityBase): Observable<T>;
  remove(id: string): Observable<boolean>;
  findAll(): Observable<T[]>;
  findById(id: string): Observable<T>;
}
