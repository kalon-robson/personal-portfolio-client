import React from 'react';
import { containerStyles } from './styles';
import { constructClassName } from '../../../utils/constructClassName';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<Props> = ({ children, className }) => {
  const styles = containerStyles();

  return (
    <div
      className={constructClassName([
        styles.container,
        className,
      ])}
    >
      {children}
    </div>
  );
};
