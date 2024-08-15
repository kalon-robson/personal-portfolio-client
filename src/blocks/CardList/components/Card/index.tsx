import React from 'react';
import { Cell, Grid } from '@faceless-ui/css-grid';
import { cardStyles } from './styles';
// eslint-disable-next-line camelcase
import { CardList_Cards } from '../../../../graphql/generated/schema';
import { RichText } from '../../../../components';
import useIntersect from '../../../../hooks/useIntersect';
import { constructClassName } from '../../../../utils/constructClassName';

interface Props {
  // eslint-disable-next-line camelcase
  card: CardList_Cards;
}

export const Card: React.FC<Props> = ({
  card,
}) => {
  const [setNode, entry] = useIntersect({
    rootMargin: '-150px',
    threshold: 1,
  });

  const styles = cardStyles();

  return (
    <div
      ref={setNode}
      className={constructClassName([
        styles.cardContainer,
        entry?.isIntersecting && styles.activeCardContainer,
      ])}
      key={card.id}
    >
      <Grid>
        <Cell cols={2}>
          <span>{card.title}</span>
        </Cell>
        <Cell cols={10}>
          <RichText
            content={card.content}
            className={styles.richText}
          />
          <div
            className={styles.tagsContainer}
          >
            {card.tags?.map((tag, index) => (
              <span
                className={styles.tag}
                key={index}
              >
                {tag}
              </span>
            ))}
          </div>
        </Cell>
      </Grid>
    </div>
  );
};
