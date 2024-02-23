import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Tooltip } from 'react-tooltip';
import { RoundButton } from './roundButton';

const copyFunc = () => {
  const textToCopy = 'taosen.chang@gmail.com';

  const textarea = document.createElement('textarea') as HTMLTextAreaElement;
  textarea.value = textToCopy;
  document.body.appendChild(textarea);

  textarea.select();
  textarea.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(textarea.value);

  document.body.removeChild(textarea);
};

export const Profile = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center m-3 mt-5 profile-image">
        <div className="border-2 rounded-full border-black border-solid relative">
          <StaticImage className="rounded-full" src="../images/frenchie01.jpeg" alt="profile img" width={150} height={150}></StaticImage>
        </div>
        <div className="mt-5 font-bold text-xl">Tao-Sen Chang</div>
      </div>
      <div className="flex justify-center gap-4 text-xl">
        <RoundButton icon={faLinkedin} to="https://www.linkedin.com/in/tao-sen-chang/" />
        <RoundButton icon={faGithub} to="https://github.com/tsctw" />
        <a id="email" onClick={copyFunc}>
          <RoundButton icon={faEnvelope} to="" />
        </a>
        <Tooltip anchorSelect="#email" clickable>
          <button>taosen.chang@gmail.com</button>
          {/* <button >Copy</button> */}
        </Tooltip>
      </div>
    </div>
  );
};