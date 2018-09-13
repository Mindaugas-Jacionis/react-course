import React from 'react';
import Section from './Section';
import SectionWithLists from './SectionWithLists';
import './index.css';

function Main() {
  return (
    <main className="Content">
      <Section
        title="Education"
        descriptionTitle="CodeAcademy, Vilnius, Lithuania"
        info={[
          { title: 'Major', text: 'JavaScript' },
          { title: 'Minor', text: 'vue.js' },
          'I like it here! <3',
        ]}
      />
      <Section
        title="Skills"
        descriptionTitle="Technical Skills"
        info="JavaScript(ES6+), React.js, Node.js, Vue.js, HTML, CSS/SASS/Less, Express.js, Webpack, Redux.js"
      />
      <SectionWithLists
        title="Experience"
        dataList={[
          {
            title: 'Tesonet',
            subtitle: 'Sr.Frontend Engineer, 2017.08 - present',
            list: [
              'Code - do some coding with JavaScrip',
              'Eat - whatever I found in the kitchen',
              'Sleep - at my desk',
              'Repeat - again and agian and...',
            ],
          },
          {
            title: 'PlateCulture',
            subtitle: 'Lead Mobile Engineer, 2016.11 - 2017.08',
            list: [
              'Code - do some coding with JavaScrip',
              'Eat - whatever I found in the kitchen',
              'Sleep - at my desk',
              'Repeat - again and agian and...',
            ],
          },
        ]}
      />
      <Section
        title="Hobies"
        info="Coding, Walking, Drawing, Making Eye Contact, LOLing, Beard Grooming, Making my own Beard Oil"
      />
      <Section
        title="Reference"
        info="Chilly eating championship 2019, My Mom, Dad & Dog"
      />
    </main>
  );
}

export default Main;
