import { EntityRepository, Repository } from 'typeorm';
import { Building } from './buildings.entity';

@EntityRepository(Building)
export class BuildingRepository extends Repository<Building> {}
