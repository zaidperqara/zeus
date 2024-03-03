import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private configService: ConfigService) {}

  createMongooseOptions(): MongooseModuleOptions {
    const mongooseOption = {
      uri: this.configService.get<string>('MONGO_URI'),
      user: this.configService.get<string>('MONGO_USERNAME'),
      pass: this.configService.get<string>('MONGO_PASSWORD'),
    };

    const mongodbName = this.configService.get<string>('MONGO_DB_DBNAME');
    if (mongodbName) mongooseOption['dbName'] = mongodbName;
    return mongooseOption;
  }
}
