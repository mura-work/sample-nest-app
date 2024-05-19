import { Book } from '@/libs/domain/book/book.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLInt } from 'graphql';

@ObjectType()
export class BookDto {
  @Field(() => GraphQLInt)
  readonly id: number;

  @Field()
  readonly title: string;

  @Field()
  readonly content: string;

  @Field(() => GraphQLInt)
  readonly price: number;

  @Field()
  readonly createdAt: Date;

  @Field()
  readonly updatedAt: Date;

  constructor(entity: Book) {
    this.id = Number(entity.id);
    this.title = entity.title;
    this.content = entity.content;
    this.price = entity.price;
    this.createdAt = entity.createdAt;
    this.updatedAt = entity.updatedAt;
  }
}
