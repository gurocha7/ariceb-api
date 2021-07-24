import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Route } from './maps-service.entity';
import { MapsServiceRepository } from './maps-service.repository';
import { CreateRouteDTO } from './dtos/createRoute.dto';
import { BuildingsService } from 'src/buildings/buildings.service';
import { Building } from 'src/buildings/buildings.entity'
import { ListRouteDTO } from './dtos/listRoute.dto';

@Injectable()
export class RouteService {
  [x: string]: any;
  constructor(
    @InjectRepository(MapsServiceRepository)
    private mapsServiceRepository: MapsServiceRepository,
    private buildingService: BuildingsService ) {}

    async createRoute(
      createRouteDTO: CreateRouteDTO,
    ): Promise<Route> {
      try {
        return this.mapsServiceRepository.save(createRouteDTO);
      } catch (error) {
        throw new InternalServerErrorException('Erro ao cadastrar rota.');
      }
    }

    async route(originId: string,destinyId: string): Promise<ListRouteDTO>{
          const buildingOrigin = await this.buildingService.getBuildingById(originId);
          const buildingDestiny = await this.buildingService.getBuildingById(destinyId);
          const r = new ListRouteDTO()
          r.buildingOrigin = buildingOrigin
          r.buildingDestiny = buildingDestiny
          return r
      }

      async deleteRoute(id: string): Promise<string> {
        try {
          await this.mapsServiceRepository.delete({ id: id });
          return "Rota deletada com sucesso!"
        } catch (error) {
          throw new InternalServerErrorException('Erro ao tentar deletar rota.')
        }
      }
}