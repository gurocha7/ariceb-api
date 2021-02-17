import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './client.entity';
import { ClientRepository } from './clients.repository';
import { CreateClientDto } from './dtos/createClient.dto';
import { FindClientsQueryDto } from './dtos/findClientsQuery.dto';
import { ResultClientsQueryPagedDto } from './dtos/resultClientsQueryPaged.dto';
import { UpdateClientDto } from './dtos/updateClient.dto';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(ClientRepository)
    private clientRepository: ClientRepository,
  ) {}

  async createClient(createClientDto: CreateClientDto): Promise<Client> {
    try {
      const existsClient = await this.clientRepository.findOne({
        name: createClientDto.name,
      });

      if (existsClient) {
        throw new ConflictException('Nome já está em uso.');
      }

      return await this.clientRepository.save(createClientDto);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao salvar o cliente.');
    }
  }

  async getClientById(id: string): Promise<Client> {
    const client = await this.clientRepository.findOne(id);

    if (!client) {
      throw new NotFoundException('Cliente não encontrado.');
    }

    return client;
  }

  async updateClient(updateClientDto: UpdateClientDto, id: string) {
    try {
      await this.clientRepository.update({ id }, updateClientDto);
      return await this.getClientById(id);
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Nome já está em uso.');
      } else {
        throw new InternalServerErrorException('Erro ao atualizar o cliente.');
      }
    }
  }

  async deleteClient(id: string) {
    const client = await this.getClientById(id);
    await this.clientRepository.delete({ id: client.id });
  }

  async getClients(
    queryDto: FindClientsQueryDto,
  ): Promise<ResultClientsQueryPagedDto> {
    return await this.clientRepository.getClientsPaged(queryDto);
  }
}
