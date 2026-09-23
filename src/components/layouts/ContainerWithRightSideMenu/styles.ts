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
    flex: '1 1 auto',
    minWidth: 0,
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
    display: 'flex',
    fontWeight: 400,
    marginBottom: spacing.small,
    minWidth: 0,
    textDecoration: 'none',
    transition: 'all 300ms ease-out',
    whiteSpace: 'normal',
  },
  linkCount: {
    color: `${colors.quartz} !important`,
    display: 'inline-block',
    flex: `0 0 ${base()} !important`,
    fontWeight: `${700} !important`,
    marginRight: `${spacing.small} !important`,
    width: `${base()} !important`,
  },
  linksListContainer: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
    padding: spacing.medium,
    position: 'sticky',
    top: 0,
  },
  rightContainer: {
    boxSizing: 'border-box',
    borderLeft: `1px solid ${colors.quartz}`,
    flex: `0 0 ${base(24)}`,
    minWidth: 0,
    padding: spacing.medium,
    [queries.lg]: {
      display: 'none',
    },
    position: 'relative',
  },
});
