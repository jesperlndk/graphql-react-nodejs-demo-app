const { graphql } = require('graphql');
const {
  makeExecutableSchema,
  addMockFunctionsToSchema,
  mockServer,
} = require('graphql-tools');
const glue = require('schemaglue');

const { schema } = glue('src/graphql');

describe('Schema', () => {
  // Test cases
  const cases = [
    ...require('./company.cases'),
    ...require('./statistics.cases'),
    ...require('./genre.cases'),
  ];

  // Mock the schema
  const mockSchema = makeExecutableSchema({ typeDefs: schema });

  // Here we specify the return payloads of mocked types
  addMockFunctionsToSchema({
    schema: mockSchema,
    mocks: {
      Boolean: () => true,
      Int: () => 1,
      Float: () => 1.23,
      String: () => 'foo',
      CompanyType: () => 'distributor',
    },
  });

  test('has valid type definitions', async () => {
    expect(async () => {
      const MockServer = mockServer(schema);
      await MockServer.query('{ __schema { types { name } } }');
    }).not.toThrow();
  });

  cases.forEach((obj) => {
    const { id, query, variables, context: ctx, expected } = obj;

    test(`query: ${id}`, async () => expect(
      graphql(mockSchema, query, null, { ctx }, variables),
    ).resolves.toEqual(expected));
  });
});
