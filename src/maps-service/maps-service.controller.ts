import { Body, Controller, Delete,HttpStatus,Param ,Post, Query, Get, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RouteService } from './maps-service.service'
import { Route} from './maps-service.entity'

@Controller('v1/route')
export class RouteController {

    constructor(private routeService: RouteService){}

    @Get()
    async route(): Promise<Route>{
        return await this.routeService.route()
      }

}