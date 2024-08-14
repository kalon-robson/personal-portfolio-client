import { createUseStyles } from 'react-jss';
import { base, queries, spacing } from '../../../styles';

export const containerStyles = createUseStyles({
  container: {
    boxSizing: 'border-box',
    margin: '0 auto',
    maxWidth: base(82),
    padding: `0 ${spacing.medium}`,
    width: '100%',

    [queries.md]: {
      padding: `0 ${spacing.xSmall}`,
    },
  },
});
