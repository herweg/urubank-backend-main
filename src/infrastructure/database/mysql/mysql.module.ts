import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlConfigService } from './config';
import { RepositoriesMysql } from './repositories';
import { ServicesMysql } from './services';
import { EntitiesMysql } from './models';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: MysqlConfigService,
    }),
    TypeOrmModule.forFeature([...EntitiesMysql]),
  ],
  controllers: [],
  providers: [...RepositoriesMysql, ...ServicesMysql, ...EntitiesMysql],
  exports: [...RepositoriesMysql, ...ServicesMysql, ...EntitiesMysql],
})
export class MysqlModule {}
