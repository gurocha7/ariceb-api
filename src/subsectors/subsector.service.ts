import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubsectorRepository } from './subsector.repository'
import { CreateSubsectorDTO } from './dtos/createSubsector.dto';
import { Subsector } from './subsector.entity';
import { SectorService } from 'src/sectors/sector.service';
import { UpdateSubsectorDTO } from './dtos/updateSubsector.dto';
import { ListSubsectorDTO } from './dtos/listSubsector.dto';

@Injectable()
export class SubsectorService {
  constructor(
    @InjectRepository(SubsectorRepository)
    private subsectorRepository: SubsectorRepository,
    private sectorService: SectorService
  ) {}

  async createSubsector(createSubsectorDTO: CreateSubsectorDTO): Promise<Subsector>{
    try {
      const {name,sector_id} = createSubsectorDTO
      const sector = await this.sectorService.getSectorById(sector_id)
      const newsubsector = this.subsectorRepository.create({
        name,
        sector
      });
      await this.subsectorRepository.save(newsubsector)
      return newsubsector
    } catch (error) {
      throw new InternalServerErrorException('Erro ao cadastrar subsetor.');
    }
  }

  async listSubsectors(): Promise<Subsector[]>{
    try {
      return await this.subsectorRepository.find()
    } catch (error) {
      throw new InternalServerErrorException('Não foi possível encontrar subsetores.');
    }
  }

  async updateSubsector(updateSubsectorDTO: UpdateSubsectorDTO, id: string): Promise<Subsector>{
    try {
      const {sector_id, name} = updateSubsectorDTO
      const sector = await this.sectorService.getSectorById(sector_id)
      const newsubsector = await this.subsectorRepository.create({
        name,
        sector
      });
      await this.subsectorRepository.update( { id } , newsubsector);
      return await this.getSubsectorById(id);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao tentar atualizar subsetor.')
    }
  }

  async deleteSubsector(id: string): Promise<string>{
    try {
      const subsector = await this.getSubsectorById(id)
      await this.subsectorRepository.delete({ id: subsector.id })
      return "Subsetor apagado com sucesso!"
    } catch (error) {
      throw new InternalServerErrorException('Não foi possível encontrar o subsetor.');
    }
  }

  async getSubsectorById(id: string): Promise<Subsector> {
    const subsector = await this.subsectorRepository.findOne(id);
    if (!subsector) {
      throw new InternalServerErrorException('Subsetor não encontrado.')
    }
    return subsector;
  }

  async getSubsectorsInSector(sectorId: string): Promise<ListSubsectorDTO> {
    const sector = await this.sectorService.getSectorById(sectorId);
    const subsectors = await this.subsectorRepository.find({sector});
    let subsectorsList = new ListSubsectorDTO();
    subsectorsList.subsectors = subsectors
    return subsectorsList;
  }
}