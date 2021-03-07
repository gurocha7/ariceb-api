import { IsNotEmpty } from 'class-validator';

export class DeletePlacesTypeDTO {
  @IsNotEmpty({
    message: 'Informe o id do type',
  })
  id: string;
}