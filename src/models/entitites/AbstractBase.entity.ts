import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class AbstractBaseEntity<T> {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  constructor(entity: Partial<T>) {
    Object.assign(this, entity);
  }
}
