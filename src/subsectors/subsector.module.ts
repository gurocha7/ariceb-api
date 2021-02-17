import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SubsectorRepository } from './subsector.repository'
import { SubsectorService } from './subsector.service'
import { SubsectorController }  from './subsector.controller'

@Module({
  imports: [TypeOrmModule.forFeature([SubsectorRepository])],
  providers: [SubsectorService],
  controllers: [SubsectorController],
})
export class SectorModule {}