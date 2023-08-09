import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Status } from '../enums/Status';
import { Priority } from '../enums/Priority';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({
    type: 'text',
  })
  title: String;

  @Column({
    type: 'varchar',
    length: 255,
  })
  Date: String;

  @Column({
    type: 'longtext',
  })
  description: String;

  @Column({
    type: 'enum',
    enum: Priority,
    default: Priority.normal,
  })
  priority: Priority;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.todo,
  })
  status: Status;
}
