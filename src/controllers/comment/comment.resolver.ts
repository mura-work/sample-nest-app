import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CommentQueryService } from '@/query-service/comment/comment.query-service';
import { CommentDto } from './dto/comment.dto';
import { CommentInputDto } from './dto/comment-input.dto';
import { CommentApplicationService } from '@/application-service/comment/comment.application-service';

@Resolver()
export class CommentResolver {
  constructor(
    private readonly commentService: CommentQueryService,
    private readonly applicationService: CommentApplicationService,
  ) {}

  @Query(() => Array(CommentDto))
  async comments() {
    const comments = await this.commentService.execute();
    return comments.map((comment) => new CommentDto(comment));
  }

  @Mutation(() => CommentDto)
  async createComment(@Args('inputComment') input: CommentInputDto) {
    const result = await this.applicationService.create({
      content: input.content,
      bookId: input.bookId,
    });
    // console.log({ result });
    return result;
  }
}
