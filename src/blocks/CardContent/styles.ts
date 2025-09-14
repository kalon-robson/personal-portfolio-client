import { createUseStyles } from 'react-jss';
import { colors, spacing } from '../../styles';

export const cardContentComponentStyles = createUseStyles({
  container: {
    '& *': {
      color: `${colors.light} !important`,
    },
    background: '#1e1e1e',
    border: `1px solid ${colors.quartz}`,
    borderRadius: spacing.xSmall,
    marginBottom: spacing.large,
    padding: spacing.medium,
  },
  noBottomMargin: {
    marginBottom: '0 !important',
  },
});
