import { Body, Controller, Get, Post } from '@nestjs/common';
import { CompanyModel } from '@/models/company.model';
import { CompaniesService } from '@/services/companies.service';
import { CreateCompanyInput } from '@/dto/create-company.input';
import { InsertResult } from 'typeorm';

@Controller('company')
export class CompanyController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Get()
  readAllCompanies(): Promise<CompanyModel[]> {
    return this.companiesService.readAllCompanies();
  }

  @Post()
  async createCompany(
    @Body() input: CreateCompanyInput,
  ): Promise<InsertResult> {
    return this.companiesService.createCompany(input);
  }
}
