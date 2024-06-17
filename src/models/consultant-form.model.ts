import { MultiValue } from 'react-select';
import ISelectOption from './select-option.model';

export default interface IConsultantForm {
  name: string;
  skills: MultiValue<ISelectOption>;
}
