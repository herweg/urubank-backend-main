export interface ICreateClientCommand {
  /**
   * Type of the client.
   *
   * @type {number}
   * @memberof ICreateClientCommand
   */
  typeClient: number;
  /**
   * Full name of the client.
   *
   * @type {string}
   * @memberof ICreateClientCommand
   */
  fullName: string;
  /**
   * Status of the client.
   *
   * @type {number}
   * @memberof ICreateClientCommand
   */
  status: number;
  /**
   * Phone of the client.
   *
   * @type {string}
   * @memberof ICreateClientCommand
   */
  phone: string;
  /**
   * Departament of the client.
   *
   * @type {string}
   * @memberof ICreateClientCommand
   */
  departament: string;
  /**
   * Document of the client.
   *
   * @type {string}
   * @memberof ICreateClientCommand
   */
  document: string;
}
