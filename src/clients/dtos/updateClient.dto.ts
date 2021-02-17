import { ApiProperty } from '@nestjs/swagger';
import { MaxLength, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateClientDto {
  @ApiProperty({
    description: 'O nome do cliente',
    example: 'Empresa X',
  })
  @IsOptional()
  @IsNotEmpty({
    message: 'Informe o nome do cliente',
  })
  @MaxLength(200, {
    message: 'O nome deve ter menos de 200 caracteres',
  })
  name: string;
}
