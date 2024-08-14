import React from 'react';
import { leftSideMenuStyles } from './styles';
import { Logo } from '../../components/graphics';
import { prefersLightMode } from '../../utils/prefersLightMode';
import { colors } from '../../styles';


export const LeftSideMenu: React.FC = () => {
  const styles = leftSideMenuStyles();

  return (
    <div className={styles.container}>
      <Logo
        width={50}
        color={prefersLightMode() ? colors.dark : colors.light}
      />
    </div>
  );
};
