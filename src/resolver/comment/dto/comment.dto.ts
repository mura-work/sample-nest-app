import { Comment } from '@/libs/domain/comment/comment.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLInt } from 'graphql';

@ObjectType('Comment')
export class CommentDto {
  @Field(() => GraphQLInt)
  readonly id: number;

  @Field()
  readonly content: string;

  @Field(() => GraphQLInt)
  readonly bookId: number;

  @Field()
  readonly createdAt: Date;

  @Field()
  readonly updatedAt: Date;

  constructor(entity: Comment) {
    this.id = entity.id;
    this.content = entity.content;
    this.bookId = entity.bookId;
    this.createdAt = entity.createdAt;
    this.updatedAt = entity.updatedAt;
  }
}
