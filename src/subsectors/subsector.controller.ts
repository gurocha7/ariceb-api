import { Body, Controller, Delete,Get,HttpStatus, Post, Query, Param, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SubsectorService } from './subsector.service';
import { CreateSubsectorDTO } from './dtos/createSubsector.dto'
import { Subsector } from './subsector.entity';
import { UpdateSubsectorDTO } from './dtos/updateSubsector.dto';

@Controller('v1/subsectors')
export class SubsectorController {
  constructor(private subsectorService: SubsectorService) {}

  @Post()
  @ApiOperation({
    summary: 'Criando um subsetor',
  })
  @ApiResponse({
    description: 'Subsetor criado.',
    status: HttpStatus.OK,
    type: CreateSubsectorDTO,
  })
  async createSubsector(
    @Body() createSubesctorDTO: CreateSubsectorDTO,
  ): Promise<Subsector> {
    return await this.subsectorService.createSubsector(createSubesctorDTO)
  }

  @Get()
  async listSubsectors(): Promise<Subsector[]>{
    return await this.subsectorService.listSubsectors()
  }

  @Get(':id')
  async listSubsctorBySector(@Param('id') id: string): Promise<Subsector[]>{
    return await this.subsectorService.getSubsectorsInSector(id);
  }

  @Delete(':id')
  async deleteSubsector(@Param('id') id: string): Promise<string>{
    return await this.subsectorService.deleteSubsector(id)
  }

  @Put(':id')
  async updateSubsector(
    @Body() updateSubsectorDTO:UpdateSubsectorDTO
    ,@Param('id') id: string): Promise<Subsector>{
    return await this.subsectorService.updateSubsector(updateSubsectorDTO,id)
  }
}