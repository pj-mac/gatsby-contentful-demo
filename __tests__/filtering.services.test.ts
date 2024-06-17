import IConsultantForm from '../src/models/consultant-form.model';
import IConsultant from '../src/models/consultant.model';
import { filterConsultants } from '../src/services/filtering.services';

describe('filtering.services', () => {
  const fakeConsultants = [
    {
      id: '1',
      name: 'John Doe Smith',
      skills: [{ name: 'CSS' }, { name: 'HTML' }, { name: 'JavaScript' }],
    },
    {
      id: '2',
      name: 'Jane Doe Smith',
      skills: [{ name: 'HTML' }, { name: 'React' }],
    },
    {
      id: '3',
      name: 'Jack Brown',
      skills: [{ name: 'Python' }],
    },
  ] as IConsultant[];

  it('filterConsultants no name match', () => {
    const fakeFormParams = { name: 'Foobar', skills: [] } as IConsultantForm;

    const expected = [] as IConsultant[];

    const result = filterConsultants(fakeConsultants, fakeFormParams);

    expect(result).toEqual(expected);
  });

  it('filterConsultants first name match', () => {
    const fakeFormParams = { name: 'John', skills: [] } as IConsultantForm;

    const expected = [
      {
        id: '1',
        name: 'John Doe Smith',
        skills: [{ name: 'CSS' }, { name: 'HTML' }, { name: 'JavaScript' }],
      },
    ] as IConsultant[];

    const result = filterConsultants(fakeConsultants, fakeFormParams);

    expect(result).toEqual(expected);
  });

  it('filterConsultants last name match', () => {
    const fakeFormParams = { name: 'Smith', skills: [] } as IConsultantForm;

    const expected = [
      {
        id: '2',
        name: 'Jane Doe Smith',
        skills: [{ name: 'HTML' }, { name: 'React' }],
      },
      {
        id: '1',
        name: 'John Doe Smith',
        skills: [{ name: 'CSS' }, { name: 'HTML' }, { name: 'JavaScript' }],
      },
    ] as IConsultant[];

    const result = filterConsultants(fakeConsultants, fakeFormParams);

    expect(result).toEqual(expected);
  });
});
