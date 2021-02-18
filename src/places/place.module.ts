import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaceRepository } from './place.repository'
import { PlaceService } from './place.service'
import { PlaceController } from './place.controller'
// import { SectorController } from './sector.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PlaceRepository])],
  providers: [PlaceService],
  controllers: [PlaceController],
})
export class PlaceModule {}