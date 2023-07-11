import { Observable, map } from 'rxjs';
import { BadRequestException } from '@nestjs/common';
import { IFindByIdClientCommand } from '../../domain/commands';
import { IResponse, IClientsService } from '../../domain/interfaces';
import { ClientDomainEntityBase } from '../../domain/entities';

export class FindByIdClientUseCase<
  Command extends IFindByIdClientCommand = IFindByIdClientCommand,
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
   * It takes a command, validates it, and returns an observable of the result
   * @param {Command} command - Command - The command that is being executed.
   * @returns Observable<ClientDomainEntityBase | null>
   */
  private executeCommand(
    command: Command,
  ): Observable<ClientDomainEntityBase | null> {
    return this.validateCommand(command);
  }

  /**
   * It validates the command and then executes the aggregate root
   * @param {Command} command - Command - The command object that was passed to the command handler.
   * @returns Observable<ClientDomainEntityBase | null>
   */
  private validateCommand(
    command: Command,
  ): Observable<ClientDomainEntityBase | null> {
    if (!command.id || command.id.trim() === '') {
      throw new BadRequestException('');
    }
    return this.executeInvoiceAggregateRoot(command);
  }

  /**
   * If the client exists, then return the client, otherwise return null.
   * @param {Command} command - Command - The command that was sent to the aggregate root.
   * @returns Observable<ClientDomainEntityBase | null>
   */
  private executeInvoiceAggregateRoot(
    command: Command,
  ): Observable<ClientDomainEntityBase | null> {
    return this.clientsService.findById(command.id);
  }
}
