import { ApiResponseProperty } from '@nestjs/swagger';
import { IClientEntity } from '../../domain/interfaces';

/**
 * Response for Client Create Command
 *
 * @export
 * @class CreateClientResponse
 */
export class CreateClientResponse {
  /**
   * State of the create.
   *
   * @type {boolean}
   * @memberof CreateClientResponse
   */
  @ApiResponseProperty()
  success: boolean;
  /**
   * Data of the create.
   *
   * @type {boolean}
   * @memberof CreateClientResponse
   */
  @ApiResponseProperty()
  data: IClientEntity;
}
