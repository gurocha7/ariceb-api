import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Query,
  ValidationPipe,
  HttpStatus,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ClientsService } from './clients.service';
import { ClientDto } from './dtos/client.dto';
import { CreateClientDto } from './dtos/createClient.dto';
import { FindClientsQueryDto } from './dtos/findClientsQuery.dto';
import { ResultClientsQueryPagedDto } from './dtos/resultClientsQueryPaged.dto';
import { UpdateClientDto } from './dtos/updateClient.dto';

@ApiTags('Clients')
@Controller('v1/clients')
export class ClientsController {
  constructor(private clientsService: ClientsService) {}

  /*
   * Create Client
   */
  @Post()
  @ApiBody({ type: CreateClientDto })
  @ApiOperation({
    summary: 'Criando um cliente',
  })
  @ApiResponse({
    description: 'Cliente criado.',
    status: HttpStatus.CREATED,
    type: ClientDto,
  })
  async createClient(
    @Body(ValidationPipe) createClientDto: CreateClientDto,
  ): Promise<ClientDto> {
    return await this.clientsService.createClient(createClientDto);
  }

  /*
   * Get Client
   */
  @Get(':id')
  @ApiOperation({
    summary: 'Listando um determinado cliente',
  })
  @ApiResponse({
    description: 'Cliente.',
    status: HttpStatus.OK,
    type: ClientDto,
  })
  async getClientById(@Param('id') id: string): Promise<ClientDto> {
    const client = await this.clientsService.getClientById(id);
    return client;
  }

  /*
   * Update Client
   */
  @Put(':id')
  @ApiBody({ type: UpdateClientDto })
  @ApiOperation({
    summary: 'Atualizando um cliente',
  })
  @ApiResponse({
    description: 'Cliente atualizado.',
    status: HttpStatus.OK,
    type: ClientDto,
  })
  async updateClient(
    @Body(ValidationPipe) updateClientDto: UpdateClientDto,
    @Param('id') id: string,
  ): Promise<ClientDto> {
    const client = await this.clientsService.updateClient(updateClientDto, id);
    return client;
  }

  /*
   * Delete Client
   */
  @Delete(':id')
  @ApiOperation({
    summary: 'Deletando um cliente',
  })
  @ApiResponse({
    description: 'Cliente deletado com sucesso.',
    status: HttpStatus.OK,
  })
  async deleteClient(@Param('id') id: string): Promise<void> {
    await this.clientsService.deleteClient(id);
  }

  /*
   * Get Clients
   */
  @Get()
  @ApiOperation({
    summary: 'Listando clientes',
  })
  @ApiResponse({
    description: 'Lista de clientes.',
    status: HttpStatus.OK,
    type: ResultClientsQueryPagedDto,
  })
  async getClients(@Query() query: FindClientsQueryDto) {
    const result = await this.clientsService.getClients(query);
    return result;
  }
}
