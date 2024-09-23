import React from 'react';
import NextHead from 'next/head';
import { useRouter } from 'next/router';

const defaultDescription = 'A full-stack engineer with a fervor for crafting applications, all while embracing the entrepreneurial spirit.';
const defaultTitle = 'Kalon Robson';

type Props = {
  title?: string;
  description?: string;
  ogImage?: string | null;
};

export const Head: React.FC<Props> = ({
  title,
  description,
  ogImage,
}) => {
  const { asPath } = useRouter();

  const getTitle = () => {
    if (title) return title;
    return defaultTitle;
  };

  return (
    <NextHead>
      <title>{getTitle()}</title>
      <link
        rel="icon"
        type="image/x-icon"
        href="/favicon.svg"
      />
      <link
        rel="shortcut icon"
        href="/favicon.svg"
      />
      <meta
        name="description"
        content={description || defaultDescription}
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        property="og:url"
        content={`${asPath}`}
      />
      <meta
        property="og:title"
        content={title || defaultTitle}
      />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta
        property="twitter:title"
        content={title || defaultTitle}
      />
      <meta
        name="twitter:site"
        content="@primedrylining"
      />
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      {ogImage && (
        <React.Fragment>
          <meta
            name="twitter:image"
            content={ogImage}
          />
          <meta
            property="og:image"
            content={ogImage}
          />
        </React.Fragment>
      )}
    </NextHead>
  );
};
