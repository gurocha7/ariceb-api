import { ApiProperty } from '@nestjs/swagger';
import { ResultQueryPaged } from '../../shared/dtos/resultQueryPaged.dto';
import { ClientDto } from './client.dto';

export class ResultClientsQueryPagedDto extends ResultQueryPaged {
  @ApiProperty({ type: [ClientDto] })
  data: ClientDto[];
}
