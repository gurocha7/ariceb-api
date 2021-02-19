import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EventsRepository } from './events.repository'

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(EventsRepository)
    private eventsRepository: EventsRepository,
  ) {}
}