import React from 'react';
import { leftSideMenuStyles } from './styles';
import { Logo } from '../../components/graphics';


export const LeftSideMenu: React.FC = () => {
  const styles = leftSideMenuStyles();

  return (
    <div className={styles.container}>
      <Logo width={50} />
    </div>
  );
};
