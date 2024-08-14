import React from 'react';
import Link from 'next/link';
// eslint-disable-next-line camelcase
import { Link as LinkType, Link_Type } from '../../graphql/generated/schema';

interface Props {
  link?: LinkType | null;
  children: React.ReactNode;
  className?: string;
}

export const AppLink: React.FC<Props> = ({
  link,
  children,
  className,
}) => {
  if (!link) return null;

  // eslint-disable-next-line camelcase
  if (link.type && link.type === Link_Type.Internal) {
    let pageSlug = link.reference?.slug;
    if (pageSlug === 'home') {
      pageSlug = '';
    }

    let pageTypePath: string | null = null;
    switch (link.reference?.__typename) {
      case 'Page':
        pageTypePath = '';
        break;
      default:
        break;
    }

    return (
      <Link
        href={`${pageTypePath ? `/${pageTypePath}` : ''}/${pageSlug}`}
        className={className}
      >
        {
          children || link.label
        }
      </Link>
    );
  }

  return (
    <a
      href={`${link?.url}`}
      className={className}
    >
      {
        children || link.label
      }
    </a>
  );
};
