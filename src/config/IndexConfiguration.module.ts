import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';

import { PostgresDatabaseConfig } from './database/PostgresDatabase.config';
import { MongooseConfigService } from './database/MongoDatabase.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useClass: PostgresDatabaseConfig }),
    // MongooseModule.forRootAsync({ useClass: MongooseConfigService }),
  ],
})

export class IndexConfigurationModule {}
