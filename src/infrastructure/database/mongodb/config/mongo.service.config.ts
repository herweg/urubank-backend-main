import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { EntitiesMongo } from '../models';

@Injectable()
export class MongoConfigService implements TypeOrmOptionsFactory {
  /**
   * It creates a TypeOrmModuleOptions object with the values of the environment variables
   * @returns an object with the properties of the TypeOrmModuleOptions interface.
   */
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mongodb',
      url: process.env.MONGO_DB_URI,
      //host: process.env.MONGO_DB_HOST,
      //port: +process.env.MONGO_DB_PORT,
      //username: process.env.MONGO_DB_USER,
      //password: process.env.MONGO_DB_PASSWORD,
      //database: process.env.MONGO_DB_NAME,
      //authSource: process.env.MONGO_DB_AUTH,
      useUnifiedTopology: true,
      entities: [...EntitiesMongo],
      synchronize: true,
      logging: true,
    };
  }
}
