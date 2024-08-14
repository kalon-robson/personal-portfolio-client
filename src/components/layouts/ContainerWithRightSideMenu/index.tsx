import React from 'react';

import { containerWithRightSideMenuStyles } from './styles';

interface Props {
  children: React.ReactNode;
}

export const ContainerWithRightSideMenu: React.FC<Props> = ({
  children,
}) => {
  const styles = containerWithRightSideMenuStyles();

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        {children}
      </div>
      <div className={styles.rightContainer} />
    </div>
  );
};
