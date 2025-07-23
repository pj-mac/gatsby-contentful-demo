import { HomeIcon } from '@heroicons/react/24/solid';
import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import Profile from '../components/Profile';
import SEO from '../components/SEO';
import IConsultant from '../models/consultant.model';

interface IQueryResults {
  consultant: IConsultant;
}

interface IProfilePageContext {
  id: string;
  slug: string;
}

interface IProps {
  pageContext: IProfilePageContext;
  data: IQueryResults;
}

function ProfilePageTemplate({ pageContext, data }: IProps) {
  const { consultant } = data as IQueryResults;

  return (
    <Layout>
      <div className="m-auto max-w-[800px]">
        <div className="my-2">
          <a href="/" className="flex gap-2 text-xl">
            <HomeIcon fill="black" className="w-[25px]" />
            HOME
          </a>
        </div>

        <Profile consultant={consultant} isDirectoryPage={false} />

        {consultant?.hourlyFee && (
          <div className="mb-2">
            Hourly fee:&nbsp;$
            {consultant.hourlyFee}
          </div>
        )}

        {(consultant?.availableStarting || consultant?.availableEnding) && (
          <div className="mb-2">
            Available:&nbsp;
            {consultant?.availableStarting && (
              <>
                {consultant.availableStarting}
                &nbsp;thru&nbsp;
              </>
            )}
            {consultant?.availableEnding && consultant.availableEnding}
          </div>
        )}

        {consultant?.bio?.childMarkdownRemark?.html && (
          <div
            className="mt-4"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: consultant.bio.childMarkdownRemark.html }}
          />
        )}

        {/* You can access the page context (passed from gatsby-node) as follows. */}
        <div className="hidden">{pageContext.slug}</div>
      </div>
    </Layout>
  );
}

export default ProfilePageTemplate;

export function Head({ data }: IProps) {
  const { consultant } = data as IQueryResults;

  return <SEO title={consultant.name} />;
}

export const query = graphql`
  query ($id: String) {
    consultant: contentfulConsultant(id: { eq: $id }) {
      name
      slug
      title
      phone
      email
      city
      stateProvince
      country
      website
      image {
        gatsbyImageData(height: 400, layout: CONSTRAINED)
      }
      bio {
        childMarkdownRemark {
          html
        }
      }
      skills {
        id
        name
      }
      hourlyFee
      availableStarting(formatString: "LL")
      availableEnding(formatString: "LL")
    }
  }
`;
