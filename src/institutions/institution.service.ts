import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InstitutionRepository } from './institution.repository'

@Injectable()
export class InstitutionService {
  constructor(
    @InjectRepository(InstitutionRepository)
    private institutionRepository: InstitutionRepository,
  ) {}
}