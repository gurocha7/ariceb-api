import { getPaginationValues } from './getPaginationValues';

describe('Function: getPaginationValues', () => {
  it('should return the correct pagination values with next page', () => {
    const paginationValues = getPaginationValues(10, 1, 100);
    expect(paginationValues).toStrictEqual({
      total: 100,
      limit: 10,
      page: 1,
      totalPages: 10,
      hasPrevPage: false,
      hasNextPage: true,
      prevPage: undefined,
      nextPage: 2,
    });
  });

  it('should return the correct pagination values with prev page', () => {
    const paginationValues = getPaginationValues(10, 10, 100);
    expect(paginationValues).toStrictEqual({
      total: 100,
      limit: 10,
      page: 10,
      totalPages: 10,
      hasPrevPage: true,
      hasNextPage: false,
      prevPage: 9,
      nextPage: undefined,
    });
  });
});
