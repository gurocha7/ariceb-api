import {EntityRepository, Repository} from 'typeorm';
import {InternalRoute} from './internal-routes.entity'

@EntityRepository(InternalRoute)
export class InternalRouteRepository extends Repository<InternalRoute> {}