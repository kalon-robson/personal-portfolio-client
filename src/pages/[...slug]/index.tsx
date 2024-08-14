import React from 'react';
import type { GetServerSideProps } from 'next';
import { Page } from '../../graphql/generated/schema';
import { RenderBlocks } from '../../components';
import { cmsClient } from '../../graphql';

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
    <div>
      <h1>{page.title}</h1>
      <RenderBlocks
        blocks={page.layout?.blocks || []}
      />
    </div>
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
