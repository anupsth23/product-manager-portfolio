import React from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles/theme';

interface CodeBlockProps {
  code: string;
  language?: 'javascript' | 'typescript' | 'jsx' | 'python';
  title?: string;
  autoType?: boolean;
  typingSpeed?: number;
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const glowEffect = keyframes`
  0% { box-shadow: 0 0 10px rgba(74, 157, 255, 0.1), 0 0 20px rgba(0, 0, 0, 0.2); }
  50% { box-shadow: 0 0 15px rgba(74, 157, 255, 0.2), 0 0 30px rgba(0, 0, 0, 0.3); }
  100% { box-shadow: 0 0 10px rgba(74, 157, 255, 0.1), 0 0 20px rgba(0, 0, 0, 0.2); }
`;

// Code editor-like container
const CodeContainer = styled.div`
  background-color: #151820;
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4), 0 0 15px rgba(74, 157, 255, 0.1);
  margin: ${theme.spacing.lg} 0;
  font-family: 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  border: 1px solid rgba(74, 157, 255, 0.2);
  animation: ${fadeIn} 0.6s ease-out forwards, ${glowEffect} 5s infinite ease-in-out;
  transform-origin: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px) scale(1.01);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(74, 157, 255, 0.2);
    border-color: rgba(74, 157, 255, 0.4);
  }
`;

const CodeHeader = styled.div`
  background: linear-gradient(to right, #1e2130, #2c3347);
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(74, 157, 255, 0.2);
`;

const CodeTitle = styled.div`
  color: #e0e0e0;
  font-size: ${theme.typography.sizes.caption};
  display: flex;
  align-items: center;
  font-weight: 500;
  letter-spacing: 0.5px;
  
  &::before {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: linear-gradient(135deg, #4A9DFF, #0065D0);
    margin-right: ${theme.spacing.sm};
    box-shadow: 0 0 10px rgba(74, 157, 255, 0.5);
  }
`;

const WindowControls = styled.div`
  display: flex;
  align-items: center;
`;

const WindowButton = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin-left: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.6);
    opacity: 0.8;
  }
`;

const CodeContent = styled.pre`
  margin: 0;
  padding: ${theme.spacing.lg} ${theme.spacing.xl};
  overflow-x: auto;
  color: #e0e0e0;
  font-size: ${theme.typography.sizes.caption};
  line-height: 1.6;
  position: relative;
  
  /* Gradient highlight for important sections */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 40%;
    background: linear-gradient(to bottom, transparent, #4A9DFF, transparent);
    opacity: 0.6;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #1e2130;
    border-radius: ${theme.borderRadius.sm};
  }
  
  &::-webkit-scrollbar-thumb {
    background: #3e3e5e;
    border-radius: ${theme.borderRadius.sm};
    border: 2px solid #1e2130;
    
    &:hover {
      background: #4A9DFF;
    }
  }
`;

// Line numbers column
const LineNumbers = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 40px;
  padding: ${theme.spacing.lg} 0;
  background-color: rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.8em;
  text-align: right;
  user-select: none;
  border-right: 1px dashed rgba(74, 157, 255, 0.1);
`;

const CodeWithLineNumbers = styled.div`
  position: relative;
  padding-left: 50px;
`;

