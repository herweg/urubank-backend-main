import { Injectable } from '@nestjs/common';
import { ClientsMongoService } from '../database/mongodb/services';

@Injectable()
export class ClientsService extends ClientsMongoService {}
