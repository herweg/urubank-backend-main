import { Observable, map } from 'rxjs';
import { ICreateClientCommand } from '../../domain/commands';
import { IResponse, IClientsService } from '../../domain/interfaces';
import { ClientDomainEntityBase } from '../../domain/entities';

export class CreateClientUseCase<
  Command extends ICreateClientCommand = ICreateClientCommand,
  Response extends IResponse<ClientDomainEntityBase> = IResponse<ClientDomainEntityBase>,
> {
  constructor(private readonly clientsService: IClientsService) {}

  /**
   * It takes a command, executes it, and returns a response
   * @param {Command} [command] - The command to execute.
   * @returns An Observable of a Response object.
   */
  execute(command?: Command): Observable<Response> {
    return this.executeCommand(command).pipe(
      map(
        (value: ClientDomainEntityBase) =>
          ({ success: value ? true : false, data: value } as Response),
      ),
    );
  }

  /**
   * "This function executes a command on the aggregate root, and returns an observable of the aggregate
   * root's state."
   *
   * The function takes a command as a parameter, and returns an observable of the aggregate root's state
   * @param {Command} command - Command - The command that was sent to the command handler.
   * @returns Observable<ClientDomainEntityBase | null>
   */
  private executeCommand(
    command: Command,
  ): Observable<ClientDomainEntityBase | null> {
    return this.executeInvoiceAggregateRoot(this.createEntity(command));
  }

  /**
   * Create a new client entity from the command, validate it, and return it.
   * @param {Command} command - Command - The command object that was passed to the command handler.
   * @returns A ClientDomainEntityBase
   */
  private createEntity(command: Command): ClientDomainEntityBase {
    return new ClientDomainEntityBase(command);
  }

  /**
   * > This function is responsible for creating a new client
   * @param {ClientDomainEntityBase} entity - ClientDomainEntityBase - this is the entity that is being
   * created.
   * @returns Observable<ClientDomainEntityBase | null>
   */
  private executeInvoiceAggregateRoot(
    entity: ClientDomainEntityBase,
  ): Observable<ClientDomainEntityBase | null> {
    return this.clientsService.create(entity);
  }
}
