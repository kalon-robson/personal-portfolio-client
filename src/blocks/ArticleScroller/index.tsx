import React, { useEffect, useRef } from 'react';
import { Slide, SliderProvider, SliderTrack } from '@faceless-ui/slider';
import { ArticleScroller as ArticleScrollerType } from '../../graphql/generated/schema';
import { articleScrollerComponentStyles } from './styles';
import { Container } from '../../components/layouts';
import { ArticleCard, Icon } from '../../components';
import { cmsClient } from '../../graphql';

export const ArticleScrollerComponent: React.FC<ArticleScrollerType> = ({
  articles: selectedArticles,
}) => {
  const [articles, setArticles] = React.useState<ArticleScrollerType['articles']>(selectedArticles);

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
              slidesToShow={2.2}
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
