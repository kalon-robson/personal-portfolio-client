import { createUseStyles } from 'react-jss';
import { base, spacing } from '../../styles';

export const codeSnippetStyles = createUseStyles({
  container: {
    marginBottom: spacing.large,
  },
  editor: {
    height: base(25),
  },
  editorContainer: {
  },
});
