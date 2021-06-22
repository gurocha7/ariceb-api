import { IsNotEmpty, MaxLength } from 'class-validator';
import { Double } from 'typeorm';

export class CreateRouteDTO {

  origLat: number;
  origLong: number;
  destLat: number;
  destLong: number;
}