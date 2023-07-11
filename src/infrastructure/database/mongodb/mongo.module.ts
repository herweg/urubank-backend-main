import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongoConfigService } from './config';
import { RepositoriesMongo } from './repositories';
import { ServicesMongo } from './services';
import { EntitiesMongo } from './models';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: MongoConfigService,
    }),
    TypeOrmModule.forFeature([...EntitiesMongo]),
  ],
  controllers: [],
  providers: [...RepositoriesMongo, ...ServicesMongo, ...EntitiesMongo],
  exports: [...RepositoriesMongo, ...ServicesMongo, ...EntitiesMongo],
})
export class MongoModule {}
