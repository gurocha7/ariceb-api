import { EntityRepository, Repository } from 'typeorm';
import { Client } from './client.entity';
import { FindClientsQueryDto } from './dtos/findClientsQuery.dto';
import { ResultClientsQueryPagedDto } from './dtos/resultClientsQueryPaged.dto';
import { getPaginationValues } from '../shared/helpers/getPaginationValues';

@EntityRepository(Client)
export class ClientRepository extends Repository<Client> {
  async getClientsPaged(
    queryDto: FindClientsQueryDto,
  ): Promise<ResultClientsQueryPagedDto> {
    let { limit = 10, page = 1 } = queryDto;
    limit = Number(limit) < 1 ? 10 : Number(limit);
    page = Number(queryDto.page) >= 1 ? Number(queryDto.page) : 1;

    const { name } = queryDto;
    const query = this.createQueryBuilder('client');
    if (name) {
      query.where('client.name LIKE :name', { name: `%${name}%` });
    }

    query.skip((page - 1) * limit);
    query.take(+limit);
    query.orderBy('client.createdAt', queryDto.sort);

    const [clients, total] = await query.getManyAndCount();

    return {
      data: clients,
      ...getPaginationValues(limit, page, total),
    };
  }
}
