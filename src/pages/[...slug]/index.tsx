import React from 'react';
import type { GetServerSideProps } from 'next';
import { Pages, PagesQuery, PagesQueryVariables } from '../../graphql/generated/schema';
import { RenderBlocks } from '../../components';
import { cmsClient } from '../../graphql';
import { PAGES } from '../../graphql/query/page';

interface Props {
  // @ts-expect-error - The singular prop is available
  page?: Pages['docs'][0];
}

const Home: React.FC<Props> = ({
  page,
}) => {
  if (!page) {
    return null;
  }

  return (
    <div>
      <h1>{page.title}</h1>
      <RenderBlocks
        layout={page.layout || []}
      />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = ctx.params?.slug
    ? (ctx.params.slug as string[]).join('/')
    : 'home';

  const data = await cmsClient.request<PagesQuery, PagesQueryVariables>(PAGES, {
    limit: 1,
    page: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  if (!data?.Pages?.docs?.length) {
    ctx.res.statusCode = 404;

    return {
      props: {},
    };
  }

  return {
    props: {
      page: data?.Pages?.docs?.[0],
    },
  };
};
