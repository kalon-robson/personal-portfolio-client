import { createUseStyles } from 'react-jss';
import { baselinePX, htmlFontSize } from '../base';
import { body, h1, h2, h3, h4, h5 } from '../types';
import { spacing } from '../sizes';

export const globalStyles = createUseStyles({
  '@global': {
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
      scrollBehavior: 'smooth',
    },
    p: {
      ...body,
      fontWeight: 300,
      margin: `0 0 ${spacing.small} 0`,
    },
  },
});
