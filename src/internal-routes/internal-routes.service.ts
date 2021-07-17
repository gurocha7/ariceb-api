import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { CreateSubsectorDTO } from './dtos/createSubsector.dto';
// import { SectorService } from 'src/sectors/sector.service';
// import { UpdateSubsectorDTO } from './dtos/updateSubsector.dto';
import { InternalRouteRepository } from './internal-routes.repository'
import { InternalRoute } from './internal-routes.entity'

@Injectable()
export class InternalRouteService {

}