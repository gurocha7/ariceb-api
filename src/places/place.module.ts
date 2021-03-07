import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaceRepository } from './place.repository'
import { PlaceService } from './place.service'
import { PlaceController } from './place.controller'
import { SubsectorModule } from 'src/subsectors/subsector.module';
import { PlacesTypeModule } from 'src/placesType/placesType.module';

@Module({
  imports: [TypeOrmModule.forFeature([PlaceRepository]), SubsectorModule, PlacesTypeModule],
  providers: [PlaceService],
  controllers: [PlaceController],
})
export class PlaceModule {}