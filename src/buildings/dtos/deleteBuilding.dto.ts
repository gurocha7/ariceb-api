import { IsNotEmpty } from 'class-validator';

export class DeleteBuildingDTO {
  @IsNotEmpty({
    message: 'Informe o id do prédio',
  })
  id: string;
}