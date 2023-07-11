import {
  Controller,
  Body,
  Delete,
  Get,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { ClientsService } from '../services';
import {
  CreateClientUseCase,
  DeleteClientUseCase,
  FindAllClientUseCase,
  FindByIdClientUseCase,
  UpdateClientUseCase,
} from '../../application/use-cases';
import {
  CreateClientCommand,
  DeleteClientCommand,
  FindByIdClientCommand,
  UpdateClientCommand,
} from '../commands';
import {
  CreateClientResponse,
  DeleteClientResponse,
  FindAllClientResponse,
  FindByIdClientResponse,
  UpdateClientResponse,
} from '../responses';
import { IResponse } from '../../domain/interfaces';
import { ClientDomainEntityBase } from '../../domain/entities';

@ApiTags('clients')
@Controller('/api/clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) { }

  @ApiResponse({ type: CreateClientResponse })
  @Post('/create')
  createClient(
    @Body() command: CreateClientCommand,
  ): Observable<IResponse<ClientDomainEntityBase>> {
    const useCase = new CreateClientUseCase(this.clientsService);
    return useCase.execute(command);
  }

  @Post('/zenvia')
  zenviaTest(
    @Body() data: any,
  ): Promise<any> {
    console.log(data)
    return Promise.resolve({ message: 'data recived' })
  }

  @ApiResponse({ type: UpdateClientResponse })
  @Patch('/update')
  updateClient(
    @Body() command: UpdateClientCommand,
  ): Observable<IResponse<ClientDomainEntityBase>> {
    const useCase = new UpdateClientUseCase(this.clientsService);
    return useCase.execute(command);
  }

  @ApiResponse({ type: DeleteClientResponse })
  @Delete('/delete')
  deleteClient(
    @Body() command: DeleteClientCommand,
  ): Observable<IResponse<boolean>> {
    const useCase = new DeleteClientUseCase(this.clientsService);
    return useCase.execute(command);
  }

  @ApiResponse({ type: FindByIdClientResponse })
  @Put('/findbyid')
  findClientById(
    @Body() command: FindByIdClientCommand,
  ): Observable<IResponse<ClientDomainEntityBase>> {
    const useCase = new FindByIdClientUseCase(this.clientsService);
    return useCase.execute(command);
  }

  @ApiResponse({ type: FindAllClientResponse })
  @Get('/findall')
  findAllClient(): Observable<IResponse<ClientDomainEntityBase[]>> {
    const useCase = new FindAllClientUseCase(this.clientsService);
    return useCase.execute();
  }
}
