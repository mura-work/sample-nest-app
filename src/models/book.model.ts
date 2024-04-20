import { Field, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity('books')
export class BookModel extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column({ type: 'varchar' })
  @Field(() => String)
  title: string;

  @Column({ type: 'varchar' })
  @Field(() => String)
  content: string;

  @Column({ type: 'int' })
  @Field(() => Number)
  price: number;

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @UpdateDateColumn()
  @Field()
  updatedAt: Date;
}
