import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsRepository } from './events.repository'
import { EventsController } from './events.controller'
import { EventsService } from './events.service'

@Module({
  imports: [TypeOrmModule.forFeature([EventsRepository])],
  providers: [EventsService],
  controllers: [EventsController],
})
export class EventsModule {}