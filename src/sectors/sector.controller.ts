import { Body, Controller, Delete, Post, Query, HttpStatus } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SectorService } from './sector.service';
import { CreateSectorDTO } from './dtos/createSector.dto';
import { Sector } from './sector.entity';

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
  async createBuilding(
    @Body() createSectorDTO: CreateSectorDTO,
  ): Promise<Sector> {
    return await this.sectorService.createSector(createSectorDTO);
  }
}
