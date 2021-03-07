import { IsNotEmpty, MaxLength } from 'class-validator';
import { Double } from 'typeorm';

export class CreatePlaceDTO {
  @IsNotEmpty({
    message: 'Informe o nome do lugar',
  })
  @MaxLength(200, {
    message: 'O nome deve ter menos de 200 caracteres',
  })

  name: string;
  subsector_id: string;
  lat: string;
  long: string;
  type_id: string;
}