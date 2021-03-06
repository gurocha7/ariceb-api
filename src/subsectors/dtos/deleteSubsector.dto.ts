import { IsNotEmpty } from 'class-validator';

export class DeleteSubsectorDTO {
  @IsNotEmpty({
    message: 'Informe o id do subsetor',
  })
  
  id: string;
}