import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCompanyInput {
  @IsString()
  @IsNotEmpty()
  companyName: string;

  @IsString()
  @IsNotEmpty()
  prtimesUrl: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  chargeEmployee: string;

  @IsString()
  @IsNotEmpty()
  category: string;
}
