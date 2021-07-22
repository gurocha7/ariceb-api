import { IsNotEmpty, MaxLength } from 'class-validator';
import { Double } from 'typeorm';

export class CreateRouteDTO {

  originLat: number;
  originLong: number;
  destinyLat: number;
  destinyLong: number;
}