import {EntityRepository, Repository} from 'typeorm';
import { Institution } from './institution.entity';

@EntityRepository(Institution)
export class InstitutionRepository extends Repository<Institution> {}