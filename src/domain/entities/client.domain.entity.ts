import { v4 as uuid } from 'uuid';
import { IClientEntity } from '../interfaces';

/**
 * Clients Domain Entity Base
 *
 * @export
 * @class ClientDomainEntityBase
 * @implements {IClientEntity}
 */
export class ClientDomainEntityBase implements IClientEntity {
  /**
   * UUID of the client.
   *
   * @type {string}
   * @memberof ClientDomainEntityBase
   */
  id?: string;
  /**
   * Type of the client (customer, employed, admin).
   *
   * @type {number}
   * @memberof ClientDomainEntityBase
   */
  typeClient: number;
  /**
   * Full name of the client.
   *
   * @type {string}
   * @memberof ClientDomainEntityBase
   */
  fullName: string;
  /**
   * Status of the client.
   *
   * @type {number}
   * @memberof ClientDomainEntityBase
   */
  status: number;
  /**
   * Phone of the client.
   *
   * @type {string}
   * @memberof ClientDomainEntityBase
   */
  phone: string;
  /**
   * Departament of the client.
   *
   * @type {string}
   * @memberof ClientDomainEntityBase
   */
  departament: string;
  /**
   * Document of the client.
   *
   * @type {string}
   * @memberof ClientDomainEntityBase
   */
  document: string;
  /**
   * CreatedAt stamp of the client.
   *
   * @type {number}
   * @memberof ClientDomainEntityBase
   */
  createdAt?: number;
  /**
   * CompletedAt stamp of the client.
   *
   * @type {number}
   * @memberof ClientDomainEntityBase
   */
  completedAt?: number;

  /**
   * The constructor function is a function that is called when a new instance of the class is created
   * @param {IClientEntity} [_data] - IClientEntity: This is the interface that we created in the previous
   * step.
   */
  constructor(_data?: IClientEntity) {
    this.id = _data?.id ? _data.id : uuid();
    if (_data?.typeClient) this.typeClient = _data.typeClient;
    if (_data?.fullName) this.fullName = _data.fullName;
    if (_data?.status) this.status = _data.status;
    if (_data?.phone) this.phone = _data.phone;
    if (_data?.departament) this.departament = _data.departament;
    if (_data?.document) this.document = _data.document;
    this.createdAt = Date.now();
    this.completedAt = 0;
  }
}
