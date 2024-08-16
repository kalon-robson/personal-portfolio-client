import React, { useEffect } from 'react';
import { Cell, Grid } from '@faceless-ui/css-grid';
import { cardStyles } from './styles';
// eslint-disable-next-line camelcase
import { CardList_Cards } from '../../../../graphql/generated/schema';
import { RichText } from '../../../../components';

import { constructClassName } from '../../../../utils/constructClassName';

interface Props {
  // eslint-disable-next-line camelcase
  card: CardList_Cards;
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
}

export const Card: React.FC<Props> = ({
  card,
  isActive,
  setIsActive,
}) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const middle = window.innerHeight / 2;
        if (rect.top <= middle && rect.bottom >= middle) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, [setIsActive]);

  const styles = cardStyles();

  return (
    <div
      ref={containerRef}
      className={constructClassName([
        styles.cardContainer,
        isActive && styles.activeCardContainer,
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
