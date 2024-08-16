import React from 'react';
import { Content } from '../../graphql/generated/schema';
import { RichText } from '../../components';
import { Container } from '../../components/layouts';
import { cardContentComponentStyles } from './styles';
import { SharedBlockType } from '../types';
import { constructClassName } from '../../utils/constructClassName';

export const CardContentComponent: React.FC<SharedBlockType & Content> = ({ content, noBottomMargin }) => {
  const styles = cardContentComponentStyles();

  return (
    <Container className={constructClassName([
      styles.container,
      noBottomMargin && styles.noBottomMargin,
    ])}
    >
      <RichText
        content={content}
      />
    </Container>
  );
};
