import { graphql, useStaticQuery } from 'gatsby';
import { debounce } from 'lodash';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import Select, { MultiValue } from 'react-select';
import Layout from '../components/Layout';
import Profile from '../components/Profile';
import SEO from '../components/SEO';
import IConsultantForm from '../models/consultant-form.model';
import IConsultant from '../models/consultant.model';
import ISelectOption from '../models/select-option.model';
import ISkill from '../models/skill.model';
import { filterConsultants } from '../services/filtering.services';

function Index() {
  const query = useStaticQuery(graphql`
    {
      allContentfulConsultant(filter: { active: { eq: true } }, sort: { name: ASC }) {
        nodes {
          id
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
            gatsbyImageData(height: 300, layout: CONSTRAINED)
          }
          skills {
            id
            name
          }
        }
      }
      allContentfulSkill(sort: { name: ASC }) {
        nodes {
          id
          name
        }
      }
    }
  `);

  const defaultForm = { name: '', skills: [] } as IConsultantForm;
  const [consultants, setConsultants] = useState([] as IConsultant[]);
  const [allConsultants, setAllConsultants] = useState([] as IConsultant[]);
  const [form, setForm] = useState(defaultForm);

  const consultantResults = query.allContentfulConsultant.nodes as IConsultant[];

  useEffect(() => {
    setConsultants(consultantResults);
    setAllConsultants(consultantResults);
  }, [consultantResults]);

  const skills = query.allContentfulSkill.nodes as ISkill[];

  const selectOptions = skills.reduce((acc: ISelectOption[], currentValue: ISkill) => {
    const isMatch = acc.findIndex((option) => option.value === currentValue.name) >= 0;
    if (!isMatch) {
      acc.push({ label: currentValue.name, value: currentValue.name });
    }
    return acc;
  }, []);

  function handleReset() {
    setForm(defaultForm);
    setConsultants(allConsultants);
  }

  function handleSubmit(changedForm: IConsultantForm) {
    const filteredResults = filterConsultants(allConsultants, changedForm);
    setConsultants(filteredResults);
  }

  const handleSelectChange = (selected: MultiValue<ISelectOption>) => {
    const selectedFormItems = { name: form.name, skills: selected } as IConsultantForm;
    setForm(selectedFormItems);
    handleSubmit(selectedFormItems);
  };

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const changedForm = { ...form, [event.target.id]: event.target.value } as IConsultantForm;
    setForm(changedForm);
    return changedForm;
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleDebounceSubmit = useCallback(
    debounce((changedForm: IConsultantForm) => handleSubmit(changedForm), 500),
    [consultants]
  );

  function handleDebounceChange(event: ChangeEvent<HTMLInputElement>) {
    const changedForm = handleChange(event);
    handleDebounceSubmit(changedForm);
  }

  return (
    <Layout>
      <div className="flex justify-center mb-8">
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Consultant's name..."
          className="input-text mr-4"
          value={form.name}
          onChange={handleDebounceChange}
        />

        <Select
          isMulti
          name="skills"
          options={selectOptions}
          className="basic-multi-select mr-4 w-[400px]"
          classNamePrefix="select"
          placeholder="Skills..."
          value={form.skills}
          onChange={handleSelectChange}
        />

        <button type="button" className="btn btn-blue" onClick={handleReset}>
          Reset
        </button>
      </div>

      <div className="flex flex-wrap gap-14 justify-around">
        {consultants.map((consultant) => (
          <div
            key={consultant.id}
            className="flex flex-col text-black w-full md:w-1/2 lg:w-[30%] max-w-[450px] p-4 rounded-lg shadow-md border-2 border-gray-100"
          >
            <div className="flex-1">
              <Profile consultant={consultant} isDirectoryPage />
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Index;

export function Head() {
  return <SEO />;
}
