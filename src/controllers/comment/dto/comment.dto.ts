import { Comment } from '@/libs/domain/comment/comment.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CommentDto {
  @Field()
  readonly id: string;

  @Field()
  readonly content: string;

  @Field()
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
