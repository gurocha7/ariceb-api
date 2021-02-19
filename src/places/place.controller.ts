import { Body, Controller, Delete, Post, Query } from '@nestjs/common';
import { PlaceService } from './place.service'

@Controller('v1/places')
export class PlaceController {
  constructor(private placeService: PlaceService) {}
}