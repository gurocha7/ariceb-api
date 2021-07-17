import { Body, Controller, Delete,HttpStatus,Param ,Post, Query, Get, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {CreateInternalRouteDTO} from './dtos/createInternalRoutes.dto'
import {InternalRouteService} from './internal-routes.service'
import {InternalRoute} from './internal-routes.entity'
import { from } from 'rxjs';

@Controller('v1/internalroute')
export class InternalRouteController {

    // constructor(private routeService: RouteService){}

    // @Get()
    // @ApiOperation({
    //     summary: 'Pegando rota',
    //   })
    //   @ApiResponse({
    //     description: 'Trajeto obtido com sucesso',
    //     status: HttpStatus.OK,
    //     type: CreateRouteDTO,
    //   })
    // async route(): Promise<Route>{
    //     return await this.routeService.route()
    // }

}