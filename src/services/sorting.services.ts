import IConsultant from '../models/consultant.model';
import ISkill from '../models/skill.model';

function sortConsultantsByName(consultants: IConsultant[] | null, ascending = true) {
  if (!consultants) {
    return [] as IConsultant[];
  }

  return ascending
    ? consultants.sort((a, b) => a.name.localeCompare(b.name, undefined, { ignorePunctuation: true }))
    : consultants.sort((a, b) => b.name.localeCompare(a.name, undefined, { ignorePunctuation: true }));
}

function sortSkillsByName(skills: ISkill[] | null, ascending = true) {
  if (!skills) {
    return [] as ISkill[];
  }

  return ascending
    ? skills.sort((a, b) => a.name.localeCompare(b.name, undefined, { ignorePunctuation: true }))
    : skills.sort((a, b) => b.name.localeCompare(a.name, undefined, { ignorePunctuation: true }));
}

export { sortConsultantsByName, sortSkillsByName };
