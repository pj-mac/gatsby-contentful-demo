import { GatsbyNode } from 'gatsby';
import * as path from 'path';
import IConsultant from './src/models/consultant.model';

const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const profileTemplate = path.resolve('./src/templates/ProfilePageTemplate.tsx');

  const consultantResults: any = await graphql(`
    {
      allContentfulConsultant(filter: { active: { eq: true }, name: { ne: "PLACEHOLDER" } }) {
        nodes {
          id
          slug
        }
      }
    }
  `);

  if (consultantResults.errors) {
    reporter.panicOnBuild('There was an error loading your Contentful posts', consultantResults.errors);
    return;
  }

  const consultants = consultantResults.data.allContentfulConsultant.nodes as IConsultant[];

  if (consultants.length > 0) {
    consultants.forEach((consultant) => {
      createPage({
        path: `/consultants/${consultant.slug}/`,
        component: profileTemplate,
        context: {
          id: consultant.id,
          slug: consultant.slug,
        },
      });
    });
  }
};

export { createPages };
