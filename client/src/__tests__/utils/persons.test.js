import { getPersonUrl } from '../../utils/persons';

describe('utils > persons', () => {
  describe('getPersonUrl', () => {
    it('should return an empty string if no input is given', () => {
      expect(getPersonUrl()).toBe('');
    });
    it('should return string based on person type and name', () => {
      expect(getPersonUrl({ type: 'actor', name: 'James Bond' })).toBe('/person/actor/James Bond');
    });
    it('should only use first word of person type', () => {
      expect(getPersonUrl({ type: 'actor & director', name: 'James Bond' })).toBe('/person/actor/James Bond');
    });
  });
});
