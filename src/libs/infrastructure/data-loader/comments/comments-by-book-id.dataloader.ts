import { Injectable, Scope } from '@nestjs/common';
import { BaseDataloader } from '../base.dataloader';
import { Comment } from '@/libs/domain/comment/comment.entity';
import { ICommentRepository } from '@/libs/domain/comment/comment.repository.interface';

@Injectable({ scope: Scope.REQUEST })
export class CommentsByBookIdDataLoader extends BaseDataloader<
  string,
  Comment[]
> {
  constructor(private readonly repository: ICommentRepository) {
    super();
  }

  async batchLoad(keys: readonly string[]): Promise<Comment[][]> {
    const mappedIds = keys.map((k) => Number(k));
    const comments = await this.repository.findManyByBookIds(mappedIds);
    const result = mappedIds.map((id) => comments[id] ?? []);
    return result;
  }
}
