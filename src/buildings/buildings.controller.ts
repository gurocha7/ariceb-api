import { Body, Controller, Delete, Post, Query, Get } from '@nestjs/common';
import { Building } from './buildings.entity';
import { BuildingsService } from './buildings.service';
import { CreateBuildingDTO } from './dtos/createBulding.dto';
import { ListBuildingsDTO } from './dtos/listBuildings.dto'

@Controller('v1/buildings')
export class BuildingsController {
  constructor(private buildingService: BuildingsService) {}

  @Post()
  async createBuilding(
    @Body() createBuildindDTO: CreateBuildingDTO,
  ): Promise<Building> {
    return await this.buildingService.createBuilding(createBuildindDTO);
  }

  @Get()
  async listBuildings(@Body() listBuildingsDTO: ListBuildingsDTO ): Promise<[Building]>{
    return await this.buildingService.listBuildings(listBuildingsDTO);
  }
}
