import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlacesTypeRepository } from './placesType.repository'
import { PlacesType } from './placesType.entity';
import { CreatePlacesTypeDTO } from './dtos/createPlacesType.dto';
import { UpdatePlacesTypeDTO } from './dtos/updatePlacesType.dto';

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

  async getTypeById(id: string): Promise<PlacesType> {
    const type = await this.placesTypeRepository.findOne(id);
    if (!type) {
      throw new InternalServerErrorException('Type não encontrado.')
    }
    return type;
  }

  async updatePlacesType(updatePlacesTypeDTO: UpdatePlacesTypeDTO, id: string): Promise<PlacesType>{
    try {
      await this.placesTypeRepository.update( { id } , updatePlacesTypeDTO);
      return await this.getTypeById(id);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao tentar atualizar type.')
    }
  }

  async deletePlacesType(id: string): Promise<string>{
    try {
      const type = await this.getTypeById(id)
      await this.placesTypeRepository.delete({id: type.id})
      return "Type deletado com sucesso!"
    } catch (error) {
      throw new InternalServerErrorException('Não foi possível apagar o lugar');
    }
  }
}