import { Body, Controller, Delete,HttpStatus,Param ,Post, Query, Get, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RouteService } from './maps-service.service'
import { Route} from './maps-service.entity'
import { CreateRouteDTO } from './dtos/createRoute.dto'
import { from } from 'rxjs';

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
        type: CreateRouteDTO,
      })
    async route(): Promise<Route>{
        return await this.routeService.route()
    }
}