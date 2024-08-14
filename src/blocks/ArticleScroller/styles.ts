import { createUseStyles } from 'react-jss';
import Color from 'color';
import { body, spacing } from '../../styles';

export const articleScrollerComponentStyles = createUseStyles({
  '@keyframes shimmer': {
    '0%': {
      backgroundColor: '#292929',
    },
    '100%': {
      backgroundColor: Color('#292929').lighten(0.1).hex(),
    },
  },
  container: {
    marginBottom: `${spacing.large} !important`,
  },
  labelContainer: {
    display: 'flex',
    gap: spacing.xSmall,
  },
  loadingCard: {
    '&:last-child': {
      width: '25%',
    },
    animation: '$shimmer 1000ms infinite',
    background: '#292929',
    borderRadius: '4px',
    height: '270px',
    marginRight: spacing.small,
    width: '100%',
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: spacing.medium,
    paddingTop: spacing.small,
  },
  sliderTrack: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    paddingLeft: spacing.small,
  },
  title: {
    ...body,
    margin: 0,
  },
});
