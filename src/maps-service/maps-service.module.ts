import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouteService } from './maps-service.service'
import { MapsServiceRepository } from './maps-service.repository'
import { RouteController } from './maps-service.controller'

import { SubsectorModule } from 'src/subsectors/subsector.module';
import { PlacesTypeModule } from 'src/placesType/placesType.module';

@Module({
  imports: [TypeOrmModule.forFeature([MapsServiceRepository])],
  providers: [RouteService],
  controllers: [RouteController],
})
export class MapsServiceModule {}