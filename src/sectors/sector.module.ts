import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SectorRepository } from './sector.repository';
import { SectorService } from './sector.service';
import { SectorController } from './sector.controller';
import { BuildingsModule } from 'src/buildings/buildings.module';

@Module({
  imports: [TypeOrmModule.forFeature([SectorRepository]), BuildingsModule],
  providers: [SectorService],
  controllers: [SectorController],
  exports: [SectorService]
})
export class SectorModule {}
