import { Body, Controller, Delete,HttpStatus,Param ,Post, Query, Get, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateIndoorRouteDTO } from './dtos/createIndoorRoute.dto'
import { from } from 'rxjs';
import { IndoorRoute } from './indoor-route.entity';
import { IndoorRouteService } from './indoor-route.service';
import { GetIndoorRoute } from './dtos/getIndoorRoute.dto';

@Controller('v1/indoorroute')
export class IndoorRouteController {

    constructor(private indoorrouteService: IndoorRouteService){}

    @Post()
    @ApiOperation({
    summary: 'Criando uma rota interna',
    })
    @ApiResponse({
    description: 'Rota interna criada.',
    status: HttpStatus.OK,
    type: CreateIndoorRouteDTO,
    })
    async createSubsector(
    @Body() createInternalRouteDTO: CreateIndoorRouteDTO,
    ): Promise<IndoorRoute> {
    return await this.indoorrouteService.createRoute(createInternalRouteDTO);
    }

    @Get()
    async internalroute(@Body() listInternalRoute: GetIndoorRoute): Promise<IndoorRoute>{
        return await this.indoorrouteService.internalroute(listInternalRoute);
    }

    @Delete(':id')
    async deleteRoute(@Param('id') id: string): Promise<string>{
        return await this.indoorrouteService.deleteRoute(id)
    }
}