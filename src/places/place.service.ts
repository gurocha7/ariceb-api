import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlaceRepository} from './place.repository';

@Injectable()
export class PlaceService {
  // constructor(
  //   @InjectRepository(SectorRepository)
  //   private sectorRepository: SectorRepository,
  // ) {}
}