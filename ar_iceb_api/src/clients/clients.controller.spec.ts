import { SortEnum } from '../../shared/enums/sort.enum';
import { FindClientsQueryDto } from '../dtos/findClientsQuery.dto';
import { ClientsService } from '../services/clients.service';
import { ClientsController } from './clients.controller';

describe('ClientsController', () => {
  const clientsService = {} as jest.Mocked<ClientsService>;
  const clientsController = new ClientsController(clientsService);

  const clientId = 'ea1cdbe1-cfd7-4fbe-9347-a4e2b80a7bf8';

  beforeEach(() => {
    clientsService.createClient = jest.fn();
    clientsService.getClientById = jest.fn();
    clientsService.updateClient = jest.fn();
    clientsService.deleteClient = jest.fn();
    clientsService.getClients = jest.fn();
  });

  describe('Method: createClient', () => {
    const mockCreateClientBody = {
      name: 'Empresa X',
    };

    it('Should successfully proccess createClient', async () => {
      await clientsController.createClient(mockCreateClientBody);
      expect(clientsService.createClient).toBeCalledTimes(1);
      expect(clientsService.createClient).toBeCalledWith(mockCreateClientBody);
    });
  });

  describe('Method: getClientById', () => {
    it('Should successfully proccess getClientById', async () => {
      await clientsController.getClientById(clientId);
      expect(clientsService.getClientById).toBeCalledTimes(1);
      expect(clientsService.getClientById).toBeCalledWith(clientId);
    });
  });
  describe('Method: updateClient', () => {
    const mockUpdateClientBody = {
      name: 'Empresa X',
    };
    it('Should successfully proccess updateClient', async () => {
      await clientsController.updateClient(mockUpdateClientBody, clientId);
      expect(clientsService.updateClient).toBeCalledTimes(1);
      expect(clientsService.updateClient).toBeCalledWith(
        mockUpdateClientBody,
        clientId,
      );
    });
  });

  describe('Method: deleteClient', () => {
    it('Should successfully proccess deleteClient', async () => {
      await clientsController.deleteClient(clientId);
      expect(clientsService.deleteClient).toBeCalledTimes(1);
      expect(clientsService.deleteClient).toBeCalledWith(clientId);
    });
  });

  describe('Method: getClients', () => {
    const mockQueryParams: FindClientsQueryDto = {
      limit: 10,
      page: 1,
      name: 'test',
      sort: SortEnum.ASC,
    };
    it('Should successfully proccess getClients', async () => {
      await clientsController.getClients(mockQueryParams);
      expect(clientsService.getClients).toBeCalledTimes(1);
      expect(clientsService.getClients).toBeCalledWith(mockQueryParams);
    });
  });
});
