import { Book } from '@/libs/domain/book/book.entity';
import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@InputType('UpdateBookInputDto')
export class UpdateBookInputDto {
  @Field()
  readonly id: number;

  @Field()
  readonly title: string;

  @Field()
  readonly content: string;

  constructor(id: number, title: string, content: string) {
    this.id = id;
    this.title = title;
    this.content = content;
  }
}

@ObjectType('UpdateBookOutputDto')
export class UpdateBookOutputDto {
  @Field()
  readonly id: number;

  @Field()
  readonly title: string;

  @Field()
  readonly content: string;

  @Field(() => Int)
  readonly price: number;

  constructor(entity: Book) {
    this.id = entity.id;
    this.title = entity.title;
    this.content = entity.content;
    this.price = entity.price;
  }
}
