import { Body, Controller, Delete, Post, Put ,Query, HttpStatus, Get, Param } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SectorService } from './sector.service';
import { CreateSectorDTO } from './dtos/createSector.dto';
import { Sector } from './sector.entity';
import { UpdateSectorDTO } from './dtos/updateSector.dto';

@Controller('v1/sectors')
export class SectorController {
  constructor(private sectorService: SectorService) {}

  @Post()
  @ApiOperation({
    summary: 'Criando um setor',
  })
  @ApiResponse({
    description: 'Setor criado.',
    status: HttpStatus.OK,
    type: CreateSectorDTO,
  })
  async createSector(
    @Body() createSectorDTO: CreateSectorDTO,
  ): Promise<Sector> {
    return await this.sectorService.createSector(createSectorDTO);
  }

  @Get()
  async listSectors(): Promise<Sector[]>{
    return await this.sectorService.listSectors()
  }

  @Delete(':id')
  async deleteSector(@Param('id') id: string): Promise<String>{
    const result = await this.sectorService.deleteSector(id)
    return result
  }

  @Put(':id')
  async updateSector(@Body() updateSectorDTO:UpdateSectorDTO, 
                     @Param('id') id: string ): Promise< Sector >{
    const sector = await this.sectorService.updateSector(updateSectorDTO,id)
    return sector;
  }
}
