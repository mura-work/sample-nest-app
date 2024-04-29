import { Query, Resolver } from '@nestjs/graphql';
import { CommentQueryService } from '@/query-service/comment/comment.query-service';
import { CommentDto } from './dto/comment.dto';

@Resolver()
export class CommentResolver {
  constructor(private readonly commentService: CommentQueryService) {}

  @Query(() => Array(CommentDto))
  async comments() {
    const comments = await this.commentService.execute();
    return comments.map((comment) => new CommentDto(comment));
  }
}
