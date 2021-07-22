import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {InternalRouteRepository} from './internal-routes.repository'
import { InternalRouteController } from './internal-routes.controller'
import {InternalRouteService} from './internal-routes.service'
import { SubsectorModule } from 'src/subsectors/subsector.module'

@Module({
  imports: [TypeOrmModule.forFeature([InternalRouteRepository]), SubsectorModule],
  providers: [InternalRouteService],
  controllers: [InternalRouteController],
  exports:[InternalRouteService]
})
export class InternalRouteModule {}