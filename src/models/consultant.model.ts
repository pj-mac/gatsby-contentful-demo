import { IGatsbyImageData } from 'gatsby-plugin-image';
import ISkill from './skill.model';

export default interface IConsultant {
  id: string;
  name: string;
  title: string;
  slug: string;
  phone: string;
  email: string;
  city: string;
  stateProvince: string;
  country: string;
  website: string;
  image: {
    gatsbyImageData: IGatsbyImageData;
  };
  bio: {
    childMarkdownRemark: {
      html: string;
    };
  };
  skills: ISkill[];
  hourlyFee: string;
  availableStarting: string;
  availableEnding: string;
}
