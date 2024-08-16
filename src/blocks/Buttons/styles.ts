import { createUseStyles } from 'react-jss';
import { spacing } from '../../styles';

export const buttonsComponentStyles = createUseStyles({
  container: {
    '& $button:not(:last-child)': {
      marginRight: spacing.small,
    },
    marginBottom: spacing.large,
  },
});
