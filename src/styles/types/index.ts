import { prefersLightMode } from '../../utils/prefersLightMode';
import { base } from '../base';
import { colors } from '../colors';
import { queries } from '../queries';

export const defaultType = {
  fontFamily: 'Poppins, system-ui, Segoe UI, Helvetica Neue, Arial',
};

const heading = {
  ...defaultType,
  '& span': {
    color: 'inherit',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
    margin: 'inherit',
  },
  color: prefersLightMode() ? colors.dark : colors.light,
  fontWeight: 700,
};

export const h1 = {
  ...heading,
  fontSize: base(3),
  lineHeight: base(3 * 1.10),

  [queries.md]: {
    fontSize: base(2.15),
    lineHeight: base(2.15 * 1.27),
  },

};

export const h2 = {
  ...heading,
  fontSize: base(3),
  lineHeight: base(3 * 1.10),

  [queries.md]: {
    fontSize: base(2.15),
    lineHeight: base(2.15 * 1.27),
  },

  [queries.sm]: {
    fontSize: base(1.5),
    lineHeight: base(1.5 * 1.27),
  },
};

export const h3 = {
  ...heading,
  fontSize: base(2.25),
  lineHeight: base(2.25 * 1.25),

  [queries.md]: {
    fontSize: base(1.6),
    lineHeight: base(1.6 * 1.25),
  },
};

export const h4 = {
  ...heading,
  fontSize: base(1.6),
  fontWeight: 400,
  lineHeight: base(1.6 * 1.25),

  [queries.md]: {
    fontSize: base(1.15),
    lineHeight: base(1.15 * 1.25),
  },
};

export const h5 = {
  ...heading,
  fontSize: base(1.15),
  lineHeight: base(1.15 * 1.25),

  [queries.md]: {
    fontSize: base(1),
    lineHeight: base(1 * 1.25),
  },
};

export const body = {
  ...defaultType,
  color: prefersLightMode() ? colors.dark : '#939393',
  fontSize: base(0.8),
  fontWeight: 400,
  lineHeight: base(0.8 * 1.25),
};
