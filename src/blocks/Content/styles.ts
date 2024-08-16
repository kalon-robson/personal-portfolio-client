import { createUseStyles } from 'react-jss';
import { spacing } from '../../styles';

export const contentComponentStyles = createUseStyles({
  container: {
    marginBottom: spacing.large,
  },
  noBottomMargin: {
    marginBottom: '0 !important',
  },
});
