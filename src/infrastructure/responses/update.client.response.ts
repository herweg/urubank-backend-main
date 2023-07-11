import { ApiResponseProperty } from '@nestjs/swagger';
import { IClientEntity } from '../../domain/interfaces';

/**
 * Response for Client Update Command
 *
 * @export
 * @class UpdateClientResponse
 */
export class UpdateClientResponse {
  /**
   * State of the update.
   *
   * @type {boolean}
   * @memberof UpdateClientResponse
   */
  @ApiResponseProperty()
  success: boolean;
  /**
   * Data of the update.
   *
   * @type {boolean}
   * @memberof UpdateClientResponse
   */
  @ApiResponseProperty()
  data: IClientEntity;
}
