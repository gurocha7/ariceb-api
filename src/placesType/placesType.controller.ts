import { Body, Controller, Delete,Param,Put ,HttpStatus ,Post, Query, Get } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PlacesTypeService} from './placesType.service'
import { CreatePlacesTypeDTO } from './dtos/createPlacesType.dto';
import { PlacesType } from './placesType.entity';
import { UpdatePlacesTypeDTO } from './dtos/updatePlacesType.dto';

@Controller('v1/placesType')
export class PlacesTypeController {
  constructor(private placesTypeService: PlacesTypeService) {}

  @Post()
  @ApiOperation({
    summary: 'Criando um placeType',
  })
  @ApiResponse({
    description: 'PlaceType criado.',
    status: HttpStatus.OK,
    type: CreatePlacesTypeDTO,
  })
  async createPlacesType(
    @Body() createPlacesTypeDTO: CreatePlacesTypeDTO,
  ): Promise<PlacesType> {
    return await this.placesTypeService.createPlacesType(createPlacesTypeDTO);
  }

  @Get()
  async listPlacesType(): Promise<PlacesType[]>{
    return await this.placesTypeService.listPlacesType()
  }

  @Delete(':id')
  async deletePlace(@Param('id') id: string): Promise<string>{
    return await this.placesTypeService.deletePlacesType(id)
  }

  @Put(':id')
  async updatePlace(@Body() updatePlacesTypeDTO:UpdatePlacesTypeDTO,
                    @Param('id') id: string ): Promise<PlacesType>{
    return await this.placesTypeService.updatePlacesType(updatePlacesTypeDTO,id)
  }

}