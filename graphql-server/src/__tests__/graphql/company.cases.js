module.exports = [
  {
    id: 'company',
    query: `
      query company($name: String!, $type: CompanyType!) {
        company(name: $name, type: $type) {
          name
          type
        }
      }
    `,
    variables: {
      name: 'Foo',
      type: 'distributor',
    },
    context: { },
    expected: {
      data: {
        company: {
          name: 'foo',
          type: 'distributor',
        },
      },
    },
  },
];
