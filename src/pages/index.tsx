import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Seo } from '../components/seo';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { useAutoUpdateState } from '../utils/useAutoUpdateState';

const IndexPage: React.FC<PageProps> = () => {
  const fullText = 'const greeting = (name: string) => {\n  return `Hey ${name}, here is a Front-end developer\'s profile`;\n}\n\ngreeting(\'Guest\');';
  const updateInterval = 50;
  const [code, setCode] = useAutoUpdateState('', fullText, updateInterval);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/2">
        <div className="bg-black h-7 flex items-center gap-2 pl-2 rounded-t-lg">
          <div className="rounded-full w-3 h-3" style={{ backgroundColor: '#FF5F55'}}></div>
          <div className="rounded-full w-3 h-3" style={{ backgroundColor: '#FFBE2D'}}></div>
          <div className="rounded-full w-3 h-3" style={{ backgroundColor: '#24C93F'}}></div>
        </div>
        <div className="rounded-b-lg">
          <CodeEditor
            value={code}
            language="ts"
            placeholder="Please enter TS code."
            onChange={(evn) => setCode(evn.target.value)}
            padding={15}
            data-color-mode="dark"
            style={{ fontSize: 20, fontFamily: '\'JetBrains Mono\''}}
            className="rounded-b-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home"></Seo>;
