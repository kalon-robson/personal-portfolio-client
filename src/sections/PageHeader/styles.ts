import { createUseStyles } from 'react-jss';
import { h5, spacing } from '../../styles';

export const pageHeaderStyles = createUseStyles({
  container: {
    marginBottom: spacing.large,
    paddingTop: spacing.medium,
  },
  description: {
    '& *': {
      fontSize: `${h5.fontSize} !important`,
    },
  },
});
