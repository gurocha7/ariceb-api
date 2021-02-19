import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlacesTypeRepository } from './placesType.repository'

@Injectable()
export class PlacesTypeService {
  constructor(
    @InjectRepository(PlacesTypeRepository)
    private placesTypeRepository: PlacesTypeRepository,
  ) {}
}