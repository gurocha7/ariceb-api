import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateClientDto {
  @ApiProperty({
    description: 'Nome do cliente',
    example: 'Empresa X',
  })
  @IsNotEmpty({
    message: 'Informe o nome do cliente',
  })
  @MaxLength(200, {
    message: 'O nome deve ter menos de 200 caracteres',
  })
  name: string;
}
