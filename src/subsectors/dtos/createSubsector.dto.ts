import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateSubsectorDTO {
  @IsNotEmpty({
    message: 'Informe o nome do subsetor',
  })
  @MaxLength(200, {
    message: 'O nome deve ter menos de 200 caracteres',
  })

  name: string;
  sector_id: string;
}