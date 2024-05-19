import { Field, InputType } from '@nestjs/graphql';
import { GraphQLInt } from 'graphql';
import { z } from 'zod';

const commentInputSchema = z
  .object({
    content: z.string(),
    bookId: z.number(),
  })
  .required();

export type CommentInput = z.infer<typeof commentInputSchema>;

@InputType('CreateCommentInput')
export class CommentInputDto {
  @Field()
  readonly content: string;

  @Field(() => GraphQLInt)
  readonly bookId: number;

  constructor(content: string, bookId: number) {
    this.content = content;
    this.bookId = bookId;
  }
}
