import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';

@Injectable()
export class PostgresDatabaseConfig implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.getOrThrow('DB_HOST'),
      port: this.configService.getOrThrow('DB_PORT'),
      username: this.configService.getOrThrow('DB_USERNAME'),
      password: this.configService.getOrThrow('DB_PASSWORD'),
      database: this.configService.getOrThrow('DB_DATABASE'),
      logging: this.configService.getOrThrow('DB_LOG_ENABLED'),
      poolSize: this.configService.getOrThrow('DB_MAX_POOL'),
      entities: [__dirname + '/../../models/entities/*.entity{.ts,.js}'],
    };
  }
}

export const connectionResource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  logging: process.env.DB_LOG_ENABLED,
  poolSize: process.env.DB_MAX_POOL,
  migrations: [__dirname + '/../../database/migrations/*{.ts,.js}'],
  entities: [__dirname + '/../../models/entities/*.entity{.ts,.js}'],
} as unknown as DataSourceOptions);
