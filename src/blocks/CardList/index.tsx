import React from 'react';
import { cardListComponentStyles } from './styles';
import { Container } from '../../components/layouts';
import { CardList } from '../../graphql/generated/schema';
import { Card } from './components';

export const CardListComponent: React.FC<CardList> = ({
  cards,
}) => {
  const styles = cardListComponentStyles();

  return (
    <Container className={styles.container}>
      {cards?.map((card) => (
        <Card
          card={card}
        />
      ))}
    </Container>
  );
};
