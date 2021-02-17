import { Body, Controller, Delete, Post, Query } from '@nestjs/common';
import { SectorService } from './sector.service';

@Controller('v1/sectors')
export class SectorController {
  constructor(private sectorService: SectorService) {}
}
