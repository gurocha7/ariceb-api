import {EntityRepository, Repository} from 'typeorm';
import { Subsector } from './subsector.entity';

@EntityRepository(Subsector)
export class SubsectorRepository extends Repository<Subsector> {}