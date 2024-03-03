import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Category } from '../../models/entitites/category.entity';

@Injectable()
export class CategoryRepository extends Repository<Category> {

}
