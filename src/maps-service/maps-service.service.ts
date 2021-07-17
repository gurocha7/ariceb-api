import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Route } from './maps-service.entity';

@Injectable()
export class RouteService {

    async route(): Promise<Route>{
        try {
            const r = new Route()
            r.id = "dbsdfbsdhf"
            r.name = "rota 1"
        //   return await this.placeRepository.find()
            return r
        } catch (error) {
          throw new InternalServerErrorException('Erro ao buscar lugares.');
        }
      }

}