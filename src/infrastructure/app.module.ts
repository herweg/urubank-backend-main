import { Module } from '@nestjs/common';
import { MongoModule } from './database/mongodb/mongo.module';
import { ClientsService } from './services';
import { ClientsController } from './controllers';

@Module({
  imports: [MongoModule],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class AppModule {}
