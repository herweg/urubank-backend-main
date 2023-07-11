import { Observable, map } from 'rxjs';
import { IResponse, IClientsService } from '../../domain/interfaces';
import { ClientDomainEntityBase } from '../../domain/entities';

export class FindAllClientUseCase<
  Response extends IResponse<ClientDomainEntityBase[]> = IResponse<
    ClientDomainEntityBase[]
  >,
> {
  constructor(private readonly clientsService: IClientsService) {}

  /**
   * > The `execute` function returns an observable of type `Response` that is the result of the
   * `executeCommand` function
   * @returns An Observable of type Response.
   */
  execute(): Observable<Response> {
    return this.executeCommand().pipe(
      map(
        (value: ClientDomainEntityBase[]) =>
          ({ success: true, data: value } as Response),
      ),
    );
  }

  /**
   * > The function executes the aggregate root's command and returns the aggregate root's domain
   * entities
   * @returns Observable<ClientDomainEntityBase[] | null>
   */
  private executeCommand(): Observable<ClientDomainEntityBase[] | null> {
    return this.executeInvoiceAggregateRoot();
  }

  /**
   * > It returns an observable of an array of client domain entities or null
   * @returns An Observable of an array of ClientDomainEntityBase objects or null.
   */
  private executeInvoiceAggregateRoot(): Observable<
    ClientDomainEntityBase[] | null
  > {
    return this.clientsService.findAll();
  }
}
