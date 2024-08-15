import { createUseStyles } from 'react-jss';
import { base } from '../../styles';

export const gridContainerStyles = createUseStyles({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '1200px',
    paddingLeft: base(2),
    paddingRight: base(2),
  },
});
