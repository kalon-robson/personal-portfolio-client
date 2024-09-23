import React from 'react';
import type { GetServerSideProps } from 'next';
import { WindowInfoProvider } from '@faceless-ui/window-info';
import { Page } from '../../graphql/generated/schema';
import { Head, RenderBlocks } from '../../components';
import { cmsClient } from '../../graphql';
import { ContainerWithRightSideMenu } from '../../components/layouts/ContainerWithRightSideMenu';
import { PageHeader } from '../../sections';
import { breakpoints } from '../../styles';

interface Props {
  page?: Page
}

const Home: React.FC<Props> = ({
  page,
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
        <ContainerWithRightSideMenu
          navLinks={page.layout?.blocks?.filter((block) => block.blockName)?.map((block) => ({
            path: block.blockName || '',
            title: block.blockName || '',
          })) || []}
        >
          <PageHeader
            title={page.title}
            header={page.header}
          />
          <RenderBlocks
            blocks={page.layout?.blocks || []}
            addIdLinks
          />
        </ContainerWithRightSideMenu>
      </WindowInfoProvider>
    </React.Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = ctx.params?.slug
    ? (ctx.params.slug as string[]).join('/')
    : 'home';

  const { Pages } = await cmsClient.Page({
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  if (!Pages || !Pages.docs?.length) {
    ctx.res.statusCode = 404;

    return {
      props: {},
    };
  }

  return {
    props: {
      page: Pages.docs[0],
    },
  };
};

export default Home;
