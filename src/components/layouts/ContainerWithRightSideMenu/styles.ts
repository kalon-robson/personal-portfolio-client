import { createUseStyles } from 'react-jss';
import { base, colors, spacing } from '../../../styles';

export const containerWithRightSideMenuStyles = createUseStyles({
  container: {
    display: 'flex',
    flex: 1,
  },
  leftContainer: {
    maxWidth: base(60),
    padding: spacing.medium,
  },
  rightContainer: {
    borderLeft: `1px solid ${colors.quartz}`,
    padding: spacing.medium,
  },
});
