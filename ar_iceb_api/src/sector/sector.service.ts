import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sector } from './sector.entity';
import { SectorRepository } from './sector.repository'

@Injectable()
export class SectorService{

}