// Syntax highlighting functions (improved version)
const highlightJavaScript = (code: string) => {
  // Replace keywords with colored spans
  let highlighted = code
    .replace(/\b(const|let|var|function|return|if|else|for|while|class|import|export|from|async|await)\b/g, '<span style="color: #569CD6; font-weight: 500;">$1</span>')
    .replace(/\b(true|false|null|undefined|this|new|super)\b/g, '<span style="color: #569CD6;">$1</span>')
    .replace(/(['"])(?:(?=(\\?))\2.)*?\1/g, '<span style="color: #CE9178;">$&</span>')
    .replace(/\b(\d+)\b/g, '<span style="color: #B5CEA8;">$1</span>')
    .replace(/\/\/.*/g, '<span style="color: #6A9955; font-style: italic;">$&</span>')
    .replace(/\/\*[\s\S]*?\*\//g, '<span style="color: #6A9955; font-style: italic;">$&</span>')
    .replace(/\b(console|document|window|Math|Date|Object|Array)\b/g, '<span style="color: #4FC1FF;">$1</span>')
    .replace(/\b(log|info|warn|error)\b/g, '<span style="color: #DCDCAA;">$1</span>')
    .replace(/[{}[\]()]/g, '<span style="color: #D4D4D4;">$&</span>')
    .replace(/\b(private|protected|public|readonly)\b/g, '<span style="color: #C586C0;">$1</span>');
    
  return highlighted;
};

const highlightTS = (code: string) => {
  let highlighted = highlightJavaScript(code);
  // Add TypeScript specific highlighting
  highlighted = highlighted
    .replace(/\b(interface|type|extends|implements|any|void|string|number|boolean|never|unknown|as|keyof|typeof)\b/g, '<span style="color: #4EC9B0; font-weight: 500;">$1</span>')
    .replace(/(?<=\w+)\s*:\s*(?=\w+)/g, '<span style="color: #9CDCFE;">:</span> ');
    
  return highlighted;
};

const highlightPython = (code: string) => {
  // Replace Python keywords with colored spans
  let highlighted = code
    .replace(/\b(def|class|import|from|as|return|if|elif|else|for|while|in|with|try|except|finally|raise|pass|continue|break)\b/g, '<span style="color: #569CD6; font-weight: 500;">$1</span>')
    .replace(/\b(True|False|None|self)\b/g, '<span style="color: #569CD6;">$1</span>')
    .replace(/(['"])(?:(?=(\\?))\2.)*?\1/g, '<span style="color: #CE9178;">$&</span>')
    .replace(/\b(\d+)\b/g, '<span style="color: #B5CEA8;">$1</span>')
    .replace(/#.*/g, '<span style="color: #6A9955; font-style: italic;">$&</span>')
    .replace(/\b(__init__|__str__|__repr__)\b/g, '<span style="color: #DCDCAA;">$1</span>');
    
  return highlighted;
};

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language = 'typescript', 
  title = 'achievement.ts',
  autoType = false // Default to false for stability
}) => {
  // Get the highlighted code
  const getHighlightedCode = () => {
    let highlighted = code;
    
    switch (language) {
      case 'javascript':
        highlighted = highlightJavaScript(code);
        break;
      case 'typescript':
        highlighted = highlightTS(code);
        break;
      case 'jsx':
        highlighted = highlightJavaScript(code);
        break;
      case 'python':
        highlighted = highlightPython(code);
        break;
    }
    
    return { __html: highlighted };
  };
  
  // Generate line numbers
  const generateLineNumbers = () => {
    const lines = code.split('\n').length;
    let lineNumbers = [];
    for (let i = 1; i <= lines; i++) {
      lineNumbers.push(<div key={i} style={{ paddingRight: '10px' }}>{i}</div>);
    }
    return lineNumbers;
  };
  
  // Get the file extension for the title
  const getFileExtension = () => {
    switch (language) {
      case 'javascript':
        return '.js';
      case 'typescript':
        return '.ts';
      case 'jsx':
        return '.jsx';
      case 'python':
        return '.py';
      default:
        return '.txt';
    }
  };
  
  return (
    <CodeContainer>
      <CodeHeader>
        <CodeTitle>{title || `achievement${getFileExtension()}`}</CodeTitle>
        <WindowControls>
          <WindowButton color="#FF5F56" />
          <WindowButton color="#FFBD2E" />
          <WindowButton color="#27C93F" />
        </WindowControls>
      </CodeHeader>
      <CodeContent>
        <CodeWithLineNumbers>
          <LineNumbers>{generateLineNumbers()}</LineNumbers>
          <div dangerouslySetInnerHTML={getHighlightedCode()} />
        </CodeWithLineNumbers>
      </CodeContent>
    </CodeContainer>
  );
};

export default CodeBlock; 