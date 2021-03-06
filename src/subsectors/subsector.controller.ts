import { Body, Controller, Delete,Get,HttpStatus, Post, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SubsectorService } from './subsector.service';
import { CreateSubsectorDTO } from './dtos/createSubsector.dto'
import { Subsector } from './subsector.entity';

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
}