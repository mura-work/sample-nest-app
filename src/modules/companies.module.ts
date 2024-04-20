import { CompanyController } from '@/controllers/companies/companies.controller';
import { CompanyModel } from '@/models/company.model';
import { CompaniesService } from '@/services/companies.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyModel])],
  controllers: [CompanyController],
  providers: [CompaniesService],
})
export class CompaniesMoudle {}
