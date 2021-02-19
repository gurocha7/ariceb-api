import { Body, Controller, Delete, Post, Query } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('v1/eventss')
export class EventsController {
  constructor(private eventsService: EventsService) {}
}
