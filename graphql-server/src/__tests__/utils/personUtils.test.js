const {
  getTypes,
  getAllTypes,
  getKeyOfPersonType,
  isIgnored,
} = require('../../utils/personUtils');

describe('personUtils', () => {
  describe('getTypes', () => {
    it('should return an empty array by default', () => {
      expect(getTypes()).toEqual([]);
    });
    it('should return an array of string with types', () => {
      expect(getTypes('actor')).toEqual(['actor_1', 'actor_2', 'actor_3']);
    });
  });

  describe('getAllTypes', () => {
    it('should return all person types in one flat array', () => {
      const result = getAllTypes();
      expect(Array.isArray(result)).toBeTruthy();
      expect(result.length).toBeGreaterThan(0);
    });
  });

  describe('getKeyOfPersonType', () => {
    it('should return undefined if type does not exist', () => {
      expect(getKeyOfPersonType('someKey')).toBeUndefined();
    });
    it('should return the key if the type is found', () => {
      expect(getKeyOfPersonType('actor_1')).toBe('actor');
    });
  });

  describe('isIgnored', () => {
    it('should return boolean whether the name is ignored or not', () => {
      expect(isIgnored('notIgnoredName')).toBeFalsy();
      expect(isIgnored('N/A')).toBeTruthy();
    });
  });
});
