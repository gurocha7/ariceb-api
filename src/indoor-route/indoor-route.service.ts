import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubsectorService} from 'src/subsectors/subsector.service'
import { IndoorRouteRepository } from './indoor-route.repository';
import { CreateIndoorRouteDTO } from './dtos/createIndoorRoute.dto';
import { IndoorRoute } from './indoor-route.entity';
import { GetIndoorRoute } from './dtos/getIndoorRoute.dto';

@Injectable()
export class IndoorRouteService {
    constructor(
        @InjectRepository(IndoorRouteRepository)
        private indoorrouteRepository: IndoorRouteRepository,
        private sectorService: SubsectorService
      ) {}

    async createRoute(createInternalRouteDTO: CreateIndoorRouteDTO): Promise<IndoorRoute>{
        try {
            const {origin_id,qrcodeTag,destination_id,
                destinationTag,steps,nextQrcodeTags} = createInternalRouteDTO
            const originId = await this.sectorService.getSubsectorById(origin_id)
            const destinationId = await this.sectorService.getSubsectorById(destination_id)
            const newroute = this.indoorrouteRepository.create({
            originId,
            qrcodeTag,
            destinationId,
            destinationTag,
            steps: JSON.stringify(steps),
            nextQrcodeTags: JSON.stringify(nextQrcodeTags)
            });
            await this.indoorrouteRepository.save(newroute)
            return newroute
        } catch (error) {
            throw new InternalServerErrorException('Erro ao cadastrar rota.');
        }
    }

    async route(): Promise<IndoorRoute>{
        console.log("entrando")
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

    async internalroute(listInternalRoute: GetIndoorRoute): Promise<IndoorRoute>{
        console.log("entrando")
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
            await this.indoorrouteRepository.delete({ id: route.id })
            return "Rota interna apagada com sucesso!"
        } catch (error) {
            throw new InternalServerErrorException('Não foi possível encontrar a rota.');
        }
    }

    async getRouteById(id: string): Promise<IndoorRoute> {
        const route = await this.indoorrouteRepository.findOne(id);
        if (!route) {
          throw new InternalServerErrorException('Rota interna não encontrado.')
        }
        return route;
      }
}