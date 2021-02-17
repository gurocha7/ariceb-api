import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SectorRepository } from './sector.repository';

@Injectable()
export class SectorService {
  constructor(
    @InjectRepository(SectorRepository)
    private sectorRepository: SectorRepository,
  ) {}
}
