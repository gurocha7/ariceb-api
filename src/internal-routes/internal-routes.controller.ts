import { Body, Controller, Delete,HttpStatus,Param ,Post, Query, Get, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {CreateInternalRouteDTO} from './dtos/createInternalRoutes.dto'
import {InternalRouteService} from './internal-routes.service'
import {InternalRoute} from './internal-routes.entity'
import { from } from 'rxjs';
import { ListInternalRoute } from './dtos/listInternalRoute.dto';
import { StepInternalRoute } from './dtos/stepInternalRoute.dto';

@Controller('v1/internalroute')
export class InternalRouteController {

    constructor(private internalrouteService: InternalRouteService){}

    @Post()
    @ApiOperation({
    summary: 'Criando uma rota interna',
    })
    @ApiResponse({
    description: 'Rota interna criada.',
    status: HttpStatus.OK,
    type: CreateInternalRouteDTO,
    })
    async createSubsector(
    @Body() createInternalRouteDTO: CreateInternalRouteDTO,
    ): Promise<InternalRoute> {
    return await this.internalrouteService.createRoute(createInternalRouteDTO);
    }

    // @Get()
    // async route(): Promise<InternalRoute>{
    //     return await this.internalrouteService.route();
    // }

    @Get()
    async internalroute(@Body() list: ListInternalRoute): Promise<StepInternalRoute>{
        return await this.internalrouteService.internalroute(list);
    }

    @Delete(':id')
    async deleteRoute(@Param('id') id: string): Promise<string>{
        return await this.internalrouteService.deleteRoute(id)
    }
}