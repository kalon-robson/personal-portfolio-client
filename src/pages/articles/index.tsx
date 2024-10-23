import React from 'react';
import type { GetServerSideProps } from 'next';
import { WindowInfoProvider } from '@faceless-ui/window-info';
import { Cell, Grid } from '@faceless-ui/css-grid';
import { Article, Page } from '../../graphql/generated/schema';
import { ArticleCard, Head } from '../../components';
import { cmsClient } from '../../graphql';
import { PageHeader } from '../../sections';
import { breakpoints } from '../../styles';
import { Container } from '../../components/layouts';

interface Props {
  page?: Page
  articles?: Article[]
}

const Home: React.FC<Props> = ({
  page,
  articles,
}) => {
  if (!page) {
    return null;
  }

  return (
    <React.Fragment>
      <Head
        title={page.meta?.title || undefined}
        description={page.meta?.description || undefined}
        ogImage={page.meta?.image?.sizes?.card?.url || page.meta?.image?.url || undefined}
      />
      <WindowInfoProvider
        breakpoints={{
          l: `(max-width: ${breakpoints.lg}px)`,
          m: `(max-width: ${breakpoints.md}px)`,
          s: `(max-width: ${breakpoints.sm}px)`,
          xl: `(max-width: ${breakpoints.xl}px)`,
        }}
      >
        <PageHeader
          title={page.title}
          header={page.header}
          displayGoBackButton
        />

        <Container>
          <Grid>
            {articles?.map((article) => (
              <Cell
                key={article.id}
                cols={4}
              >
                <ArticleCard
                  {...article}
                />
              </Cell>
            ))}
          </Grid>
        </Container>
      </WindowInfoProvider>
    </React.Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = 'articles';

  const [{ Pages }, { Articles }] = await Promise.all([
    await cmsClient.Page({
      where: {
        slug: {
          equals: slug,
        },
      },
    }),
    await cmsClient.Articles({
      limit: 12,
      page: 1,
    }),
  ]);

  if (!Pages || !Pages.docs?.length) {
    ctx.res.statusCode = 404;

    return {
      props: {},
    };
  }

  return {
    props: {
      articles: Articles?.docs,
      page: Pages.docs[0],
    },
  };
};

export default Home;
