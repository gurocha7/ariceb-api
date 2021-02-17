import { Body, Controller, Delete, Post, Query } from '@nestjs/common';
import { Building } from './buildings.entity';
import { BuildingsService } from './buildings.service';
import { CreateBuildingDTO } from './dtos/createBulding.dto';

@Controller('v1/buildings')
export class BuildingsController {
  constructor(private buildingService: BuildingsService) {}

  @Post()
  async createBuilding(
    @Body() createBuildindDTO: CreateBuildingDTO,
  ): Promise<Building> {
    return await this.buildingService.createBuilding(createBuildindDTO);
  }
}
