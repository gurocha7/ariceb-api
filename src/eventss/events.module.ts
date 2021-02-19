import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsRepository } from './events.repository'
// import { SectorService } from './sector.service';
// import { SectorController } from './sector.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EventsRepository])],
//   providers: [SectorService],
//   controllers: [SectorController],
})
export class EventsModule {}