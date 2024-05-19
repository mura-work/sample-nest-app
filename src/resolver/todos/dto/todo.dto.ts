import { Field, ObjectType } from '@nestjs/graphql';
import { Todo } from '@/libs/domain/todo/todo.entity';

@ObjectType('Todo')
export class TodoDto {
  @Field(() => String)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  status: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  constructor(entity: Todo) {
    this.id = entity.id!;
    this.title = entity.title;
    this.status = entity.status;
    this.createdAt = entity.createdAt;
    this.updatedAt = entity.updatedAt;
  }
}
