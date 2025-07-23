import IConsultant from '../src/models/consultant.model';
import ISkill from '../src/models/skill.model';
import { sortConsultantsByName, sortSkillsByName } from '../src/services/sorting.services';

describe('sorting.services', () => {
  const fakeConsultants = [{ name: 'John' }, { name: 'Alice' }, { name: 'Betty' }] as IConsultant[];

  const fakeSkills = [{ name: 'JavaScript' }, { name: '.NET' }, { name: 'Angular' }] as ISkill[];

  it('sortConsultantsByName ascending should sort ascending', () => {
    const expected = [{ name: 'Alice' }, { name: 'Betty' }, { name: 'John' }] as IConsultant[];

    const result = sortConsultantsByName(fakeConsultants);

    expect(result).toEqual(expected);
  });

  it('sortConsultantsByName decending should sort decending', () => {
    const expected = [{ name: 'John' }, { name: 'Betty' }, { name: 'Alice' }] as IConsultant[];

    const result = sortConsultantsByName(fakeConsultants, false);

    expect(result).toEqual(expected);
  });

  it('sortConsultantsByName null should return empty array', () => {
    const result = sortConsultantsByName(null);

    expect(result).toEqual([]);
  });

  it('sortSkillsByName ascending should sort ascending', () => {
    const expected = [{ name: 'Angular' }, { name: 'JavaScript' }, { name: '.NET' }] as ISkill[];

    const result = sortSkillsByName(fakeSkills);

    expect(result).toEqual(expected);
  });

  it('sortSkillsByName decending should sort decending', () => {
    const expected = [{ name: '.NET' }, { name: 'JavaScript' }, { name: 'Angular' }] as ISkill[];

    const result = sortSkillsByName(fakeSkills, false);

    expect(result).toEqual(expected);
  });

  it('sortSkillsByName null should return empty array', () => {
    const result = sortSkillsByName(null);

    expect(result).toEqual([]);
  });
});
