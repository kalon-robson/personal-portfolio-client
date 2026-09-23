import { createUseStyles } from 'react-jss';
import { base, colors, h5, queries, spacing } from '../../../styles';

export const containerWithRightSideMenuStyles = createUseStyles({
  activeLink: {
    '& $linkCount': {
      color: `${colors.white} !important`,
      transition: 'all 300ms ease',
    },
    color: colors.white,
    textShadow: `0 0 10px ${colors.light} !important`,
    transition: 'all 300ms ease',
  },
  container: {
    display: 'flex',
    flex: 1,
  },
  floatingIcon: {
    alignItems: 'center',
    borderRight: `2px solid ${colors.white}`,
    display: 'flex',
    height: base(2),
    justifyContent: 'center',
    left: base(-3.75),
    paddingRight: base(0.2),
    position: 'absolute',
    top: base(1.5),
    transition: 'all 300ms ease',
    zIndex: 10000,
  },
  floatingIconIcon: {
    transform: 'rotate(90deg)',
  },
  leftContainer: {
    flex: 1,
    maxWidth: base(50),
  },
  link: {
    ...h5,
    '&:hover': {
      '& $linkCount': {
        color: `${colors.white} !important`,
        transition: 'all 300ms ease',
      },
      color: colors.white,
      textShadow: `0 0 10px ${colors.light} !important`,
      transition: 'all 300ms ease',
    },
    fontWeight: 400,
    marginBottom: spacing.small,
    textDecoration: 'none',
    transition: 'all 300ms ease-out',
    whiteSpace: 'nowrap',
  },
  linkCount: {
    color: `${colors.quartz} !important`,
    display: 'inline-block',
    fontWeight: `${700} !important`,
    marginRight: `${spacing.small} !important`,
    width: `${base()} !important`,
  },
  linksListContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: spacing.medium,
    position: 'sticky',
    top: 0,
  },
  rightContainer: {
    borderLeft: `1px solid ${colors.quartz}`,
    padding: spacing.medium,
    [queries.lg]: {
      display: 'none',
    },
    position: 'relative',
  },
});
