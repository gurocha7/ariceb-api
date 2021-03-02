import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateBuildingDTO {
  @IsNotEmpty({
    message: 'Informe o nome do prédio',
  })
  @MaxLength(200, {
    message: 'O nome deve ter menos de 200 caracteres',
  })
  name: string;
  number: number;
}
