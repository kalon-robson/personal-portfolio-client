import { createUseStyles } from 'react-jss';
import { baselinePX, htmlFontSize } from '../base';
import { body, h1, h2, h3, h4, h5 } from '../types';
import { spacing } from '../sizes';
import { leftSideWidth } from '../variables';
import { colors } from '../colors';
import { queries } from '../queries';

export const globalStyles = createUseStyles({
  '@global': {
    '#__next': {
      color: colors.light,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
    a: {
      ...body,
    },
    div: {
      fontWeight: 300,
    },
    h1,
    h2,
    h3,
    h4,
    h5,
    html: {
      fontSize: htmlFontSize,
      lineHeight: `${baselinePX}px`,
    },
    'html, body': {
      '-webkit-font-smoothing': 'antialiased',
      background: colors.dark,
      height: '100%',
      margin: 0,
      overscrollBehaviorY: 'none',
      padding: 0,
      scrollBehavior: 'smooth',
    },
    p: {
      ...body,
      margin: `0 0 ${spacing.small} 0`,
    },
    'span, li': {
      ...body,
    },
    strong: {
      fontWeight: 700,
    },
  },
  appContainer: {
    background: `linear-gradient(${colors.dark}, #101010)`,
    display: 'flex',
    flex: 1,
  },
  leftSide: {
    display: 'flex',
    width: leftSideWidth,
    [queries.sm]: {
      display: 'none',
    },
  },
  mainContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
});
