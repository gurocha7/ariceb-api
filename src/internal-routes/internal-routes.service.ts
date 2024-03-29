import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {CreateInternalRouteDTO} from './dtos/createInternalRoutes.dto'
import { InternalRouteRepository } from './internal-routes.repository'
import { InternalRoute } from './internal-routes.entity'
import { SubsectorService} from 'src/subsectors/subsector.service'
import { ListInternalRoute } from './dtos/listInternalRoute.dto';
import { StepInternalRoute } from './dtos/stepInternalRoute.dto';

@Injectable()
export class InternalRouteService {
    constructor(
        @InjectRepository(InternalRouteRepository)
        private internalrouteRepository: InternalRouteRepository,
        private sectorService: SubsectorService
      ) {}

      async createRoute(createInternalRouteDTO: CreateInternalRouteDTO): Promise<InternalRoute>{
        try {
            const {origin_id,qrcodeTag,destination_id,destinationTag,steps,nextQrcodeTags} = createInternalRouteDTO
            const originId = await this.sectorService.getSubsectorById(origin_id)
            const destinationId = await this.sectorService.getSubsectorById(destination_id)
            const newroute = this.internalrouteRepository.create({
            originId,
            qrcodeTag,
            destinationId,
            destinationTag,
            steps: JSON.stringify(steps),
            nextQrcodeTags: JSON.stringify(nextQrcodeTags)
            });
            await this.internalrouteRepository.save(newroute)
            return newroute
        } catch (error) {
            throw new InternalServerErrorException('Erro ao cadastrar rota.');
        }
    }

    async internalroute(list: ListInternalRoute): Promise<StepInternalRoute>{
        try {
            const steps = await this.getSteps(list.qrcodeTag,list.destinationTag)
            const internalRoute = new StepInternalRoute()
            internalRoute.nextqrcode_tags = JSON.parse(steps.nextQrcodeTags);
            internalRoute.steps = JSON.parse(steps.steps);
            return internalRoute
        } catch (error) {
            throw new InternalServerErrorException('Erro ao pegar rota.');
        }
    }

    async getSteps(qrCode: string,destination: string): Promise<InternalRoute> {
        try {
            const step = await this.internalrouteRepository.findOne({qrcodeTag: qrCode,destinationTag:destination})
            return step
        } catch (error) {
            throw new InternalServerErrorException('Erro ao pegar steps.');
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