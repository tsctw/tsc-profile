import React, { useMemo, useState } from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Seo } from '../components/seo';
// import { useAutoUpdateState } from '../utils/useAutoUpdateState';
import * as ts from 'typescript'; // 引入 TypeScript 編譯器
// import CodeMirror from '@uiw/react-codemirror';
import { Button, Varient } from '../components/Button';
// import { CodeMirrorComponent } from '../components/CodeMirrorComponent';
import Loadable from '@loadable/component';

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

  // Prevent CodeMirrorComponent render twice when props changes
  const CodeMirrorComponent = useMemo(() => Loadable(() => import('../components/CodeMirrorComponent')), []);

  const handleRunCode = () => {
    try {
      // 將 TypeScript 代碼轉換為 JavaScript 代碼
      const transpiledCode = ts.transpileModule(code, { compilerOptions: options }).outputText;
      const modifiedCode = `
      let output = ''; // 初始化 output 變量
      const originalConsoleLog = console.log; // 保存原始 console.log 函數

      // 重寫 console.log 函數以捕獲輸出並賦值給 output 變量
      console.log = (message) => {
        output += '> ' + message + '\\n'; // 將輸出添加到 output 變量
        originalConsoleLog(message); // 調用原始 console.log 函數
      };

      ${transpiledCode} // 執行原始 TypeScript 代碼

      // 返回 output 變量的值
      return output;
    `;
      // 創建一個新的 Function 實例
      const runnableCode = new Function(modifiedCode);
      // 在該函數實例上調用，並更新輸出
      const result = runnableCode();
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

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full -translate-y-16 m-b-0">
        <div className="bg-slate-200 h-7 flex items-center gap-2 pl-2 rounded-t-lg">
          <div className="rounded-full w-3 h-3" style={{ backgroundColor: '#FF5F55' }}></div>
          <div className="rounded-full w-3 h-3" style={{ backgroundColor: '#FFBE2D' }}></div>
          <div className="rounded-full w-3 h-3" style={{ backgroundColor: '#24C93F' }}></div>
        </div>
        <div>
          {<CodeMirrorComponent code={code} setCode={setCode} setShowRunButton={setShowRunButton} />}
        </div>
      </div>
      <div className="w-full text-center flex flex-col items-center justify-center -translate-y-2">
        <Button varient={Varient.OUTLINE} className={`opacity-0 transition duration-500 ease-in-out ${showRunButton && 'opacity-100'}`}
          onClick={() => {
            setOutput(null);
            setTimeout(() => handleRunCode(), 500);
          }}>Run Code</Button>
        <div className="h-5"></div>
        <div className={`overflow-scroll text-cyan-100 opacity-0 transition duration-500 ease-in-out ${output && 'opacity-100'}`}
          style={{
            width: '600px',
            height: '100px',
            fontFamily: '\'JetBrains Mono\''
          }}>{renderLine()}</div>
      </div>
    </div>);

};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home"></Seo>;