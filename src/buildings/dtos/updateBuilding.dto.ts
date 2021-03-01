import { IsNotEmpty, MaxLength } from 'class-validator';

export class UpdateBuildingDTO {
  @IsNotEmpty({
    message: 'Informe o nome do cliente',
  })
  @MaxLength(200, {
    message: 'O nome deve ter menos de 200 caracteres',
  })
  
  name: string;
  number: number;
}