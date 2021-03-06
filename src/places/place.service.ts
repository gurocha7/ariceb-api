import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlaceRepository} from './place.repository';
import { CreatePlaceDTO } from './dtos/createPlace.dto';
import { Place } from './place.entity';
import { SubsectorService } from 'src/subsectors/subsector.service';

@Injectable()
export class PlaceService {
  constructor(
    @InjectRepository(PlaceRepository)
    private placeRepository: PlaceRepository,
    private subsectorService: SubsectorService
  ) {}

  async createPlace(createPlaceDTO: CreatePlaceDTO): Promise<Place> {
    try {
      const {name,subsector_id} = createPlaceDTO
      const subsector = await this.subsectorService.getSubsectorById(subsector_id)
      const newplace = this.placeRepository.create({
        name,
        subsector
      });
      await this.placeRepository.save(newplace)
      return newplace
    } catch (error) {
      throw new InternalServerErrorException('Erro ao cadastrar lugar.');
    }
  }
}