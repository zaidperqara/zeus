import { AbstractBaseEntity } from './AbstractBase.entity';
import { Column } from 'typeorm';

export class Category extends AbstractBaseEntity<Category> {
  @Column()
  name: string;
}
