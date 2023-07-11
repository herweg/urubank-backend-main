import { Observable, map } from 'rxjs';
import { IUpdateClientCommand } from '../../domain/commands';
import { IResponse, IClientsService } from '../../domain/interfaces';
import { ClientDomainEntityBase } from '../../domain/entities';

export class UpdateClientUseCase<
  Command extends IUpdateClientCommand = IUpdateClientCommand,
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
          ({ success: true, data: value } as Response),
      ),
    );
  }

  /**
   * It takes a command, updates the entity, sets the id, deletes the createdAt property, and then
   * executes the aggregate root
   * @param {Command} command - Command - The command that was sent to the aggregate root.
   * @returns Observable<ClientDomainEntityBase | null>
   */
  private executeCommand(
    command: Command,
  ): Observable<ClientDomainEntityBase | null> {
    const entity = this.updateEntity(command);
    entity.id = command.id;
    delete entity.createdAt;
    return this.executeInvoiceAggregateRoot(entity);
  }

  /**
   * This function takes a command and returns a validated client.
   * @param {Command} command - Command - The command object that was passed to the command handler.
   * @returns A ClientDomainEntityBase
   */
  private updateEntity(command: Command): ClientDomainEntityBase {
    return new ClientDomainEntityBase(command);
  }

  /**
   * This function is responsible for updating the client's invoice aggregate root.
   * @param {ClientDomainEntityBase} entity - ClientDomainEntityBase - this is the aggregate root that we're
   * going to be updating.
   * @returns Observable<ClientDomainEntityBase | null>
   */
  private executeInvoiceAggregateRoot(
    entity: ClientDomainEntityBase,
  ): Observable<ClientDomainEntityBase | null> {
    return this.clientsService.update(entity);
  }
}
