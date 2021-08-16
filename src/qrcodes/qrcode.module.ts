import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QrcodeRepository } from './qrcode.repository'
import { QrcodeService } from './qrcode.service'
import { QRCodeController } from './qrcode.controller'
import { BuildingsModule } from 'src/buildings/buildings.module'
import { SectorModule } from 'src/sectors/sector.module'
import { SubsectorModule } from 'src/subsectors/subsector.module'

@Module({
  imports: [TypeOrmModule.forFeature([QrcodeRepository]), BuildingsModule,SectorModule,SubsectorModule],
  providers: [QrcodeService],
  controllers: [QRCodeController],
  exports: [QrcodeService]
})
export class QrcodeModule {}