import { IsNotEmpty, MaxLength } from 'class-validator';
import { Double } from 'typeorm';

export class CreatePlacesTypeDTO {
  @IsNotEmpty({
    message: 'Informe o nome do lugar',
  })
  @MaxLength(200, {
    message: 'O nome deve ter menos de 200 caracteres',
  })

  name: string;
}