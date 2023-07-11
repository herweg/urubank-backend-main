/**
 * Response
 *
 * @export
 * @interface IResponse
 * @template T
 */
export interface IResponse<T> {
  success: boolean;
  data: T | null;
}
