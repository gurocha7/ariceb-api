import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Building } from './buildings.entity';
import { BuildingRepository } from './buildings.repository';
import { CreateBuildingDTO } from './dtos/createBulding.dto';
import { ListBuildingsDTO } from './dtos/listBuildings.dto'
import { UpdateBuildingDTO } from './dtos/updateBuilding.dto';

@Injectable()
export class BuildingsService {
  constructor(
    @InjectRepository(BuildingRepository)
    private buildingRepository: BuildingRepository,
  ) {}

  async createBuilding(
    createBuildingDTO: CreateBuildingDTO,
  ): Promise<Building> {
    try {
      return this.buildingRepository.save(createBuildingDTO);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao cadastrar prédio.');
    }
  }

  async listBuildings(): Promise<Building[]>{
    try {
       return this.buildingRepository.find();
    } catch (error) {
      throw new InternalServerErrorException('Erro ao listas prédios.')
    }
  }

  async deleteBuilding(id: string): Promise<string> {
    try {
      await this.buildingRepository.delete({ id: id });
      return "Prédio deletado com sucesso!"
    } catch (error) {
      throw new InternalServerErrorException('Erro ao tentar deletar prédio.')
    }
  }

  async updateBuilding(updateBuildingDTO: UpdateBuildingDTO, id: string): Promise<Building>{
    try {
      await this.buildingRepository.update( { id } , updateBuildingDTO);
      return await this.getBuildingById(id);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao tentar atualizar prédio.')
    }
  }

  async getBuildingById(id: string): Promise<Building> {
    const building = await this.buildingRepository.findOne(id);
    if (!building) {
      throw new InternalServerErrorException('Prédio não encontrado.')
    }
    return building;
  }

}
