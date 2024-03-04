import React, { useContext, useEffect, useRef, useState } from 'react';
import { useAutoUpdateState } from '../utils/useAutoUpdateState';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/solarized.css';
import 'codemirror/theme/hopscotch.css';
import 'codemirror/keymap/sublime';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/mode/javascript/javascript';
import { ModeTheme, ThemeContext } from '../hooks/hooks';

type CodeMirrorComponentProps = {
  code: string;
  setCode: (s: string) => void;
  setShowRunButton: (show: boolean) => void;
}

const CodeMirrorComponent = ({ code, setCode, setShowRunButton }: CodeMirrorComponentProps) => {
  const fullText = 'const greeting = (name: string) => {\n  return `Hey ${name}, welcome! Here is a Software Engineer\'s profile.`;\n}\n\nconsole.log(greeting(\'Guest\'));';
  const updateInterval = 20;
  const [initCode] = useAutoUpdateState('', fullText, updateInterval);
  const autoTypeDone = useRef(false);
  const [isReady, setIsReady] = useState(false);

  const { mode } = useContext(ThemeContext);

  const checkInnerwidth = () => {
    const width = window.innerWidth;
    if (width >= 1024) return 620;
    if (width >= 800 && width < 1024) return 520;
    if (width >= 500 && width < 800) return 420;
    return 320;
  };

  const [codeMirrorWidth, setCodeMirrorWidth] = useState(checkInnerwidth());

  useEffect(() => {
    setTimeout(() => { setIsReady(true); }, 100);
    const handleResize = () => {
      setCodeMirrorWidth(checkInnerwidth());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCode(initCode);
    if (initCode === fullText) {
      setShowRunButton(true);
      autoTypeDone.current = true;
    }
  }, [initCode]);

  const renderElement = () => {
    return <div className={`w-full m-b-0 flex flex-col h-full justify-center items-center transition duration-300 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
      <div className="bg-zinc-700 dark:bg-slate-200 h-7 flex items-center gap-2 pl-2 rounded-t-lg"
        style={{ width: `${codeMirrorWidth}px` }}>
        <div className="rounded-full w-3 h-3" style={{ backgroundColor: '#FF5F55' }}></div>
        <div className="rounded-full w-3 h-3" style={{ backgroundColor: '#FFBE2D' }}></div>
        <div className="rounded-full w-3 h-3" style={{ backgroundColor: '#24C93F' }}></div>
      </div>
      <div>
        <CodeMirror
          value={code}
          onChange={(val) => {
            if (autoTypeDone.current) setCode(val.getValue());
          }}
          height="200px"
          width={`${codeMirrorWidth}px`}
          options={{
            placeholder: 'Please enter the TypeScript code.',
            theme: mode === ModeTheme.LIGHT ? 'hopscotch' : 'solarized',
            tabSize: 2,
            mode: 'tsx',
            keyMap: 'sublime',
            lineNumbers: false,
          }} />
      </div>
    </div>;
  };

  return (
    <React.Suspense fallback={<>{renderElement()}</>}>
      {renderElement()}
    </React.Suspense>
  );
};

export default CodeMirrorComponent;