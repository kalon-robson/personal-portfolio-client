import React from 'react';
import Link from 'next/link';
import { leftSideMenuStyles } from './styles';
import { Logo } from '../../components/graphics';
import { colors } from '../../styles';


export const LeftSideMenu: React.FC = () => {
  const styles = leftSideMenuStyles();

  return (
    <div className={styles.container}>
      <Link href="/">
        <Logo
          width={50}
          color={colors.light}
        />
      </Link>
    </div>
  );
};
