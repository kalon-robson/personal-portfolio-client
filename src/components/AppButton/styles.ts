import { createUseStyles } from 'react-jss';
import Color from 'color';
import { colors, spacing } from '../../styles';

export const appButtonStyles = createUseStyles({
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
  button: {
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.7,
    },
    '&:focus-visible': {
      outline: `1px solid ${colors.dark}`,
    },
    all: 'unset',
    border: '1px solid transparent',
    cursor: 'pointer',
    display: 'inline-flex',
    padding: spacing.xSmall,
  },
  buttonLoading: {
    cursor: 'not-allowed',
  },
  contentSpan: {
    alignItems: 'center',
    display: 'flex',
    gap: spacing.xSmall,
  },
  icon: {
  },
  iconOnly: {

  },
  link: {
    borderRadius: 0,
    padding: 0,
  },
  loadingIcon: {
    alignItems: 'center',
    animation: '$spin 1s linear infinite',
    display: 'flex',
    justifyContent: 'center',
    lineHeight: '0 !important',
  },
  primary: {
    '& *': {
      color: colors.white,
    },
    '&:hover': {
      background: Color(colors.dark).darken(0.1).string(),
      border: `1px solid ${colors.white} !important`,
      // outer glow
      boxShadow: `0 0 10px ${colors.white}`,
    },
    background: colors.dark,
    transition: 'all 300ms',
  },
  tertiary: {

  },
});
