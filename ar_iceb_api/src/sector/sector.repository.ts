import {EntityRepository, Repository} from 'typeorm';
import { Sector } from './sector.entity';

@EntityRepository(Sector)
export class SectorRepository extends Repository<Sector> {}