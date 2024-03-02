import React from 'react';
import type { HeadFC } from 'gatsby';
import { Seo } from '../components/seo';
import { TimeLine } from '../components/TimeLine';
import { faGraduationCap, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const highlightColor = 'text-orange-500';

const itemsWork = [
  {
    title: 'Software Engineer',
    time: 'Apr 2022 - Present',
    company: 'Bayer • Warsaw, Poland',
    contents: 'Contributed to large-scale web app dev,\
      both front-end & back-end using React & Node.js,\
      facilitating seamless collaboration among 5 teams.\
      Designed 20+ reusable components, incl. React tables &\
      GraphQL APIs. Reduced deployment time by 20% using GitHub\
      Actions on AWS. Collaborated closely with Agile Scrum teams,\
      ensuring adaptability & continuous improvement.',
    label: 'Present',
    badges: ['TypeScript', 'Node.js', 'React', 'CSS', 'AWS', 'MongoDB', 'GraphQL', 'Git', 'Agile', 'English'],
    icon: faLaptopCode
  },
  {
    title: 'Front-end Software Engineer',
    time: 'Jul 2021 - Aug 2021',
    company: 'Delta Electronics • Taipei, Taiwan',
    contents: 'Developed 80% of Data Replication Admin Console with Vue.js for \
      CRM system database backup in Azure. Refactored 10% of the legacy project into React / Next framework. \
      Implemented proxy to avoid CORS issues.\
      Styled components with Material UI and Vuetify. Collaborated with PM and \
      Back-end for architecture and scalability.',
    badges: ['JavaScript', 'React', 'Next.js', 'Vue.js', 'Git'],
    icon: faLaptopCode
  },
  {
    title: 'Front-end Software Engineer',
    time: 'May 2020 - Sep 2020',
    company: 'Ivy-Way Academy • Taipei, Taiwan',
    contents: 'Designed web pages using Vue.js, HTML, and CSS. \
      Refactored 30% of code for better reusability. \
      Tested over 40 APIs with Back-end developers. \
      Enhanced performance by 10% using Vuex.Implemented ESLint \
      and Prettier for code quality.',
    badges: ['JavaScript', 'CSS', 'HTML', 'Vue.js', 'Git'],
    icon: faLaptopCode
  }
];

const itemsEducation = [
  {
    title: 'Bachelor of Engineering, Computer Science',
    time: 'Sep 2018 - Feb 2022',
    company: 'Adam Mickiewicz University • Poznan, Poland',
    contents: 'Created a submarine simulator with C++/OpenGL, and had experiences with computer \
      graphics, rendering graphics on GPU, and physics library. Visualizing the Schelling Model and \
      reproducing the result dynamically in Python. \
      Responsible for software architecture in the software engineering team project (Android App in \
      Java).',
    badges: ['C++', 'Java', 'C#', 'Python', 'Android', 'Angular', 'English'],
    icon: faGraduationCap
  },
  {
    title: 'Bachelor of Arts, Japanese Language and Literature',
    time: 'Sep 2011 - Jun 2015',
    company: 'National Taiwan University • Taipei, Taiwan',
    contents: 'GPA 3.81/4.3',
    badges: ['Japanese'],
    icon: faGraduationCap
  }
];

const Resume = () => {
  return (
    <div className="h-full">
      <div className="text-2xl text-black dark:text-white font-bold pt-10 pl-10">Resume</div>
      <div className="flex">
        <div className="w-1/2">
          <div>
            <div className="text-xl text-black dark:text-white pt-10 pl-10">Work
              <span className={`ml-2 ${highlightColor}`}>Experience</span>
            </div>
            <TimeLine items={itemsWork} />
          </div>
        </div>
        <div className="w-1/2">
          <div>
            <div className="text-xl text-black dark:text-white pt-10 pl-10">
              Education
            </div>
            <TimeLine items={itemsEducation} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

export const Head: HeadFC = () => <Seo title="Resume"></Seo>;