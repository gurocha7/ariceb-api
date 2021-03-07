import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlaceRepository} from './place.repository';
import { CreatePlaceDTO } from './dtos/createPlace.dto';
import { Place } from './place.entity';
import { SubsectorService } from 'src/subsectors/subsector.service';
import { PlacesTypeService } from 'src/placesType/placesType.service';

@Injectable()
export class PlaceService {
  constructor(
    @InjectRepository(PlaceRepository)
    private placeRepository: PlaceRepository,
    private subsectorService: SubsectorService,
    private placesTypeService: PlacesTypeService
  ) {}

  async createPlace(createPlaceDTO: CreatePlaceDTO): Promise<Place> {
    try {
      const {name,subsector_id,type_id,lat,long} = createPlaceDTO
      const subsector = await this.subsectorService.getSubsectorById(subsector_id)
      const placesType = await this.placesTypeService.getTypeById(type_id)
      const newplace = this.placeRepository.create({
        name,
        lat,
        long,
        placesType,
        subsector,
      });
      await this.placeRepository.save(newplace)
      return newplace
    } catch (error) {
      throw new InternalServerErrorException('Erro ao cadastrar lugar.');
    }
  }

  async listPlaces(): Promise<Place[]>{
    try {
      return await this.placeRepository.find()
    } catch (error) {
      throw new InternalServerErrorException('Erro ao buscar lugares.');
    }
  }

  async deletePlace(id: string): Promise<string>{
    try {
      const place = await this.getPlaceById(id)
      await this.placeRepository.delete({id: place.id})
      return "Lugar deletado com sucesso!"
    } catch (error) {
      throw new InternalServerErrorException('Não foi possível apagar o lugar');
    }
  }

  async getPlaceById(id: string): Promise<Place> {
    const place = await this.placeRepository.findOne(id);
    if (!place) {
      throw new InternalServerErrorException('Lugar não encontrado.')
    }
    return place;
  }
}