import {EntityRepository, Repository} from 'typeorm';
import { PlacesType } from './placesType.entity'

@EntityRepository(PlacesType)
export class PlacesTypeRepository extends Repository<PlacesType> {}