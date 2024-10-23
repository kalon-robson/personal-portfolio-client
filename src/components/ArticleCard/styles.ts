import { createUseStyles } from 'react-jss';
import { base, colors, h5, queries, spacing } from '../../styles';

export const articleCardStyles = createUseStyles({
  container: {
    '&:hover': {
      '& $imageOverlay': {
        opacity: 0,
      },
      background: '#292929',
      border: `1px solid ${colors.light}`,

      boxShadow: `0 0 10px ${colors.light}`,
    },
    WebkitTapHighlightColor: 'transparent',
    border: '1px solid transparent',
    height: base(14),
    marginBottom: spacing.xSmall,
    marginRight: base(),
    marginTop: spacing.xSmall,
    overflow: 'hidden',
    position: 'relative',
    transition: 'all 100ms ease',
    [queries.sm]: {
      marginRight: '0 !important',
    },
  },
  featuredImage: {
    height: 'calc(100% - 20px)',
    left: '10px',
    objectFit: 'cover',
    position: 'absolute',
    top: '10px',
    width: 'calc(100% - 20px)',
    zIndex: 0,
  },
  imageOverlay: {
    '&::before': {
      background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)',
      content: '""',
      height: 'calc(100% - 20px)',
      left: '10px',
      position: 'absolute',
      top: '10px',
      width: 'calc(100% - 20px)',
    },
    transition: 'all 300ms ease',
  },
  title: {
    ...h5,
    bottom: spacing.medium,
    fontWeight: 700,
    left: spacing.medium,
    maxWidth: '80%',
    position: 'absolute',
    transition: 'all 300ms ease',
  },
});
