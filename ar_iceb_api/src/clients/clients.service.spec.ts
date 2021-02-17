import {
  ConflictException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { ClientRepository } from './clients.repository';
import { ClientsService } from './clients.service';
import { FindClientsQueryDto } from './dtos/findClientsQuery.dto';

describe('ClientsService', () => {
  const clientsRepository = {} as jest.Mocked<ClientRepository>;
  const clientsService = new ClientsService(clientsRepository);

  const clientId = 'ea1cdbe1-cfd7-4fbe-9347-a4e2b80a7bf8';

  beforeEach(() => {
    clientsRepository.save = jest.fn();
    clientsRepository.update = jest.fn();
    clientsRepository.findOne = jest.fn();
    clientsRepository.delete = jest.fn();
    clientsRepository.getClientsPaged = jest.fn();
  });

  describe('Method: createClient', () => {
    const createClientData = {
      name: 'Emprexa Y',
    };

    it('Should successfully proccess createClient', async () => {
      await clientsService.createClient(createClientData);
      expect(clientsRepository.save).toBeCalledTimes(1);
      expect(clientsRepository.save).toBeCalledWith(createClientData);
    });

    it('Should return error when client name already exists status 409', async () => {
      const expectError = new ConflictException('Nome já está em uso.');
      clientsRepository.save = jest
        .fn()
        .mockRejectedValueOnce({ code: 'ER_DUP_ENTRY' });
      expect(clientsService.createClient(createClientData)).rejects.toThrow(
        expectError,
      );
    });

    it('Should return error when internal error', async () => {
      const expectError = new InternalServerErrorException(
        'Erro ao salvar o cliente.',
      );
      clientsRepository.save = jest
        .fn()
        .mockRejectedValueOnce({ code: 'anyError' });
      expect(clientsService.createClient(createClientData)).rejects.toThrow(
        expectError,
      );
    });
  });

  describe('Method: getClientById', () => {
    it('Should successfully proccess getClientById', async () => {
      clientsRepository.findOne = jest.fn().mockResolvedValue({ id: clientId });
      await clientsService.getClientById(clientId);
      expect(clientsRepository.findOne).toBeCalledTimes(1);
      expect(clientsRepository.findOne).toBeCalledWith(clientId);
    });

    it('Should return error when client not found', async () => {
      const expectError = new NotFoundException('Cliente não encontrado.');
      clientsRepository.findOne = jest.fn().mockResolvedValue(undefined);

      expect(clientsService.getClientById(clientId)).rejects.toThrow(
        expectError,
      );
    });
  });

  describe('Method: updateClient', () => {
    const updateClientBody = {
      name: 'Emprexa Y',
    };

    it('Should successfully proccess updateClient', async () => {
      clientsRepository.findOne = jest.fn().mockResolvedValue({ id: clientId });
      await clientsService.updateClient(updateClientBody, clientId);
      expect(clientsRepository.update).toBeCalledTimes(1);
      expect(clientsRepository.update).toBeCalledWith(
        { id: clientId },
        updateClientBody,
      );
    });

    it('Should return error when client name already exists', async () => {
      clientsRepository.findOne = jest.fn().mockResolvedValue({ id: clientId });

      const expectError = new ConflictException('Nome já está em uso.');
      clientsRepository.update = jest
        .fn()
        .mockRejectedValueOnce({ code: 'ER_DUP_ENTRY' });
      expect(
        clientsService.updateClient(updateClientBody, clientId),
      ).rejects.toThrow(expectError);
    });

    it('Should return error when internal error', async () => {
      clientsRepository.findOne = jest.fn().mockResolvedValue({ id: clientId });

      const expectError = new InternalServerErrorException(
        'Erro ao atualizar o cliente.',
      );
      clientsRepository.update = jest
        .fn()
        .mockRejectedValueOnce({ code: 'anyError' });

      expect(
        clientsService.updateClient(updateClientBody, clientId),
      ).rejects.toThrow(expectError);
    });
  });

  describe('Method: deleteClient', () => {
    it('Should successfully proccess deleteClient', async () => {
      clientsRepository.findOne = jest.fn().mockResolvedValue({ id: clientId });
      await clientsService.deleteClient(clientId);
      expect(clientsRepository.delete).toBeCalledTimes(1);
      expect(clientsRepository.delete).toBeCalledWith({ id: clientId });
    });
  });

  describe('Method: getClients', () => {
    const findClientQuery = {} as FindClientsQueryDto;
    it('Should successfully proccess getClients', async () => {
      await clientsService.getClients(findClientQuery);
      expect(clientsRepository.getClientsPaged).toBeCalledTimes(1);
      expect(clientsRepository.getClientsPaged).toBeCalledWith(findClientQuery);
    });
  });
});
