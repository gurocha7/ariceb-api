import { Body, Controller, Delete, HttpStatus ,Post, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PlacesTypeService} from './placesType.service'
import { CreatePlacesTypeDTO } from './dtos/createPlacesType.dto';
import { PlacesType } from './placesType.entity';

@Controller('v1/placesType')
export class PlacesTypeController {
  constructor(private placesTypeService: PlacesTypeService) {}

  @Post()
  @ApiOperation({
    summary: 'Criando um setor',
  })
  @ApiResponse({
    description: 'Setor criado.',
    status: HttpStatus.OK,
    type: CreatePlacesTypeDTO,
  })
  async createPlacesType(
    @Body() createPlacesTypeDTO: CreatePlacesTypeDTO,
  ): Promise<PlacesType> {
    return await this.placesTypeService.createPlacesType(createPlacesTypeDTO);
  }

}