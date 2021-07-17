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
            const r = new InternalRoute()
            r.steps = "[]"
        //   return await this.placeRepository.find()
            return r
        } catch (error) {
          throw new InternalServerErrorException('Erro ao buscar rota.');
        }
      }
}