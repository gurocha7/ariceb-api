import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { CreateSubsectorDTO } from './dtos/createSubsector.dto';
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

    async route(): Promise<InternalRoute>{
        console.log("entrou aqui")
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