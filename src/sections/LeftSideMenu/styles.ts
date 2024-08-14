import { createUseStyles } from 'react-jss';
import { base, colors, queries, spacing } from '../../styles';

export const leftSideMenuStyles = createUseStyles({
  container: {
    borderLeft: `1px solid ${colors.quartz}`,
    borderRight: `1px solid ${colors.quartz}`,
    marginLeft: 'auto',
    padding: spacing.small,

    [queries.md]: {
      '& svg': {
        width: base(1.5),
      },
      padding: spacing.xSmall,
    },
  },
});
