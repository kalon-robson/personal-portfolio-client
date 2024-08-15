import React from 'react';
import type { GetServerSideProps } from 'next';
import { WindowInfoProvider } from '@faceless-ui/window-info';
import { Article } from '../../../graphql/generated/schema';
import { RenderBlocks } from '../../../components';
import { cmsClient } from '../../../graphql';
import { ContainerWithRightSideMenu } from '../../../components/layouts/ContainerWithRightSideMenu';
import { PageHeader } from '../../../sections';
import { breakpoints } from '../../../styles';

interface Props {
  article?: Article
}

const ArticlePage: React.FC<Props> = ({
  article,
}) => {
  if (!article) {
    return null;
  }

  return (
    <WindowInfoProvider
      breakpoints={{
        l: `(max-width: ${breakpoints.lg}px)`,
        m: `(max-width: ${breakpoints.md}px)`,
        s: `(max-width: ${breakpoints.sm}px)`,
        xl: `(max-width: ${breakpoints.xl}px)`,
      }}
    >
      <ContainerWithRightSideMenu>
        <PageHeader
          title={article.title || ''}
          header={article.header}
          displayGoBackButton
        />
        <RenderBlocks
          blocks={article.layout?.blocks || []}
        />
      </ContainerWithRightSideMenu>
    </WindowInfoProvider>

  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = (ctx?.params?.slug as string[]).join('/');

  const { Articles } = await cmsClient.Article({
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  if (!Articles || !Articles.docs?.length) {
    ctx.res.statusCode = 404;

    return {
      props: {},
    };
  }

  return {
    props: {
      article: Articles.docs[0],
    },
  };
};

export default ArticlePage;
