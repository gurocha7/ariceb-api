import {EntityRepository, Repository} from 'typeorm';
import { Route } from './maps-service.entity'

@EntityRepository(Route)
export class MapsServiceRepository extends Repository<Route> {}