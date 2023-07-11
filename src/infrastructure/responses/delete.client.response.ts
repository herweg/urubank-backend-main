import { ApiResponseProperty } from '@nestjs/swagger';

/**
 * Response for Use Delete Command
 *
 * @export
 * @class DeleteClientResponse
 */
export class DeleteClientResponse {
  /**
   * State of the delete.
   *
   * @type {boolean}
   * @memberof DeleteClientResponse
   */
  @ApiResponseProperty()
  success: boolean;
}
