import IConsultantForm from '../models/consultant-form.model';
import IConsultant from '../models/consultant.model';
import { sortConsultantsByName } from './sorting.services';

function filterConsultants(consultants: IConsultant[], params: IConsultantForm) {
  const arr = [] as IConsultant[];

  // Filter skills
  if (params?.skills?.length > 0) {
    consultants.forEach((consultant) => {
      consultant?.skills?.forEach((skill) => {
        params.skills.forEach((paramSkill) => {
          if (skill.name.toLowerCase() === paramSkill.value.toLowerCase()) {
            const notAdded = arr.findIndex((arrItem) => arrItem.id === consultant.id) >= 0;
            if (!notAdded) {
              if (params.name) {
                const isNameMatch = consultant.name.toLowerCase().includes(params.name.toLowerCase());
                if (isNameMatch) {
                  arr.push(consultant);
                }
              } else {
                arr.push(consultant);
              }
            }
          }
        });
      });
    });
  }

  // Filter names
  if (arr.length === 0 && params?.skills?.length === 0) {
    const filteredNameStartsWith = consultants.filter((consultant) =>
      consultant.name.toLowerCase().startsWith(params.name.toLowerCase())
    );

    const filteredNameIncludes = consultants.filter((consultant) =>
      consultant.name.toLowerCase().includes(params.name.toLowerCase())
    );

    sortConsultantsByName(filteredNameStartsWith);
    sortConsultantsByName(filteredNameIncludes);

    const allFiltered = filteredNameStartsWith.concat(filteredNameIncludes);

    const noDuplicates = allFiltered.reduce((acc: IConsultant[], currentValue: IConsultant) => {
      const isMatch = acc.findIndex((consultant) => consultant.id === currentValue.id) >= 0;
      if (!isMatch) {
        acc.push(currentValue);
      }
      return acc;
    }, []);

    return noDuplicates;
  }

  return arr;
}

export { filterConsultants };
