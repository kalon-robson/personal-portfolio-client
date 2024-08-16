import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { containerWithRightSideMenuStyles } from './styles';
import { toPascalCase } from '../../../utils/changeCase';
import { constructClassName } from '../../../utils/constructClassName';
import { eventEmitter } from '../../../lib/eventEmitter';

interface Props {
  children: React.ReactNode;
  navLinks?: {
    title: string;
    path: string;
  }[]
}

export const ContainerWithRightSideMenu: React.FC<Props> = ({
  children,
  navLinks,
}) => {
  const [activeBlock, setActiveBlock] = useState<string>('');

  // listen to event emitter
  useEffect(() => {
    const handleBlockIntersect = (id: string) => {
      setActiveBlock(id);
    };

    eventEmitter.on('blockIntersect', handleBlockIntersect);

    return () => {
      eventEmitter.off('blockIntersect', handleBlockIntersect);
    };
  }, []);

  const styles = containerWithRightSideMenuStyles();

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        {children}
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.linksListContainer}>
          {
            navLinks?.map((link, index) => (
              <Link
                className={constructClassName([
                  styles.link,
                  toPascalCase(link.path).toLowerCase() === activeBlock && styles.activeLink,
                ])}
                href={`#${toPascalCase(link.path).toLowerCase()}`}
                key={link.title}
              >
                <span className={styles.linkCount}>
                  {index < 9 ? `0${index + 1}` : index + 1}
                </span>

                {link.title}
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
};
