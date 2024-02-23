import React, { useEffect, useRef, useState } from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Seo } from '../components/seo';
import { Button } from '../components/Button';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { useAutoUpdateState } from '../utils/useAutoUpdateState';
import * as ts from 'typescript'; // 引入 TypeScript 編譯器

const checkSyntax = (code: string): string[] => {
  const diagnostics: string[] = [];
  
  // 將 TypeScript 代碼轉換為 AST
  const sourceFile = ts.createSourceFile('temp.ts', code, ts.ScriptTarget.ESNext);

  // 檢查是否有語法錯誤
  const syntacticErrors = ts.getPreEmitDiagnostics(sourceFile);

  // 將語法錯誤添加到診斷信息中
  for (const error of syntacticErrors) {
    diagnostics.push(ts.flattenDiagnosticMessageText(error.messageText, '\n'));
  }

  return diagnostics;
};

const options: ts.CompilerOptions = {
  allowJs: false, // 不允许处理 JavaScript 文件
  noImplicitAny: true, // 禁止隐式的 any 类型
  checkJs: true, // 检查 JavaScript 文件
  module: ts.ModuleKind.CommonJS,
};

const IndexPage: React.FC<PageProps> = () => {
  const fullText = 'const greeting = (name: string) => {\n  return `Hey ${name}, here is a Front-end developer\'s profile`;\n}\n\nconsole.log(greeting(\'Guest\'));';
  const updateInterval = 50;
  const [code, setCode] = useAutoUpdateState('', fullText, updateInterval);
  const [output, setOutput] = useState<string | null>(null);
  const [showRunButton, setShowRunButton] = useState(false);
  const showMessage = useRef();

  useEffect(() => {
    if (code === fullText) setShowRunButton(true);
  }, [code]);

  const handleRunCode = () => {
    try {
      // 將 TypeScript 代碼轉換為 JavaScript 代碼
      const transpiledCode = ts.transpileModule(code, {compilerOptions: options}).outputText;
      const modifiedCode = `
      let output = ''; // 初始化 output 變量
      const originalConsoleLog = console.log; // 保存原始 console.log 函數

      // 重寫 console.log 函數以捕獲輸出並賦值給 output 變量
      console.log = (message) => {
        output += message + '\\n'; // 將輸出添加到 output 變量
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
    } catch (error: any) {
      setOutput('Error: ' + error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full -translate-y-16">
        <div className="bg-slate-200 h-7 flex items-center gap-2 pl-2 rounded-t-lg">
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
            data-color-mode="light"
            style={{ fontSize: 20, fontFamily: '\'JetBrains Mono\'', height: '250px', width: '600px'}}
            className="rounded-b-lg"
          />
        </div>
      </div>
      <button className={`text-white opacity-0 transition duration-500 ease-in-out ${showRunButton && 'opacity-100'}`} onClick={handleRunCode}>Run Code</button>
      <div>
        <div className="h-5"></div>
        <pre className={`text-cyan-100 transition duration-500 ease-in-out ${1}`}>{output}</pre>
      </div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home"></Seo>;