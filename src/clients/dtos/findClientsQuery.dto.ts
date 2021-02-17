import { ApiPropertyOptional } from '@nestjs/swagger';
import { BaseQueryParametersDto } from '../../shared/dtos/baseQueryParamers.dto';

export class FindClientsQueryDto extends BaseQueryParametersDto {
  @ApiPropertyOptional({
    description: 'Nome do cliente',
    example: 'Empresa X',
  })
  name: string;
}
