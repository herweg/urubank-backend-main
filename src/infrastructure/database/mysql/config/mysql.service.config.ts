import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { EntitiesMysql } from '../models';

@Injectable()
export class MysqlConfigService implements TypeOrmOptionsFactory {
  /**
   * It creates a TypeOrmModuleOptions object with the values of the environment variables
   * @returns an object with the properties of the TypeOrmModuleOptions interface.
   */
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: process.env.MYSQL_DB_HOST,
      port: +process.env.MYSQL_DB_PORT,
      username: process.env.MYSQL_DB_USER,
      password: process.env.MYSQL_DB_PASSWORD,
      database: process.env.MYSQL_DB_NAME,
      entities: [...EntitiesMysql],
      synchronize: true,
      logging: true,
    };
  }
}
