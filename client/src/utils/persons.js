export const getPersonUrl = (person = {}) =>
  person.type && person.name ? `/person/${person.type.split(' ')[0]}/${person.name}` : '';
