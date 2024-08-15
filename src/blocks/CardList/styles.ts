import { createUseStyles } from 'react-jss';
import { base, body, colors, h3, h4, h5, spacing } from '../../styles';

export const cardListComponentStyles = createUseStyles({
  cardContainer: {
    '&:hover': {
      background: '#272727',
      border: `1px solid ${colors.quartz}`,
    },
    border: '1px solid transparent',
    borderRadius: spacing.xSmall,
    marginBottom: spacing.small,
    padding: spacing.medium,
    transition: 'all 300ms ease',
  },
  container: {
    marginBottom: spacing.large,
  },
  richText: {
    '& h2': {
      ...h3,
    },
    '& h3': {
      ...h4,
    },
    '& h4': {
      ...h5,
    },
    '& h5': {
      ...body,
    },
  },
  tag: {
    background: '#464646',
    borderRadius: base(0.25),
    color: colors.light,
    padding: spacing.xSmall,
  },
  tagsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: spacing.small,
  },
});
