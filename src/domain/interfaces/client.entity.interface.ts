/**
 * Client entity interface
 *
 * @export
 * @interface IClientEntity
 */
export interface IClientEntity {
  /**
   * UUID of the client.
   *
   * @type {string}
   * @memberof IClientEntity
   */
  id?: string;
  /**
   * Type of the client.
   *
   * @type {number}
   * @memberof IClientEntity
   */
  typeClient: number;
  /**
   * Full name of the client.
   *
   * @type {string}
   * @memberof IClientEntity
   */
  fullName: string;
  /**
   * Status of the client.
   *
   * @type {number}
   * @memberof IClientEntity
   */
  status: number;
  /**
   * Phone of the client.
   *
   * @type {string}
   * @memberof IClientEntity
   */
  phone: string;
  /**
   * Departament of the client.
   *
   * @type {string}
   * @memberof IClientEntity
   */
  departament: string;
  /**
   * Document of the client.
   *
   * @type {string}
   * @memberof IClientEntity
   */
  document: string;
  /**
   * CreatedAt stamp of the client.
   *
   * @type {number}
   * @memberof IClientEntity
   */
  createdAt?: number;
  /**
   * CompletedAt stamp of the client.
   *
   * @type {number}
   * @memberof IClientEntity
   */
  completedAt?: number;
}
