import { StarIcon } from '@heroicons/react/16/solid';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import IConsultant from '../models/consultant.model';
import { sortSkillsByName } from '../services/sorting.services';

interface IProps {
  consultant: IConsultant;
  isDirectoryPage: boolean;
}

function Profile(props: IProps) {
  const { consultant, isDirectoryPage } = props;
  sortSkillsByName(consultant?.skills);
  return (
    <div key={consultant.id}>
      <div className="text-center">
        {consultant?.image?.gatsbyImageData &&
          (isDirectoryPage ? (
            <a href={`consultants/${consultant.slug}`}>
              <GatsbyImage alt={consultant.name ?? ''} image={consultant.image.gatsbyImageData} />
            </a>
          ) : (
            <GatsbyImage alt={consultant.name ?? ''} image={consultant.image.gatsbyImageData} />
          ))}
      </div>
      <h2 className="text-center">
        <a href={`consultants/${consultant.slug}`} className="no-underline">
          {consultant.name}
        </a>
      </h2>
      {consultant?.title && (
        <div className="mb-1 text-center">
          <a className="no-underline" href={`consultants/${consultant.slug}`}>
            {consultant.title}
          </a>
        </div>
      )}
      {consultant?.phone && <div className="mb-1">{consultant.phone}</div>}
      {consultant?.email && (
        <div className="mb-1">
          <a href={`mailto:${consultant.email}`}>{consultant.email}</a>
        </div>
      )}
      {(consultant?.city || consultant?.stateProvince || consultant?.country) && (
        <div className="mb-1">
          {consultant?.city && consultant.city}
          {consultant?.city && consultant?.stateProvince && <>, </>}
          {consultant?.stateProvince && consultant.stateProvince}
          {consultant?.country && (consultant?.city || consultant?.stateProvince) && (
            <>
              &nbsp;-&nbsp;
              {consultant.country}
            </>
          )}
        </div>
      )}
      {consultant?.website && (
        <div className="mb-1">
          <a href={consultant.website}>{consultant.website}</a>
        </div>
      )}
      {consultant?.skills && (
        <div className="flex flex-wrap gap-2 mb-1">
          {consultant?.skills.map((skill) => (
            <div key={skill.id} className="flex whitespace-nowrap">
              <StarIcon fill="black" className="mr-1 w-[15px]" />
              {skill.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Profile;
