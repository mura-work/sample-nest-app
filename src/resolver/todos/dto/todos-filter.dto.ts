import { Field, InputType } from '@nestjs/graphql';
import { z } from 'zod';

export const todosFilterSchema = z
  .strictObject({
    title: z.string(),
  })
  .readonly();

export type TodosFilter = z.infer<typeof todosFilterSchema>;

@InputType('TodosFilter')
export class TodosFilterDto implements TodosFilter {
  @Field(() => String, { nullable: true })
  readonly title?: string;

  @Field(() => String, { nullable: true })
  readonly status?: string;

  constructor(title?: string, status?: string) {
    this.title = title;
    this.status = status;
  }
}
