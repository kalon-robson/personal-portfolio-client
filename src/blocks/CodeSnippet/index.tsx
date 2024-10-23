import React from 'react';
import MonacoEditor from '@monaco-editor/react';
import { codeSnippetStyles } from './styles';
import { Container } from '../../components/layouts';
import { CodeSnippet } from '../../graphql/generated/schema';

export const CodeSnippetComponent: React.FC<CodeSnippet> = ({
  code,
  language,
}) => {
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
              top: 20,
            },
            readOnly: true,
            scrollBeyondLastLine: false,
            tabSize: 4,
          }}
          width="100%"
          height="100%"
        />
      </div>

    </Container>
  );
};
