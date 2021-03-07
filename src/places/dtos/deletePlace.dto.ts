import { IsNotEmpty } from 'class-validator';

export class DeletePlaceDTO {
  @IsNotEmpty({
    message: 'Informe o id do lugar',
  })
  id: string;
}