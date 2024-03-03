import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

import { AbstractBaseEntity } from './AbstractBase.entity';
import { Category } from './category.entity';

@Entity()
export class Todo extends AbstractBaseEntity<Todo> {
  @Column()
  name: string;

  @Column()
  is_done: boolean;

  @OneToOne(() => Category, { cascade: true })
  @JoinColumn()
  category: Category;
}
