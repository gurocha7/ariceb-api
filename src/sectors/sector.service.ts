import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SectorRepository } from './sector.repository';
import { CreateSectorDTO } from './dtos/createSector.dto';
import { Sector } from './sector.entity';

@Injectable()
export class SectorService {
  constructor(
    @InjectRepository(SectorRepository)
    private sectorRepository: SectorRepository,
  ) {}

  async createSector(
    createSectorDTO: CreateSectorDTO,
  ): Promise<Sector> {
    try {
      return this.sectorRepository.save(createSectorDTO);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao cadastrar setor.');
    }
  }
}
