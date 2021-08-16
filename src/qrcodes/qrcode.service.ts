import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BuildingsService  } from '../buildings/buildings.service'
import { CreateQrcodeDTO} from './dtos/createQrcode.dto'
import { SectorService } from 'src/sectors/sector.service'
import { SubsectorService } from 'src/subsectors/subsector.service'
import { Qrcode } from './qrcode.entity'
import { Double } from 'typeorm';
import { Building } from 'src/buildings/buildings.entity';
import { QrcodeRepository } from './qrcode.repository'

@Injectable()
export class QrcodeService {
  constructor(
    @InjectRepository(QrcodeRepository)
    private qrcodeRepository: QrcodeRepository, private buildingService: BuildingsService,
    private sectorService: SectorService,private subsectorService: SubsectorService
  ) {}

  async createQrcode(createSectorDTO: CreateQrcodeDTO): Promise<Qrcode> {
    try {
      const {name,building_id,sector_id,subsector_id} = createSectorDTO
      const building = await this.buildingService.getBuildingById(building_id)
      const sector = await this.sectorService.getSectorById(sector_id)
      const subsector = await this.subsectorService.getSubsectorById(subsector_id)
      const newqrcode = await this.qrcodeRepository.create({
        name,
        building,
        sector,
        subsector
      });
      await this.qrcodeRepository.save(newqrcode)
      return newqrcode
    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('Erro ao cadastrar setor.');
    }
  }

  async listQrcodes(): Promise<Qrcode[]> {
    try {
      return this.qrcodeRepository.find()
    } catch (error) {
      throw new InternalServerErrorException('Erro ao cadastrar listar qrcodes.');
    }
  }
  
//   async listSectorsByBuildingId(id: string): Promise<ListSectorDTO> {
//     try {
//       const sectors = await this.getSectorsInBuilding(id);
//       return sectors
//     } catch (error) {
//       throw new InternalServerErrorException('Setor não encontrado.');
//     }
//   }

  async deleteQrcode(id: string): Promise<string>{
      try {
        const qrcode = await this.getQrcodeById(id)
         await this.qrcodeRepository.delete({ id: qrcode.id })
         return 'Qrcode deletado com sucesso!'
      } catch (error) {
        throw new InternalServerErrorException('Qrcode não encontrado.');
      }
  }

  async getQrcodeById(id: string): Promise<Qrcode> {
    const qrcode = await this.qrcodeRepository.findOne(id);
    if (!qrcode) {
      throw new InternalServerErrorException('Qrcode não encontrado.')
    }
    return qrcode;
  }

//   async getSectorsInBuilding(buildingId: string): Promise<ListSectorDTO> {
//     const building = await this.buildingService.getBuildingById(buildingId);
//     const sectors = await this.sectorRepository.find({building})
//     let listSectors = new ListSectorDTO();
//     listSectors.sectors = sectors
//     return listSectors;
//   }
}
