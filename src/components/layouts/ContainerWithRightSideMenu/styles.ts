import { createUseStyles } from 'react-jss';
import { base, colors, queries, spacing } from '../../../styles';

export const containerWithRightSideMenuStyles = createUseStyles({
  container: {
    display: 'flex',
    flex: 1,
  },
  leftContainer: {
    maxWidth: base(50),
    padding: `0 ${spacing.medium}`,
  },
  rightContainer: {
    borderLeft: `1px solid ${colors.quartz}`,
    padding: spacing.medium,
    [queries.lg]: {
      display: 'none',
    },
  },
});