import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IndoorRouteRepository} from './indoor-route.repository'
import { SubsectorModule } from 'src/subsectors/subsector.module'
import { IndoorRouteService } from './indoor-route.service';
import { IndoorRouteController } from './indoor-route.controller';

@Module({
  imports: [TypeOrmModule.forFeature([IndoorRouteRepository]), SubsectorModule],
  providers: [IndoorRouteService],
  controllers: [IndoorRouteController],
  exports:[IndoorRouteService]
})
export class IndoorRouteModule {}