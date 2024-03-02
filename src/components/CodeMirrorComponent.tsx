import React, { useContext, useEffect, useRef } from 'react';
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
  const fullText = 'const greeting = (name: string) => {\n  return `Hey ${name}, here is a Web Developer\'s profile`;\n}\n\nconsole.log(greeting(\'Guest\'));';
  const updateInterval = 20;
  const [initCode] = useAutoUpdateState('', fullText, updateInterval);
  const autoTypeDone = useRef(false);

  const { mode } = useContext(ThemeContext);

  useEffect(() => {
    setCode(initCode);
    if (initCode === fullText) {
      setShowRunButton(true);
      autoTypeDone.current = true;
    }
  }, [initCode]);

  return (
    <React.Suspense fallback={<></>}>
      <CodeMirror
        value={code}
        onChange={(val) => {
          if (autoTypeDone.current) setCode(val.getValue());
        }}
        height="200px"
        width="600px"
        options={{
          placeholder: 'Please enter the TypeScript code.',
          theme: mode === ModeTheme.LIGHT ? 'hopscotch' : 'solarized',
          tabSize: 2,
          mode: 'tsx',
          keyMap: 'sublime',
          lineNumbers: false,
        }} />
    </React.Suspense>
  );
};

export default CodeMirrorComponent;