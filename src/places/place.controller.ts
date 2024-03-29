import { Body, Controller, Delete,HttpStatus,Param ,Post, Query, Get, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PlaceService } from './place.service'
import { CreatePlaceDTO } from './dtos/createPlace.dto';
import { Place } from './place.entity';
import { UpdatePlaceDTO } from './dtos/updatePlace.dto';

@Controller('v1/places')
export class PlaceController {
  constructor(private placeService: PlaceService) {}

  @Post()
  @ApiOperation({
    summary: 'Criando um lugar',
  })
  @ApiResponse({
    description: 'Lugar criado.',
    status: HttpStatus.OK,
    type: CreatePlaceDTO,
  })
  async createPlace(
    @Body() createPlaceDTO: CreatePlaceDTO,
  ): Promise<Place> {
    return await this.placeService.createPlace(createPlaceDTO);
  }

  @Get()
  async listPlaces(): Promise<Place[]>{
    return await this.placeService.listPlaces()
  }

  @Delete(':id')
  async deletePlace(@Param('id') id: string): Promise<string>{
    return await this.placeService.deletePlace(id)
  }

  @Put(':id')
  async updatePlace(@Body() updatePlaceDTO:UpdatePlaceDTO,
                    @Param('id') id: string ): Promise<Place>{
    return await this.placeService.updatePlace(updatePlaceDTO,id)
  }
}