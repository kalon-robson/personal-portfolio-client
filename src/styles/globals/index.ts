import { createUseStyles } from 'react-jss';
import { baselinePX, htmlFontSize } from '../base';
import { body, h1, h2, h3, h4, h5 } from '../types';
import { spacing } from '../sizes';
import { leftSideWidth } from '../variables';
import { prefersLightMode } from '../../utils/prefersLightMode';
import { colors } from '../colors';

export const globalStyles = createUseStyles({
  '@global': {
    '#__next': {
      color: prefersLightMode() ? colors.dark : colors.light,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
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
      height: '100%',
      margin: 0,
      padding: 0,
      scrollBehavior: 'smooth',
    },
    p: {
      ...body,
      margin: `0 0 ${spacing.small} 0`,
    },
    span: {
      ...body,
    },
  },
  appContainer: {
    background: `linear-gradient(${prefersLightMode() ? colors.light : colors.dark}, ${prefersLightMode() ? colors.light : '#101010'})`,
    display: 'flex',
    flex: 1,
  },
  leftSide: {
    display: 'flex',
    width: leftSideWidth,
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
});
