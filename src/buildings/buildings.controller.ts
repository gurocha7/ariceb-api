import { Body, Controller, Delete, Post, Query,HttpStatus,Put, Get, Param } from '@nestjs/common';
import { Building } from './buildings.entity';
import { BuildingsService } from './buildings.service';
import { CreateBuildingDTO } from './dtos/createBulding.dto';
import { ListBuildingsDTO } from './dtos/listBuildings.dto'
import { DeleteBuildingDTO } from './dtos/deleteBuilding.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateBuildingDTO } from './dtos/updateBuilding.dto';

@Controller('v1/buildings')
export class BuildingsController {
  constructor(private buildingService: BuildingsService) {}

  @Post()
  @ApiOperation({
    summary: 'Atualizando um cliente',
  })
  @ApiResponse({
    description: 'Building atualizado.',
    status: HttpStatus.OK,
    type: CreateBuildingDTO,
  })
  async createBuilding(
    @Body() createBuildindDTO: CreateBuildingDTO,
  ): Promise<Building> {
    return await this.buildingService.createBuilding(createBuildindDTO);
  }

  @Get()
  async listBuildings(): Promise<Building[]>{
    return await this.buildingService.listBuildings();
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deletando um prédio',
  })  
  @ApiResponse({
    description: 'Prédio deletado com sucesso.',
    status: HttpStatus.OK, 
   })
    async deleteBuilding(@Param('id') id: string): Promise<string>{
    return await this.buildingService.deleteBuilding(id);
  }

  @Put(':id')
  async updateBuilding(@Body() updateBuildingDTO: UpdateBuildingDTO,
                       @Param('id') id: string): Promise<Building>{
    const building = await this.buildingService.updateBuilding(updateBuildingDTO,id);
    return building;
  }
}
