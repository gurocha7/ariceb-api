import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {CreateInternalRouteDTO} from './dtos/createInternalRoutes.dto'
import { InternalRouteRepository } from './internal-routes.repository'
import { InternalRoute } from './internal-routes.entity'
import { SubsectorService} from 'src/subsectors/subsector.service'

@Injectable()
export class InternalRouteService {
    constructor(
        @InjectRepository(InternalRouteRepository)
        private internalrouteRepository: InternalRouteRepository,
        private sectorService: SubsectorService
      ) {}

    async createRoute(createInternalRouteDTO: CreateInternalRouteDTO): Promise<InternalRoute>{
        try {
            const {origin_id,destination_id,steps} = createInternalRouteDTO
            const originId = await this.sectorService.getSubsectorById(origin_id)
            const destinationId = await this.sectorService.getSubsectorById(destination_id)
            const newroute = this.internalrouteRepository.create({
            originId,
            destinationId,
            steps: JSON.stringify(steps)
            });
            await this.internalrouteRepository.save(newroute)
            return newroute
        } catch (error) {
            throw new InternalServerErrorException('Erro ao cadastrar subsetor.');
        }
    }

    async route(): Promise<InternalRoute>{
        try {
            const r = await this.getRouteById("2")
            // const r = new InternalRoute()
            r.steps = JSON.parse(r.steps)
        //   return await this.placeRepository.find()
            return r
        } catch (error) {
          throw new InternalServerErrorException('Erro ao buscar rota.');
        }
    }

    async deleteRoute(id: string): Promise<string>{
        try {
            const route = await this.getRouteById(id)
            await this.internalrouteRepository.delete({ id: route.id })
            return "Rota interna apagada com sucesso!"
        } catch (error) {
            throw new InternalServerErrorException('Não foi possível encontrar a rota.');
        }
    }

    async getRouteById(id: string): Promise<InternalRoute> {
        const route = await this.internalrouteRepository.findOne(id);
        if (!route) {
          throw new InternalServerErrorException('Rota interna não encontrado.')
        }
        return route;
      }
}