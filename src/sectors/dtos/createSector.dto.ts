import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateSectorDTO {
  @IsNotEmpty({
    message: 'Informe o nome do setor',
  })
  @MaxLength(200, {
    message: 'O nome deve ter menos de 200 caracteres',
  })

  name: string;
  building_id: string;
}
