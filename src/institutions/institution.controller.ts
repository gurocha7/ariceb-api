import { Body, Controller, Delete, Post, Query } from '@nestjs/common';
import { InstitutionService } from './institution.service';

@Controller('v1/institutions')
export class InstitutionController {
  constructor(private institutionService: InstitutionService) {}
}
