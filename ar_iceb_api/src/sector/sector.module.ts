import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SectorRepository } from './sector.repository';
import { SectorService } from './sector.service'
import { SectorController} from './sector.controller'

@Module({
  imports: [TypeOrmModule.forFeature([SectorRepository])],
  providers: [SectorService],
  controllers: [SectorController],
})
export class SectorModule {}
