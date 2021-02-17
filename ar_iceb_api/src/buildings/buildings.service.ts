import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Building } from './buildings.entity';
import { BuildingRepository } from './buildings.repository';
import { CreateBuildingDTO } from './dtos/createBulding.dto';

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
}
