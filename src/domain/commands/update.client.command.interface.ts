export interface IUpdateClientCommand {
  /**
   * UUID of the client.
   *
   * @type {string}
   * @memberof IUpdateClientCommand
   */
  id: string;
  /**
   * Type of the client (customer, employed, admin).
   *
   * @type {number}
   * @memberof IUpdateClientCommand
   */
  typeClient: number;
  /**
   * Full name of the client.
   *
   * @type {string}
   * @memberof IUpdateClientCommand
   */
  fullName: string;
  /**
   * Status of the client.
   *
   * @type {number}
   * @memberof IUpdateClientCommand
   */
  status: number;
  /**
   * Phone of the client.
   *
   * @type {string}
   * @memberof IUpdateClientCommand
   */
  phone: string;
  /**
   * Departament of the client.
   *
   * @type {string}
   * @memberof IUpdateClientCommand
   */
  departament: string;
  /**
   * Document of the client.
   *
   * @type {string}
   * @memberof IUpdateClientCommand
   */
  document: string;
}
