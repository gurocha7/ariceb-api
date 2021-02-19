import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstitutionRepository } from './institution.repository';
import { InstitutionService } from './institution.service'
import { InstitutionController } from './institution.controller'

@Module({
  imports: [TypeOrmModule.forFeature([InstitutionRepository])],
  providers: [InstitutionService],
  controllers: [InstitutionController],
})
export class InstitutionModule {}