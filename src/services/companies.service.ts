import { CreateCompanyInput } from '@/dto/create-company.input';
import { CompanyModel } from '@/models/company.model';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(CompanyModel)
    private readonly companiesRepository: Repository<CompanyModel>,
  ) {}

  async readAllCompanies(): Promise<CompanyModel[]> {
    return await this.companiesRepository.find();
  }

  async createCompany(input: CreateCompanyInput): Promise<InsertResult> {
    return await this.companiesRepository.insert(input);
  }
}
