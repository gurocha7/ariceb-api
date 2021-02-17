import { ApiProperty } from '@nestjs/swagger';
export class ClientDto {
  @ApiProperty({
    description: 'O uuid do cliente',
    example: '6bcb7708-4539-4ed3-afe0-1121a428d325uu',
  })
  id: string;

  @ApiProperty({
    description: 'O nome do cliente',
    example: 'Empresa X',
  })
  name: string;

  @ApiProperty({ description: 'Data de criação do cliente na base.' })
  createdAt: Date;

  @ApiProperty({
    description: 'Data da ultima atualização do cliente na base.',
  })
  updatedAt: Date;
}
