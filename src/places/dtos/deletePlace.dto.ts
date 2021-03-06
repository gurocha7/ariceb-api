import { IsNotEmpty } from 'class-validator';

export class DeletePlaceDTO {
  @IsNotEmpty({
    message: 'Informe o id do setor',
  })
  id: string;
}