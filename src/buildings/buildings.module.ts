import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuildingRepository } from './buildings.repository';
import { BuildingsService } from './buildings.service';
import { BuildingsController } from './buildings.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BuildingRepository])],
  providers: [BuildingsService],
  controllers: [BuildingsController],
  exports: [BuildingsService]
})
export class BuildingsModule {}
