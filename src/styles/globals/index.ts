import { createUseStyles } from 'react-jss';
import { baselinePX, htmlFontSize } from '../base';

export const globalStyles = createUseStyles({
  '@global': {
    html: {
      fontSize: htmlFontSize,
      lineHeight: `${baselinePX}px`,
    },
    'html, body': {
      '-webkit-font-smoothing': 'antialiased',
      scrollBehavior: 'smooth',
    },
  },
});
