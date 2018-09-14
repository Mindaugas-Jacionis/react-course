import React from 'react';
import Section from './Section';
import SectionWithLists from './SectionWithLists';
import data from './data';
import './index.css';

function Main() {
  const { education, skills, experience, hobies, reference } = data;
  return (
    <main className="Content">
      <Section
        title={education.title}
        descriptionTitle={education.descriptionTitle}
        info={education.info}
      />
      <Section
        title={skills.title}
        descriptionTitle={skills.descriptionTitle}
        info={skills.info}
      />
      <SectionWithLists
        title={experience.title}
        dataList={experience.dataList}
      />
      <Section title={hobies.title} info={hobies.info} />
      <Section title={reference.title} info={reference.info} />
    </main>
  );
}

export default Main;
