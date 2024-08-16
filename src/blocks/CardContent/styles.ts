import { createUseStyles } from 'react-jss';
import { colors, spacing } from '../../styles';

export const cardContentComponentStyles = createUseStyles({
  container: {
    background: '#1e1e1e',
    border: `1px solid ${colors.quartz}`,
    borderRadius: spacing.xSmall,
    marginBottom: `${spacing.large} !important`,
    padding: spacing.medium,
  },
});
