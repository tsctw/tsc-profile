import React, { useEffect, useMemo, useState } from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Seo } from '../components/seo';
import * as ts from 'typescript';
import { Button, Varient } from '../components/Button';
import Loadable from '@loadable/component';
import PuffLoader from 'react-spinners/PuffLoader';
import { Interpreter } from 'eval5';

class TSError extends Error {
  constructor(message: string) {
    super(message); // call the parent constructor
    this.name = 'TSError'; // set the name property
  }
}

const options: ts.CompilerOptions = {
  allowJs: false, // 不允许处理 JavaScript 文件
  noImplicitAny: true, // 禁止隐式的 any 类型
  checkJs: true, // 检查 JavaScript 文件
  module: ts.ModuleKind.CommonJS,
};

const IndexPage: React.FC<PageProps> = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState<string | null>(null);
  const [showRunButton, setShowRunButton] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

  // Prevent CodeMirrorComponent render twice when props changes
  const CodeMirrorComponent = useMemo(() => Loadable(() => import('../components/CodeMirrorComponent')), []);
  const interpreter = new Interpreter(window);

  const handleRunCode = () => {
    try {
      // 將 TypeScript 代碼轉換為 JavaScript 代碼
      const transpiledCode = ts.transpileModule(code, { compilerOptions: options }).outputText;
      const modifiedCode = `
      var output = '';
      var originalConsoleLog = console.log;
      console.log = function(message){
        output += '> ' + message + '\\n';
      };
      ${transpiledCode}
      console.log = originalConsoleLog;
      output
    `;

      const result = interpreter.evaluate(modifiedCode);

      console.log(result);
      setOutput(result);
    } catch (error) {
      if (error instanceof TSError) setOutput('> Error: ' + error.message);
    }
  };

  const renderLine = () => {
    if (!output) return;
    const outputLines = output.split(/\r?\n/);
    return <>
      {outputLines.map((line, index) => (
        <div className="text-left" key={index}>{line}</div>
      ))}
    </>;
  };

  useEffect(() => {
    CodeMirrorComponent.load().then(() => {
      setIsLoad(true);
    });
  }, []);

  return (
    <div className="h-full flex flex-row justify-center items-center">
      <div className="flex flex-col h-2/3 justify-center items-center basis-1/2">
        {isLoad ? <CodeMirrorComponent code={code} setCode={setCode} setShowRunButton={setShowRunButton} />
          : <PuffLoader />
        }
        <div className="h-full w-full text-center flex flex-col items-center basis-1/2 normal:mt-10">
          <Button varient={Varient.OUTLINE} className={`opacity-0 transition duration-500 ease-in-out ${showRunButton && 'opacity-100'}`}
            onClick={() => {
              setOutput(null);
              setTimeout(() => handleRunCode(), 500);
            }}>Run Code</Button>
          <div className="h-5"></div>
          <div className={`w-full overflow-scroll text-cyan-800 dark:text-cyan-100 opacity-0 transition duration-500 ease-in-out ${output && 'opacity-100'}`}
            style={{
              height: '100px',
              fontFamily: '\'JetBrains Mono\''
            }}>{renderLine()}</div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home"></Seo>;