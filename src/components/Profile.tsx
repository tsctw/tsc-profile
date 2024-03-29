import React, { useState } from 'react';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Tooltip } from 'react-tooltip';
import { RoundButton } from './RoundButton';
import { Button, Varient } from './Button';
import { useStaticQuery, graphql } from 'gatsby';
import { ProfileImage } from './ProfileImage';

const copyFunc = () => {
  const textToCopy = 'taosen.chang@gmail.com';

  const textarea = document.createElement('textarea') as HTMLTextAreaElement;
  textarea.value = textToCopy;
  document.body.appendChild(textarea);

  textarea.select();
  textarea.setSelectionRange(0, 99999); // For mobile devices

  if (typeof window !== 'undefined') {
    navigator.clipboard.writeText(textarea.value);
  }

  document.body.removeChild(textarea);
};

export const Profile = () => {
  const [copyIsClicked, setCopyIsClicked] = useState(false);

  const onClickEmailCopy = () => {
    setCopyIsClicked(true);
    setTimeout(() => {
      setCopyIsClicked(false);
    }, 1000);
    copyFunc();
  };

  const data = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `);

  return (
    <div className="flex flex-col h-full text-black dark:text-white bg-zinc-300 dark:bg-zinc-700">
      <div className="flex flex-col justify-center items-center m-3 mt-5 profile-margin">
        <ProfileImage />
        <div className="mt-5 font-bold text-xl">Tao-Sen Chang</div>
        {/* TODO: can have an animatin rotate showing title Software Engineer/Web Developer */}
        <div className="mt-2 text-md text-zinc-700 dark:text-stone-400">Software Engineer</div>
      </div>
      <div className="flex justify-center gap-4 text-xl">
        <RoundButton icon={faLinkedin} to="https://www.linkedin.com/in/tao-sen-chang/" />
        <RoundButton icon={faGithub} to="https://github.com/tsctw" />
        <div id="email">
          <RoundButton icon={faEnvelope} to="" onClick={onClickEmailCopy} />
        </div>
        <Tooltip anchorSelect="#email" className="email-tooltip">
          <div>taosen.chang@gmail.com</div>
          <div className="text-sm">{copyIsClicked ? 'Copied!' : 'Click icon to copy'}</div>
        </Tooltip>
      </div>
      <div className="flex flex-col justify-center items-center mt-8 pb-4">
        <Button varient={Varient.PRIMARY} size="medium">
          <a href={data.allFile.edges[0].node.publicURL} rel="noopener noreferrer" target="_blank">Download Resume</a>
        </Button>
      </div>
    </div>
  );
};