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
import { ListQrcode, QrcodeInformation } from './dtos/listQrcode.dto';

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

  async deleteQrcode(id: string): Promise<string>{
      try {
        const qrcode = await this.getQrcodeById(id)
         await this.qrcodeRepository.delete({ id: qrcode.id })
         return 'Qrcode deletado com sucesso!'
      } catch (error) {
        throw new InternalServerErrorException('Qrcode não encontrado.');
      }
  }


  async getQrcodeById(id: string): Promise<ListQrcode> {
    const qrcode = await this.qrcodeRepository.findOne(id,{ 
        relations:["building","sector","subsector"]
    });

    const newQrcode = new ListQrcode()
    newQrcode.id = qrcode.id
    newQrcode.name = qrcode.name
    newQrcode.buildingID = qrcode.building.id
    newQrcode.sectorID = qrcode.sector.id
    newQrcode.subsectorID = qrcode.subsector.id

    if (!newQrcode) {
      throw new InternalServerErrorException('Qrcode não encontrado.')
    }
    return newQrcode;
  }

  async getQrcodeByName(info: QrcodeInformation): Promise<ListQrcode> {
    console.log("entrou 1")
    // const qrcode = await this.qrcodeRepository.findOne({name: info.name})
    // console.log("entrou 2")
    // console.log("QR: ", qrcode)
    // const qrcode = await this.qrcodeRepository.findOne(name,{
    //     relations:["building","sector","subsector"]
    // });

    try {
      const qrcode = await this.qrcodeRepository.findOne({name: info.name})
      console.log("entrou 2")
      console.log("QR: ", qrcode)
      const newQrcode = new ListQrcode()
      newQrcode.id = qrcode.id
      newQrcode.name = qrcode.name
      newQrcode.buildingID = qrcode.building.id
      newQrcode.sectorID = qrcode.sector.id
      newQrcode.subsectorID = qrcode.subsector.id
      return newQrcode;
    } catch (error) {
      throw new InternalServerErrorException('Qrcode não encontrado.')
    }
    // const newQrcode = new ListQrcode()
    // newQrcode.id = qrcode.id
    // newQrcode.name = qrcode.name
    // newQrcode.buildingID = qrcode.building.id
    // newQrcode.sectorID = qrcode.sector.id
    // newQrcode.subsectorID = qrcode.subsector.id
    // console.log("entrou 3")
    // if (!newQrcode) {
    //   throw new InternalServerErrorException('Qrcode não encontrado.')
    // }
    // return newQrcode;
  }
}
