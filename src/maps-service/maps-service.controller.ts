import { Body, Controller, Delete,HttpStatus,Param ,Post, Query, Get, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RouteService } from './maps-service.service'
import { Route} from './maps-service.entity'
import { CreateRouteDTO } from './dtos/createRoute.dto'
import { from } from 'rxjs';
import { ListRouteDTO } from './dtos/listRoute.dto';

@Controller('v1/route')
export class RouteController {

    constructor(private routeService: RouteService){}

    @Get()
    @ApiOperation({
        summary: 'Pegando rota',
      })
      @ApiResponse({
        description: 'Trajeto obtido com sucesso',
        status: HttpStatus.OK,
        type: ListRouteDTO,
      })
    async route(@Body('originID') originID: string,@Body('destinyID') destinyID: string): Promise<ListRouteDTO>{
      return await this.routeService.route(originID,destinyID);
    }

    @Post()
    @ApiOperation({
      summary: 'Atualizando uma rota',
    })
    @ApiResponse({
      description: 'Rota externa atualizado.',
      status: HttpStatus.OK,
      type: CreateRouteDTO,
    })
    async createBuilding(
      @Body() createRouteDTO: CreateRouteDTO,
    ): Promise<Route> {
      return await this.routeService.createRoute(createRouteDTO);
    }

    @Delete(':id')
    @ApiOperation({
      summary: 'Deletando uma rota',
    })  
    @ApiResponse({
      description: 'Rota deletada com sucesso.',
      status: HttpStatus.OK, 
    })
      async deleteBuilding(@Param('id') id: string): Promise<string>{
      return await this.routeService.deleteRoute(id);
    }
}