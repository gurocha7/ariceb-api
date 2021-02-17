import { SortEnum } from 'src/shared/enums/sort.enum';
import { ClientRepository } from './clients.repository';
import { FindClientsQueryDto } from './dtos/findClientsQuery.dto';

describe('ClientsRepository', () => {
  const clientsRepository = new ClientRepository();

  const mockWhereSpy = jest.fn().mockReturnThis();
  const mockSkipSpy = jest.fn().mockReturnThis();
  const mockTakeSpy = jest.fn().mockReturnThis();
  const mockOrderBySpy = jest.fn().mockReturnThis();
  let mockgetManyAndCountSpy = jest.fn().mockReturnThis();

  beforeEach(() => {
    jest.clearAllMocks();
    clientsRepository.createQueryBuilder = jest.fn().mockImplementation(() => {
      return {
        where: mockWhereSpy,
        skip: mockSkipSpy,
        take: mockTakeSpy,
        orderBy: mockOrderBySpy,
        getManyAndCount: mockgetManyAndCountSpy,
      };
    });
  });

  describe('Method: getClientsPaged', () => {
    const query: FindClientsQueryDto = {
      limit: 10,
      page: 1,
      sort: SortEnum.ASC,
      name: 'Emprexa Y',
    };

    it('Should successfully proccess getClientsPaged', async () => {
      mockgetManyAndCountSpy = jest.fn().mockResolvedValue([[], 10]);
      await clientsRepository.getClientsPaged(query);

      expect(mockWhereSpy).toBeCalledTimes(1);
      expect(mockWhereSpy).toBeCalledWith('client.name LIKE :name', {
        name: `%${query.name}%`,
      });

      expect(mockSkipSpy).toBeCalledTimes(1);
      expect(mockSkipSpy).toBeCalledWith(0);

      expect(mockTakeSpy).toBeCalledTimes(1);
      expect(mockTakeSpy).toBeCalledWith(10);

      expect(mockOrderBySpy).toBeCalledTimes(1);
      expect(mockOrderBySpy).toBeCalledWith('client.createdAt', 'ASC');

      expect(mockgetManyAndCountSpy).toBeCalledTimes(1);
    });

    it('Should successfully proccess getClientsPaged with negative values in fields page and limit', async () => {
      mockgetManyAndCountSpy = jest.fn().mockResolvedValue([[], 10]);

      query.limit = -10;
      query.page = -1;

      await clientsRepository.getClientsPaged(query);

      expect(mockWhereSpy).toBeCalledTimes(1);
      expect(mockWhereSpy).toBeCalledWith('client.name LIKE :name', {
        name: `%${query.name}%`,
      });

      expect(mockSkipSpy).toBeCalledTimes(1);
      expect(mockSkipSpy).toBeCalledWith(0);

      expect(mockTakeSpy).toBeCalledTimes(1);
      expect(mockTakeSpy).toBeCalledWith(10);

      expect(mockOrderBySpy).toBeCalledTimes(1);
      expect(mockOrderBySpy).toBeCalledWith('client.createdAt', 'ASC');

      expect(mockgetManyAndCountSpy).toBeCalledTimes(1);
    });

    it('Should successfully proccess getClientsPaged with undefined values', async () => {
      mockgetManyAndCountSpy = jest.fn().mockResolvedValue([[], 10]);

      query.limit = undefined;
      query.page = undefined;
      query.name = undefined;

      await clientsRepository.getClientsPaged(query);

      expect(mockSkipSpy).toBeCalledTimes(1);
      expect(mockSkipSpy).toBeCalledWith(0);

      expect(mockTakeSpy).toBeCalledTimes(1);
      expect(mockTakeSpy).toBeCalledWith(10);

      expect(mockOrderBySpy).toBeCalledTimes(1);
      expect(mockOrderBySpy).toBeCalledWith('client.createdAt', 'ASC');

      expect(mockgetManyAndCountSpy).toBeCalledTimes(1);
    });
  });
});
