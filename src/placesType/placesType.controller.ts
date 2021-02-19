import { Body, Controller, Delete, Post, Query } from '@nestjs/common';
import { PlacesTypeService} from './placesType.service'

@Controller('v1/placesType')
export class PlacesTypeController {
  constructor(private placesTypeService: PlacesTypeService) {}
}