import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubsectorRepository } from './subsector.repository'

@Injectable()
export class SubsectorService {
  // constructor(
  //   @InjectRepository(SectorRepository)
  //   private sectorRepository: SectorRepository,
  // ) {}
}