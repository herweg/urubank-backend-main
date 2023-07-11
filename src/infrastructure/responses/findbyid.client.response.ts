import { ApiResponseProperty } from '@nestjs/swagger';
import { IClientEntity } from '../../domain/interfaces';

/**
 * Response for Client FindById Command
 *
 * @export
 * @class FindByIdClientResponse
 */
export class FindByIdClientResponse {
  /**
   * State of the findById.
   *
   * @type {boolean}
   * @memberof FindByIdClientResponse
   */
  @ApiResponseProperty()
  success: boolean;
  /**
   * Data of the findById.
   *
   * @type {boolean}
   * @memberof FindByIdClientResponse
   */
  @ApiResponseProperty()
  data: IClientEntity;
}
