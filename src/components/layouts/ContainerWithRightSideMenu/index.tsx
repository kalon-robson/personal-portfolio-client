import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { containerWithRightSideMenuStyles } from './styles';
import { toPascalCase } from '../../../utils/changeCase';
import { constructClassName } from '../../../utils/constructClassName';
import { eventEmitter } from '../../../lib/eventEmitter';
import { Icon } from '../../Icon';
import { colors } from '../../../styles';

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
  const [activeLinkIndex, setActiveLinkIndex] = useState<number>(0);

  // listen to event emitter
  useEffect(() => {
    const handleBlockIntersect = (id: string) => {
      setActiveBlock(id);
      setActiveLinkIndex(navLinks?.findIndex((link) => toPascalCase(link.path).toLowerCase() === id) || 0);
    };

    eventEmitter.on('blockIntersect', handleBlockIntersect);

    return () => {
      eventEmitter.off('blockIntersect', handleBlockIntersect);
    };
  }, [navLinks]);

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
          <div
            className={styles.floatingIcon}
            style={{ transform: `translateY(${(activeLinkIndex) * 71}px)` }}
          >
            <Icon
              fill={colors.white}
              size={30}
              className={styles.floatingIconIcon}
              icon="codeClassicRegularRotated90"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
