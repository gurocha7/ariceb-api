import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlacesTypeRepository} from './placesType.repository'
import { PlacesTypeController } from './placesType.controller'
import { PlacesTypeService } from './placesType.service'

@Module({
  imports: [TypeOrmModule.forFeature([PlacesTypeRepository])],
  providers: [PlacesTypeService],
  controllers: [PlacesTypeController],
})
export class PlacesTypeModule {}