module.exports = [
  {
    id: 'genre',
    query: `
      query genre($id: Int!) {
        genre(id: $id) {
          name
          id
          movies {
            title
          }
        }
      }
    `,
    variables: {
      id: 1,
    },
    context: { },
    expected: {
      data: {
        genre: {
          name: 'foo',
          id: 1,
          movies: [
            { title: 'foo' },
            { title: 'foo' },
          ],
        },
      },
    },
  },
  {
    id: 'genres',
    query: `
      query genres {
        genres {
          name
          id
        }
      }
    `,
    variables: { },
    context: { },
    expected: {
      data: {
        genres: [
          {
            name: 'foo',
            id: 1,
          },
          {
            name: 'foo',
            id: 1,
          },
        ],
      },
    },
  },
];
