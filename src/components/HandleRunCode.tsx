import { Interpreter } from 'eval5';
import * as ts from 'typescript';

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

type HandleRunCodeProps = {
  setOutput: (output: string | null) => void;
  code: string;
}

export const HandleRunCode = (props: HandleRunCodeProps) => {
  let interpreter = null;
  if (typeof window !== 'undefined') {
    interpreter = new Interpreter(window);
  }
  const handleRunCode = () => {
    try {
      // 將 TypeScript 代碼轉換為 JavaScript 代碼
      const transpiledCode = ts.transpileModule(props.code, { compilerOptions: options }).outputText;
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


      const result = (interpreter as unknown as Interpreter).evaluate(modifiedCode);
      props.setOutput(result);

    } catch (error) {
      if (error instanceof TSError) props.setOutput('> Error: ' + error.message);
    }
  };
  return { handleRunCode };
};