import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SectorRepository } from './sector.repository';
import { BuildingsService  } from '../buildings/buildings.service'
import { CreateSectorDTO } from './dtos/createSector.dto';
import { Sector } from './sector.entity';

@Injectable()
export class SectorService {
  constructor(
    @InjectRepository(SectorRepository)
    private sectorRepository: SectorRepository, private buildingService: BuildingsService
  ) {}

  async createSector(
    createSectorDTO: CreateSectorDTO,
  ): Promise<Sector> {
    try {
      const {name,building_id} = createSectorDTO
      const building = await this.buildingService.getBuildingById(building_id)
      const newsector = await this.sectorRepository.create({
        name,
        building
      });
      await this.sectorRepository.save(newsector)
      return newsector
    } catch (error) {
      throw new InternalServerErrorException('Erro ao cadastrar setor.');
    }
  }

  async listSectors(): Promise<Sector[]> {
    try {
      return this.sectorRepository.find()
    } catch (error) {
      throw new InternalServerErrorException('Erro ao cadastrar listar setores.');
    }
  }
}
