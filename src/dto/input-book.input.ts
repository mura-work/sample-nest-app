import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { GraphQLInt } from 'graphql';

@InputType()
export class CreateBookInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  title: string;

  @Field(() => GraphQLInt)
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @Field()
  @IsString()
  content: string;
}
