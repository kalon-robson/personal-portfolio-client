import React, { useEffect, useRef } from 'react';
import { Slide, SliderProvider, SliderTrack } from '@faceless-ui/slider';
import { useWindowInfo } from '@faceless-ui/window-info';
import { ArticleScroller as ArticleScrollerType } from '../../graphql/generated/schema';
import { articleScrollerComponentStyles } from './styles';
import { Container } from '../../components/layouts';
import { ArticleCard, Icon } from '../../components';
import { cmsClient } from '../../graphql';
import { breakpoints } from '../../styles';

export const ArticleScrollerComponent: React.FC<ArticleScrollerType> = ({
  articles: selectedArticles,
}) => {
  const [articles, setArticles] = React.useState<ArticleScrollerType['articles']>(selectedArticles);

  const { width } = useWindowInfo();
  const isLg = (width || 0) < breakpoints.lg;
  const isSm = (width || 0) < breakpoints.sm;

  const getRecentArticles = async () => {
    const recentArticles = await cmsClient.Articles({
      limit: 5,
      page: 1,
    });

    setArticles(recentArticles.Articles?.docs as ArticleScrollerType['articles']);
  };
  const getRecentArticlesRef = useRef(getRecentArticles);

  useEffect(() => {
    if (!selectedArticles?.length) {
      getRecentArticlesRef.current();
    }
  }, [selectedArticles, getRecentArticlesRef]);

  const styles = articleScrollerComponentStyles();

  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.labelContainer}>
          <Icon icon="thoughtBubbleSharpLight" />
          <h2 className={styles.title}>Read My Thoughts</h2>
        </div>
      </Container>
      {
        (articles?.length || 0) > 0 ? (
          <div>
            <SliderProvider
              // TODO: reduce to 1.2 on md
              // eslint-disable-next-line no-nested-ternary
              slidesToShow={isSm ? 1 : isLg ? 1.2 : 2.2}
            // autoPlay
            // autoplaySpeed={5000}
            >
              <SliderTrack className={styles.sliderTrack}>
                {articles?.map((article, index) => (
                  <Slide
                    index={index}
                    key={article.id}
                  >
                    <ArticleCard
                      key={article.id}
                      {...article}
                    />
                  </Slide>
                ))}
              </SliderTrack>
            </SliderProvider>
          </div>
        ) : (
          <div className={styles.loadingContainer}>
            <div className={styles.loadingCard} />
            <div className={styles.loadingCard} />
            <div className={styles.loadingCard} />
          </div>
        )
      }
    </div>
  );
};
