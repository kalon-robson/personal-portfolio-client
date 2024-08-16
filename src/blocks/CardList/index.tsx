import React from 'react';
import { cardListComponentStyles } from './styles';
import { Container } from '../../components/layouts';
import { CardList } from '../../graphql/generated/schema';
import { Card } from './components';

export const CardListComponent: React.FC<CardList> = ({
  cards,
}) => {
  const [activeCardIndex, setActiveCardIndex] = React.useState<number>(0);
  const styles = cardListComponentStyles();

  return (
    <Container className={styles.container}>
      {cards?.map((card, index) => (
        <Card
          key={index}
          card={card}
          setIsActive={(isActive) => {
            if (isActive) {
              setActiveCardIndex(index);
            }
          }}
          isActive={activeCardIndex === index}
        />
      ))}
    </Container>
  );
};
