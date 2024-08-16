import { createUseStyles } from 'react-jss';
import { colors, queries, spacing } from '../../styles';

export const iconsRowComponentStyles = createUseStyles({
  container: {
    marginBottom: spacing.large,
  },
  icon: {
    '&:not(:last-child)': {
      marginRight: spacing.xSmall,
    },
    display: 'inline-block',
  },
  iconsRowContainer: {
    border: `1px solid ${colors.quartz}`,
    borderRadius: spacing.xSmall,
    padding: `${spacing.small} ${spacing.medium}`,
    width: 'fit-content',
    [queries.md]: {
      padding: spacing.small,
    },
  },
});
