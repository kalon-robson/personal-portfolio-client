import React from 'react';
import type { AppProps } from 'next/app';
import { globalStyles } from '../styles';
import { LeftSideMenu } from '../sections/LeftSideMenu';
import { FontHead } from '../components';

export default ({ Component, pageProps }: AppProps) => {
  const styles = globalStyles();

  return (
    <React.Fragment>
      <FontHead />
      <div className={styles.appContainer}>
        <div className={styles.leftSide}>
          <LeftSideMenu />
        </div>
        <main className={styles.mainContainer}>
          <Component {...pageProps} />
        </main>
      </div>
    </React.Fragment>
  );
};
