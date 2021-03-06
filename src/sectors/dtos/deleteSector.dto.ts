import { IsNotEmpty } from 'class-validator';

export class DeleteSectorDTO {
  @IsNotEmpty({
    message: 'Informe o id do setor',
  })
  id: string;
}