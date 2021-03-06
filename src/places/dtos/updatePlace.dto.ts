import { IsNotEmpty, MaxLength } from 'class-validator';

export class UpdatePlaceDTO {
  @IsNotEmpty({
    message: 'Informe o nome do cliente',
  })
  @MaxLength(200, {
    message: 'O nome deve ter menos de 200 caracteres',
  })
  
  name: string;
  subsector_id: string;
}