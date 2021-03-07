import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlacesTypeRepository } from './placesType.repository'
import { PlacesType } from './placesType.entity';
import { CreatePlacesTypeDTO } from './dtos/createPlacesType.dto';

@Injectable()
export class PlacesTypeService {
  constructor(
    @InjectRepository(PlacesTypeRepository)
    private placesTypeRepository: PlacesTypeRepository,
  ) {}

  async createPlacesType( createPlacesTypeDTO: CreatePlacesTypeDTO): Promise<PlacesType>{
    try {
      return await this.placesTypeRepository.save(createPlacesTypeDTO)
    } catch (error) {
      throw new InternalServerErrorException('Erro ao cadastrar placesType.');
    }
  }

  async listPlacesType(): Promise<PlacesType[]>{
    try {
      return await this.placesTypeRepository.find()
    } catch (error) {
      throw new InternalServerErrorException('Erro ao buscar placesType.');
    }
  }
}