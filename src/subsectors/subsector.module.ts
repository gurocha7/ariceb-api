import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubsectorRepository } from './subsector.repository'
import { SubsectorService } from './subsector.service'
import { SubsectorController }  from './subsector.controller'
import { SectorModule } from 'src/sectors/sector.module'

@Module({
  imports: [TypeOrmModule.forFeature([SubsectorRepository]), SectorModule],
  providers: [SubsectorService],
  controllers: [SubsectorController],
  exports:[SubsectorService]
})
export class SubsectorModule {}