import { ApiResponseProperty } from '@nestjs/swagger';
import { IClientEntity } from '../../domain/interfaces';

/**
 * Response for Client FindAll Command
 *
 * @export
 * @class FindAllClientResponse
 */
export class FindAllClientResponse {
  /**
   * State of the findAll.
   *
   * @type {boolean}
   * @memberof FindAllClientResponse
   */
  @ApiResponseProperty()
  success: boolean;
  /**
   * Data of the findAll.
   *
   * @type {boolean}
   * @memberof FindAllClientResponse
   */
  @ApiResponseProperty()
  data: IClientEntity[];
}
