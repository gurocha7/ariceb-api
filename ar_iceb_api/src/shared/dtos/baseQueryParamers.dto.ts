import { ApiPropertyOptional } from '@nestjs/swagger';
import { SortEnum } from '../enums/sort.enum';
export abstract class BaseQueryParametersDto {
  @ApiPropertyOptional({
    description: 'Filtro de ordenação',
    example: 'ASC',
    enum: ['ASC', 'DESC'],
  })
  sort: SortEnum;

  @ApiPropertyOptional({
    description: 'Filtro de página',
    example: 1,
  })
  page: number;

  @ApiPropertyOptional({
    description: 'Filtro de limite de registros por página',
    example: 10,
  })
  limit: number;
}
