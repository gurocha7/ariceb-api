import {EntityRepository, Repository} from 'typeorm';
import { IndoorRoute } from './indoor-route.entity'

@EntityRepository(IndoorRoute)
export class IndoorRouteRepository extends Repository<IndoorRoute> {}