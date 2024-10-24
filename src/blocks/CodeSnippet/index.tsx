import React, { useState } from 'react';
import MonacoEditor from '@monaco-editor/react';
import { codeSnippetStyles } from './styles';
import { Container } from '../../components/layouts';
import { CodeSnippet } from '../../graphql/generated/schema';

export const CodeSnippetComponent: React.FC<CodeSnippet> = ({
  code,
  language,
}) => {
  const [lines] = useState<number>((code || '').split('\n').length);
  const styles = codeSnippetStyles();

  return (
    <Container className={styles.container}>
      <div className={styles.editorContainer}>
        <MonacoEditor
          theme="vs-dark"
          className={styles.editor}
          value={`${code}`}
          language={language || undefined}
          options={{
            autoIndent: 'full',
            automaticLayout: true,
            contextmenu: false,
            formatOnPaste: true,
            formatOnType: true,
            minimap: {
              enabled: false,
            },
            padding: {
              bottom: lines < 3 ? 10 : 20,
              top: lines < 3 ? 10 : 20,
            },
            readOnly: true,
            scrollBeyondLastLine: false,
            tabSize: 4,
          }}
          width="100%"
          height={`${lines < 3 ? 40 : 40 + (lines * 20)}px`}
        />
      </div>

    </Container>
  );
};
