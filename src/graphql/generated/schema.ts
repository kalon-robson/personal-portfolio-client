import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
export type ButtonsBlockFragmentFragment = { __typename?: 'Buttons', id?: string | null, blockName?: string | null, blockType?: string | null, buttons?: Array<{ __typename?: 'Buttons_Buttons', id?: string | null, buttonType?: Buttons_Buttons_ButtonType | null, link?: { __typename?: 'Link', type?: Link_Type | null, url?: string | null, label?: string | null, reference?: { __typename?: 'Page', id?: string | null, slug?: string | null } | null } | null }> | null };

export type ContentBlockFragmentFragment = { __typename?: 'Content', content?: any | null, id?: string | null, blockName?: string | null, blockType?: string | null };

export type ImageBlockFragmentFragment = { __typename?: 'Image', caption?: any | null, id?: string | null, blockName?: string | null, blockType?: string | null, image: { __typename?: 'Media', id?: string | null, alt: string, updatedAt?: any | null, createdAt?: any | null, url?: string | null, filename?: string | null, mimeType?: string | null, filesize?: number | null, width?: number | null, height?: number | null, focalX?: number | null, focalY?: number | null, sizes?: { __typename?: 'Media_Sizes', card?: { __typename?: 'Media_Sizes_Card', url?: string | null, width?: number | null, height?: number | null, mimeType?: string | null, filesize?: number | null, filename?: string | null } | null, feature?: { __typename?: 'Media_Sizes_Feature', url?: string | null, width?: number | null, height?: number | null, mimeType?: string | null, filesize?: number | null, filename?: string | null } | null } | null } };

export type LinkFieldFragmentFragment = { __typename?: 'Link', type?: Link_Type | null, url?: string | null, label?: string | null, reference?: { __typename?: 'Page', id?: string | null, slug?: string | null } | null };

export type MediaFieldFragmentFragment = { __typename?: 'Media', id?: string | null, alt: string, updatedAt?: any | null, createdAt?: any | null, url?: string | null, filename?: string | null, mimeType?: string | null, filesize?: number | null, width?: number | null, height?: number | null, focalX?: number | null, focalY?: number | null, sizes?: { __typename?: 'Media_Sizes', card?: { __typename?: 'Media_Sizes_Card', url?: string | null, width?: number | null, height?: number | null, mimeType?: string | null, filesize?: number | null, filename?: string | null } | null, feature?: { __typename?: 'Media_Sizes_Feature', url?: string | null, width?: number | null, height?: number | null, mimeType?: string | null, filesize?: number | null, filename?: string | null } | null } | null };

export type ArticlesQueryVariables = Exact<{
  draft?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<Article_Where>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
}>;


export type ArticlesQuery = { __typename?: 'Query', Articles?: { __typename?: 'Articles', hasNextPage?: boolean | null, hasPrevPage?: boolean | null, limit?: number | null, nextPage?: number | null, offset?: number | null, page?: number | null, pagingCounter?: number | null, prevPage?: number | null, totalDocs?: number | null, totalPages?: number | null, docs?: Array<{ __typename?: 'Article', id?: string | null, title?: string | null, slug?: string | null, publishedAt?: any | null, createdAt?: any | null, updatedAt?: any | null, header?: { __typename?: 'Article_Header', description?: any | null } | null } | null> | null } | null };

export type ArticleQueryVariables = Exact<{
  draft?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<Article_Where>;
}>;


export type ArticleQuery = { __typename?: 'Query', Articles?: { __typename?: 'Articles', docs?: Array<{ __typename?: 'Article', id?: string | null, title?: string | null, slug?: string | null, publishedAt?: any | null, createdAt?: any | null, updatedAt?: any | null, header?: { __typename?: 'Article_Header', description?: any | null } | null, layout?: { __typename?: 'Article_Layout', blocks?: Array<{ __typename?: 'Content', content?: any | null, id?: string | null, blockName?: string | null, blockType?: string | null } | { __typename?: 'Image', caption?: any | null, id?: string | null, blockName?: string | null, blockType?: string | null, image: { __typename?: 'Media', id?: string | null, alt: string, updatedAt?: any | null, createdAt?: any | null, url?: string | null, filename?: string | null, mimeType?: string | null, filesize?: number | null, width?: number | null, height?: number | null, focalX?: number | null, focalY?: number | null, sizes?: { __typename?: 'Media_Sizes', card?: { __typename?: 'Media_Sizes_Card', url?: string | null, width?: number | null, height?: number | null, mimeType?: string | null, filesize?: number | null, filename?: string | null } | null, feature?: { __typename?: 'Media_Sizes_Feature', url?: string | null, width?: number | null, height?: number | null, mimeType?: string | null, filesize?: number | null, filename?: string | null } | null } | null } }> | null } | null } | null> | null } | null };

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  EmailAddress: any;
  JSON: any;
  JSONObject: any;
};

export type Access = {
  __typename?: 'Access';
  article?: Maybe<ArticleAccess>;
  canAccessAdmin: Scalars['Boolean'];
  media?: Maybe<MediaAccess>;
  page?: Maybe<PageAccess>;
  payload_preferences?: Maybe<Payload_PreferencesAccess>;
  user?: Maybe<UserAccess>;
};

export type Article = {
  __typename?: 'Article';
  _status?: Maybe<Article__Status>;
  createdAt?: Maybe<Scalars['DateTime']>;
  header?: Maybe<Article_Header>;
  id?: Maybe<Scalars['String']>;
  layout?: Maybe<Article_Layout>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ArticleCreateAccess = {
  __typename?: 'ArticleCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ArticleCreateDocAccess = {
  __typename?: 'ArticleCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ArticleDeleteAccess = {
  __typename?: 'ArticleDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ArticleDeleteDocAccess = {
  __typename?: 'ArticleDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ArticleDocAccessFields = {
  __typename?: 'ArticleDocAccessFields';
  _status?: Maybe<ArticleDocAccessFields__Status>;
  blocks?: Maybe<ArticleDocAccessFields_Blocks>;
  createdAt?: Maybe<ArticleDocAccessFields_CreatedAt>;
  description?: Maybe<ArticleDocAccessFields_Description>;
  publishedAt?: Maybe<ArticleDocAccessFields_PublishedAt>;
  slug?: Maybe<ArticleDocAccessFields_Slug>;
  title?: Maybe<ArticleDocAccessFields_Title>;
  updatedAt?: Maybe<ArticleDocAccessFields_UpdatedAt>;
};

export type ArticleDocAccessFields__Status = {
  __typename?: 'ArticleDocAccessFields__status';
  create?: Maybe<ArticleDocAccessFields__Status_Create>;
  delete?: Maybe<ArticleDocAccessFields__Status_Delete>;
  read?: Maybe<ArticleDocAccessFields__Status_Read>;
  update?: Maybe<ArticleDocAccessFields__Status_Update>;
};

export type ArticleDocAccessFields__Status_Create = {
  __typename?: 'ArticleDocAccessFields__status_Create';
  permission: Scalars['Boolean'];
};

export type ArticleDocAccessFields__Status_Delete = {
  __typename?: 'ArticleDocAccessFields__status_Delete';
  permission: Scalars['Boolean'];
};

export type ArticleDocAccessFields__Status_Read = {
  __typename?: 'ArticleDocAccessFields__status_Read';
  permission: Scalars['Boolean'];
};

export type ArticleDocAccessFields__Status_Update = {
  __typename?: 'ArticleDocAccessFields__status_Update';
  permission: Scalars['Boolean'];
};

export type ArticleDocAccessFields_Blocks = {
  __typename?: 'ArticleDocAccessFields_blocks';
  create?: Maybe<ArticleDocAccessFields_Blocks_Create>;
  delete?: Maybe<ArticleDocAccessFields_Blocks_Delete>;
  read?: Maybe<ArticleDocAccessFields_Blocks_Read>;
  update?: Maybe<ArticleDocAccessFields_Blocks_Update>;
};

export type ArticleDocAccessFields_Blocks_Create = {
  __typename?: 'ArticleDocAccessFields_blocks_Create';
  permission: Scalars['Boolean'];
};

export type ArticleDocAccessFields_Blocks_Delete = {
  __typename?: 'ArticleDocAccessFields_blocks_Delete';
  permission: Scalars['Boolean'];
};

export type ArticleDocAccessFields_Blocks_Read = {
  __typename?: 'ArticleDocAccessFields_blocks_Read';
  permission: Scalars['Boolean'];
};

export type ArticleDocAccessFields_Blocks_Update = {
  __typename?: 'ArticleDocAccessFields_blocks_Update';
  permission: Scalars['Boolean'];
};

export type ArticleDocAccessFields_CreatedAt = {
  __typename?: 'ArticleDocAccessFields_createdAt';
  create?: Maybe<ArticleDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<ArticleDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<ArticleDocAccessFields_CreatedAt_Read>;
  update?: Maybe<ArticleDocAccessFields_CreatedAt_Update>;
};

export type ArticleDocAccessFields_CreatedAt_Create = {
  __typename?: 'ArticleDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type ArticleDocAccessFields_CreatedAt_Delete = {
  __typename?: 'ArticleDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type ArticleDocAccessFields_CreatedAt_Read = {
  __typename?: 'ArticleDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type ArticleDocAccessFields_CreatedAt_Update = {
  __typename?: 'ArticleDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type ArticleDocAccessFields_Description = {
  __typename?: 'ArticleDocAccessFields_description';
  create?: Maybe<ArticleDocAccessFields_Description_Create>;
  delete?: Maybe<ArticleDocAccessFields_Description_Delete>;
  read?: Maybe<ArticleDocAccessFields_Description_Read>;
  update?: Maybe<ArticleDocAccessFields_Description_Update>;
};

export type ArticleDocAccessFields_Description_Create = {
  __typename?: 'ArticleDocAccessFields_description_Create';
  permission: Scalars['Boolean'];
};

export type ArticleDocAccessFields_Description_Delete = {
  __typename?: 'ArticleDocAccessFields_description_Delete';
  permission: Scalars['Boolean'];
};

export type ArticleDocAccessFields_Description_Read = {
  __typename?: 'ArticleDocAccessFields_description_Read';
  permission: Scalars['Boolean'];
};

export type ArticleDocAccessFields_Description_Update = {
  __typename?: 'ArticleDocAccessFields_description_Update';
  permission: Scalars['Boolean'];
};

export type ArticleDocAccessFields_PublishedAt = {
  __typename?: 'ArticleDocAccessFields_publishedAt';
  create?: Maybe<ArticleDocAccessFields_PublishedAt_Create>;
  delete?: Maybe<ArticleDocAccessFields_PublishedAt_Delete>;
  read?: Maybe<ArticleDocAccessFields_PublishedAt_Read>;
  update?: Maybe<ArticleDocAccessFields_PublishedAt_Update>;
};

export type ArticleDocAccessFields_PublishedAt_Create = {
  __typename?: 'ArticleDocAccessFields_publishedAt_Create';
  permission: Scalars['Boolean'];
};

export type ArticleDocAccessFields_PublishedAt_Delete = {
  __typename?: 'ArticleDocAccessFields_publishedAt_Delete';
  permission: Scalars['Boolean'];
};

export type ArticleDocAccessFields_PublishedAt_Read = {
  __typename?: 'ArticleDocAccessFields_publishedAt_Read';
  permission: Scalars['Boolean'];
};

export type ArticleDocAccessFields_PublishedAt_Update = {
  __typename?: 'ArticleDocAccessFields_publishedAt_Update';
  permission: Scalars['Boolean'];
};

export type ArticleDocAccessFields_Slug = {
  __typename?: 'ArticleDocAccessFields_slug';
  create?: Maybe<ArticleDocAccessFields_Slug_Create>;
  delete?: Maybe<ArticleDocAccessFields_Slug_Delete>;
  read?: Maybe<ArticleDocAccessFields_Slug_Read>;
  update?: Maybe<ArticleDocAccessFields_Slug_Update>;
};

export type ArticleDocAccessFields_Slug_Create = {
  __typename?: 'ArticleDocAccessFields_slug_Create';
  permission: Scalars['Boolean'];
};

export type ArticleDocAccessFields_Slug_Delete = {
  __typename?: 'ArticleDocAccessFields_slug_Delete';
  permission: Scalars['Boolean'];
};

export type ArticleDocAccessFields_Slug_Read = {
  __typename?: 'ArticleDocAccessFields_slug_Read';
  permission: Scalars['Boolean'];
};

export type ArticleDocAccessFields_Slug_Update = {
  __typename?: 'ArticleDocAccessFields_slug_Update';
  permission: Scalars['Boolean'];
};

export type ArticleDocAccessFields_Title = {
  __typename?: 'ArticleDocAccessFields_title';
  create?: Maybe<ArticleDocAccessFields_Title_Create>;
  delete?: Maybe<ArticleDocAccessFields_Title_Delete>;
  read?: Maybe<ArticleDocAccessFields_Title_Read>;
  update?: Maybe<ArticleDocAccessFields_Title_Update>;
};

export type ArticleDocAccessFields_Title_Create = {
  __typename?: 'ArticleDocAccessFields_title_Create';
  permission: Scalars['Boolean'];
};

export type ArticleDocAccessFields_Title_Delete = {
  __typename?: 'ArticleDocAccessFields_title_Delete';
  permission: Scalars['Boolean'];
};

export type ArticleDocAccessFields_Title_Read = {
  __typename?: 'ArticleDocAccessFields_title_Read';
  permission: Scalars['Boolean'];
};

export type ArticleDocAccessFields_Title_Update = {
  __typename?: 'ArticleDocAccessFields_title_Update';
  permission: Scalars['Boolean'];
};

export type ArticleDocAccessFields_UpdatedAt = {
  __typename?: 'ArticleDocAccessFields_updatedAt';
  create?: Maybe<ArticleDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<ArticleDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<ArticleDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<ArticleDocAccessFields_UpdatedAt_Update>;
};

export type ArticleDocAccessFields_UpdatedAt_Create = {
  __typename?: 'ArticleDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type ArticleDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'ArticleDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type ArticleDocAccessFields_UpdatedAt_Read = {
  __typename?: 'ArticleDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type ArticleDocAccessFields_UpdatedAt_Update = {
  __typename?: 'ArticleDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type ArticleFields = {
  __typename?: 'ArticleFields';
  _status?: Maybe<ArticleFields__Status>;
  blocks?: Maybe<ArticleFields_Blocks>;
  createdAt?: Maybe<ArticleFields_CreatedAt>;
  description?: Maybe<ArticleFields_Description>;
  publishedAt?: Maybe<ArticleFields_PublishedAt>;
  slug?: Maybe<ArticleFields_Slug>;
  title?: Maybe<ArticleFields_Title>;
  updatedAt?: Maybe<ArticleFields_UpdatedAt>;
};

export type ArticleFields__Status = {
  __typename?: 'ArticleFields__status';
  create?: Maybe<ArticleFields__Status_Create>;
  delete?: Maybe<ArticleFields__Status_Delete>;
  read?: Maybe<ArticleFields__Status_Read>;
  update?: Maybe<ArticleFields__Status_Update>;
};

export type ArticleFields__Status_Create = {
  __typename?: 'ArticleFields__status_Create';
  permission: Scalars['Boolean'];
};

export type ArticleFields__Status_Delete = {
  __typename?: 'ArticleFields__status_Delete';
  permission: Scalars['Boolean'];
};

export type ArticleFields__Status_Read = {
  __typename?: 'ArticleFields__status_Read';
  permission: Scalars['Boolean'];
};

export type ArticleFields__Status_Update = {
  __typename?: 'ArticleFields__status_Update';
  permission: Scalars['Boolean'];
};

export type ArticleFields_Blocks = {
  __typename?: 'ArticleFields_blocks';
  create?: Maybe<ArticleFields_Blocks_Create>;
  delete?: Maybe<ArticleFields_Blocks_Delete>;
  read?: Maybe<ArticleFields_Blocks_Read>;
  update?: Maybe<ArticleFields_Blocks_Update>;
};

export type ArticleFields_Blocks_Create = {
  __typename?: 'ArticleFields_blocks_Create';
  permission: Scalars['Boolean'];
};

export type ArticleFields_Blocks_Delete = {
  __typename?: 'ArticleFields_blocks_Delete';
  permission: Scalars['Boolean'];
};

export type ArticleFields_Blocks_Read = {
  __typename?: 'ArticleFields_blocks_Read';
  permission: Scalars['Boolean'];
};

export type ArticleFields_Blocks_Update = {
  __typename?: 'ArticleFields_blocks_Update';
  permission: Scalars['Boolean'];
};

export type ArticleFields_CreatedAt = {
  __typename?: 'ArticleFields_createdAt';
  create?: Maybe<ArticleFields_CreatedAt_Create>;
  delete?: Maybe<ArticleFields_CreatedAt_Delete>;
  read?: Maybe<ArticleFields_CreatedAt_Read>;
  update?: Maybe<ArticleFields_CreatedAt_Update>;
};

export type ArticleFields_CreatedAt_Create = {
  __typename?: 'ArticleFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type ArticleFields_CreatedAt_Delete = {
  __typename?: 'ArticleFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type ArticleFields_CreatedAt_Read = {
  __typename?: 'ArticleFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type ArticleFields_CreatedAt_Update = {
  __typename?: 'ArticleFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type ArticleFields_Description = {
  __typename?: 'ArticleFields_description';
  create?: Maybe<ArticleFields_Description_Create>;
  delete?: Maybe<ArticleFields_Description_Delete>;
  read?: Maybe<ArticleFields_Description_Read>;
  update?: Maybe<ArticleFields_Description_Update>;
};

export type ArticleFields_Description_Create = {
  __typename?: 'ArticleFields_description_Create';
  permission: Scalars['Boolean'];
};

export type ArticleFields_Description_Delete = {
  __typename?: 'ArticleFields_description_Delete';
  permission: Scalars['Boolean'];
};

export type ArticleFields_Description_Read = {
  __typename?: 'ArticleFields_description_Read';
  permission: Scalars['Boolean'];
};

export type ArticleFields_Description_Update = {
  __typename?: 'ArticleFields_description_Update';
  permission: Scalars['Boolean'];
};

export type ArticleFields_PublishedAt = {
  __typename?: 'ArticleFields_publishedAt';
  create?: Maybe<ArticleFields_PublishedAt_Create>;
  delete?: Maybe<ArticleFields_PublishedAt_Delete>;
  read?: Maybe<ArticleFields_PublishedAt_Read>;
  update?: Maybe<ArticleFields_PublishedAt_Update>;
};

export type ArticleFields_PublishedAt_Create = {
  __typename?: 'ArticleFields_publishedAt_Create';
  permission: Scalars['Boolean'];
};

export type ArticleFields_PublishedAt_Delete = {
  __typename?: 'ArticleFields_publishedAt_Delete';
  permission: Scalars['Boolean'];
};

export type ArticleFields_PublishedAt_Read = {
  __typename?: 'ArticleFields_publishedAt_Read';
  permission: Scalars['Boolean'];
};

export type ArticleFields_PublishedAt_Update = {
  __typename?: 'ArticleFields_publishedAt_Update';
  permission: Scalars['Boolean'];
};

export type ArticleFields_Slug = {
  __typename?: 'ArticleFields_slug';
  create?: Maybe<ArticleFields_Slug_Create>;
  delete?: Maybe<ArticleFields_Slug_Delete>;
  read?: Maybe<ArticleFields_Slug_Read>;
  update?: Maybe<ArticleFields_Slug_Update>;
};

export type ArticleFields_Slug_Create = {
  __typename?: 'ArticleFields_slug_Create';
  permission: Scalars['Boolean'];
};

export type ArticleFields_Slug_Delete = {
  __typename?: 'ArticleFields_slug_Delete';
  permission: Scalars['Boolean'];
};

export type ArticleFields_Slug_Read = {
  __typename?: 'ArticleFields_slug_Read';
  permission: Scalars['Boolean'];
};

export type ArticleFields_Slug_Update = {
  __typename?: 'ArticleFields_slug_Update';
  permission: Scalars['Boolean'];
};

export type ArticleFields_Title = {
  __typename?: 'ArticleFields_title';
  create?: Maybe<ArticleFields_Title_Create>;
  delete?: Maybe<ArticleFields_Title_Delete>;
  read?: Maybe<ArticleFields_Title_Read>;
  update?: Maybe<ArticleFields_Title_Update>;
};

export type ArticleFields_Title_Create = {
  __typename?: 'ArticleFields_title_Create';
  permission: Scalars['Boolean'];
};

export type ArticleFields_Title_Delete = {
  __typename?: 'ArticleFields_title_Delete';
  permission: Scalars['Boolean'];
};

export type ArticleFields_Title_Read = {
  __typename?: 'ArticleFields_title_Read';
  permission: Scalars['Boolean'];
};

export type ArticleFields_Title_Update = {
  __typename?: 'ArticleFields_title_Update';
  permission: Scalars['Boolean'];
};

export type ArticleFields_UpdatedAt = {
  __typename?: 'ArticleFields_updatedAt';
  create?: Maybe<ArticleFields_UpdatedAt_Create>;
  delete?: Maybe<ArticleFields_UpdatedAt_Delete>;
  read?: Maybe<ArticleFields_UpdatedAt_Read>;
  update?: Maybe<ArticleFields_UpdatedAt_Update>;
};

export type ArticleFields_UpdatedAt_Create = {
  __typename?: 'ArticleFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type ArticleFields_UpdatedAt_Delete = {
  __typename?: 'ArticleFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type ArticleFields_UpdatedAt_Read = {
  __typename?: 'ArticleFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type ArticleFields_UpdatedAt_Update = {
  __typename?: 'ArticleFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type ArticleReadAccess = {
  __typename?: 'ArticleReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ArticleReadDocAccess = {
  __typename?: 'ArticleReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ArticleReadVersionsAccess = {
  __typename?: 'ArticleReadVersionsAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ArticleReadVersionsDocAccess = {
  __typename?: 'ArticleReadVersionsDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ArticleScroller = {
  __typename?: 'ArticleScroller';
  article?: Maybe<Array<Article>>;
  blockName?: Maybe<Scalars['String']>;
  blockType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};


export type ArticleScrollerArticleArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
};

export type ArticleUpdateAccess = {
  __typename?: 'ArticleUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ArticleUpdateDocAccess = {
  __typename?: 'ArticleUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export enum ArticleUpdate__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type ArticleVersion = {
  __typename?: 'ArticleVersion';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  latest?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Article>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  version?: Maybe<ArticleVersion_Version>;
};


export type ArticleVersionParentArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
};

export type ArticleVersion_Version = {
  __typename?: 'ArticleVersion_Version';
  _status?: Maybe<ArticleVersion_Version__Status>;
  createdAt?: Maybe<Scalars['DateTime']>;
  header?: Maybe<ArticleVersion_Version_Header>;
  layout?: Maybe<ArticleVersion_Version_Layout>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ArticleVersion_Version_Header = {
  __typename?: 'ArticleVersion_Version_Header';
  description?: Maybe<Scalars['JSON']>;
};


export type ArticleVersion_Version_HeaderDescriptionArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};

export type ArticleVersion_Version_Layout = {
  __typename?: 'ArticleVersion_Version_Layout';
  blocks?: Maybe<Array<ArticleVersion_Version_Layout_Blocks>>;
};

export type ArticleVersion_Version_Layout_Blocks = Content | Image;

export enum ArticleVersion_Version__Status {
  Draft = 'draft',
  Published = 'published'
}

export type Article_Header = {
  __typename?: 'Article_Header';
  description?: Maybe<Scalars['JSON']>;
};


export type Article_HeaderDescriptionArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};

export type Article_Layout = {
  __typename?: 'Article_Layout';
  blocks?: Maybe<Array<Article_Layout_Blocks>>;
};

export type Article_Layout_Blocks = Content | Image;

export enum Article__Status {
  Draft = 'draft',
  Published = 'published'
}

export enum Article__Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export enum Article__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type Article__Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<Article__Status_Input>>>;
  equals?: InputMaybe<Article__Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Article__Status_Input>>>;
  not_equals?: InputMaybe<Article__Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Article__Status_Input>>>;
};

export type Article_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Article_Header__Description_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
};

export type Article_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Article_PublishedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Article_Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Article_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Article_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Article_Where = {
  AND?: InputMaybe<Array<InputMaybe<Article_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Article_Where_Or>>>;
  _status?: InputMaybe<Article__Status_Operator>;
  createdAt?: InputMaybe<Article_CreatedAt_Operator>;
  header__description?: InputMaybe<Article_Header__Description_Operator>;
  id?: InputMaybe<Article_Id_Operator>;
  publishedAt?: InputMaybe<Article_PublishedAt_Operator>;
  slug?: InputMaybe<Article_Slug_Operator>;
  title?: InputMaybe<Article_Title_Operator>;
  updatedAt?: InputMaybe<Article_UpdatedAt_Operator>;
};

export type Article_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Article_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Article_Where_Or>>>;
  _status?: InputMaybe<Article__Status_Operator>;
  createdAt?: InputMaybe<Article_CreatedAt_Operator>;
  header__description?: InputMaybe<Article_Header__Description_Operator>;
  id?: InputMaybe<Article_Id_Operator>;
  publishedAt?: InputMaybe<Article_PublishedAt_Operator>;
  slug?: InputMaybe<Article_Slug_Operator>;
  title?: InputMaybe<Article_Title_Operator>;
  updatedAt?: InputMaybe<Article_UpdatedAt_Operator>;
};

export type Article_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Article_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Article_Where_Or>>>;
  _status?: InputMaybe<Article__Status_Operator>;
  createdAt?: InputMaybe<Article_CreatedAt_Operator>;
  header__description?: InputMaybe<Article_Header__Description_Operator>;
  id?: InputMaybe<Article_Id_Operator>;
  publishedAt?: InputMaybe<Article_PublishedAt_Operator>;
  slug?: InputMaybe<Article_Slug_Operator>;
  title?: InputMaybe<Article_Title_Operator>;
  updatedAt?: InputMaybe<Article_UpdatedAt_Operator>;
};

export type Articles = {
  __typename?: 'Articles';
  docs?: Maybe<Array<Maybe<Article>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type Buttons = {
  __typename?: 'Buttons';
  blockName?: Maybe<Scalars['String']>;
  blockType?: Maybe<Scalars['String']>;
  buttons?: Maybe<Array<Buttons_Buttons>>;
  id?: Maybe<Scalars['String']>;
};

export type Buttons_Buttons = {
  __typename?: 'Buttons_Buttons';
  buttonType?: Maybe<Buttons_Buttons_ButtonType>;
  id?: Maybe<Scalars['String']>;
  link?: Maybe<Link>;
};

export enum Buttons_Buttons_ButtonType {
  Primary = 'primary',
  Secondary = 'secondary'
}

export type CardList = {
  __typename?: 'CardList';
  blockName?: Maybe<Scalars['String']>;
  blockType?: Maybe<Scalars['String']>;
  cards?: Maybe<Array<CardList_Cards>>;
  id?: Maybe<Scalars['String']>;
};

export type CardList_Cards = {
  __typename?: 'CardList_Cards';
  content?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
};


export type CardList_CardsContentArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};

export type Columns = {
  __typename?: 'Columns';
  blockName?: Maybe<Scalars['String']>;
  blockType?: Maybe<Scalars['String']>;
  columns?: Maybe<Array<Columns_Columns>>;
  id?: Maybe<Scalars['String']>;
};

export type Columns_Columns = {
  __typename?: 'Columns_Columns';
  block?: Maybe<Array<Columns_Columns_Block>>;
  columnWidth?: Maybe<Columns_Columns_ColumnWidth>;
  id?: Maybe<Scalars['String']>;
};

export type Columns_Columns_Block = Content;

export enum Columns_Columns_ColumnWidth {
  Full = 'full',
  Half = 'half',
  Third = 'third'
}

export type Content = {
  __typename?: 'Content';
  blockName?: Maybe<Scalars['String']>;
  blockType?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
};


export type ContentContentArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};

export type IconsRow = {
  __typename?: 'IconsRow';
  blockName?: Maybe<Scalars['String']>;
  blockType?: Maybe<Scalars['String']>;
  icons?: Maybe<Array<IconsRow_Icons>>;
  id?: Maybe<Scalars['String']>;
};

export type IconsRow_Icons = {
  __typename?: 'IconsRow_Icons';
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type Image = {
  __typename?: 'Image';
  blockName?: Maybe<Scalars['String']>;
  blockType?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
  image: Media;
};


export type ImageCaptionArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};


export type ImageImageArgs = {
  where?: InputMaybe<Image_Image_Where>;
};

export type Image_Image_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Image_Image_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Image_Image_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Image_Image_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Image_Image_FocalX_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Image_Image_FocalY_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Image_Image_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Image_Image_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Image_Image_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Image_Image_Sizes__Card__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Image_Image_Sizes__Card__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Image_Image_Sizes__Card__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Image_Image_Sizes__Card__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Image_Image_Sizes__Card__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Image_Image_Sizes__Card__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Image_Image_Sizes__Feature__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Image_Image_Sizes__Feature__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Image_Image_Sizes__Feature__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Image_Image_Sizes__Feature__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Image_Image_Sizes__Feature__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Image_Image_Sizes__Feature__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Image_Image_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Image_Image_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Image_Image_Where = {
  AND?: InputMaybe<Array<InputMaybe<Image_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Image_Image_Where_Or>>>;
  alt?: InputMaybe<Image_Image_Alt_Operator>;
  createdAt?: InputMaybe<Image_Image_CreatedAt_Operator>;
  filename?: InputMaybe<Image_Image_Filename_Operator>;
  filesize?: InputMaybe<Image_Image_Filesize_Operator>;
  focalX?: InputMaybe<Image_Image_FocalX_Operator>;
  focalY?: InputMaybe<Image_Image_FocalY_Operator>;
  height?: InputMaybe<Image_Image_Height_Operator>;
  id?: InputMaybe<Image_Image_Id_Operator>;
  mimeType?: InputMaybe<Image_Image_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Image_Image_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Image_Image_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Image_Image_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Image_Image_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Image_Image_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Image_Image_Sizes__Card__Width_Operator>;
  sizes__feature__filename?: InputMaybe<Image_Image_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<Image_Image_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<Image_Image_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<Image_Image_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<Image_Image_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<Image_Image_Sizes__Feature__Width_Operator>;
  updatedAt?: InputMaybe<Image_Image_UpdatedAt_Operator>;
  url?: InputMaybe<Image_Image_Url_Operator>;
  width?: InputMaybe<Image_Image_Width_Operator>;
};

export type Image_Image_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Image_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Image_Image_Where_Or>>>;
  alt?: InputMaybe<Image_Image_Alt_Operator>;
  createdAt?: InputMaybe<Image_Image_CreatedAt_Operator>;
  filename?: InputMaybe<Image_Image_Filename_Operator>;
  filesize?: InputMaybe<Image_Image_Filesize_Operator>;
  focalX?: InputMaybe<Image_Image_FocalX_Operator>;
  focalY?: InputMaybe<Image_Image_FocalY_Operator>;
  height?: InputMaybe<Image_Image_Height_Operator>;
  id?: InputMaybe<Image_Image_Id_Operator>;
  mimeType?: InputMaybe<Image_Image_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Image_Image_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Image_Image_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Image_Image_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Image_Image_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Image_Image_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Image_Image_Sizes__Card__Width_Operator>;
  sizes__feature__filename?: InputMaybe<Image_Image_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<Image_Image_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<Image_Image_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<Image_Image_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<Image_Image_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<Image_Image_Sizes__Feature__Width_Operator>;
  updatedAt?: InputMaybe<Image_Image_UpdatedAt_Operator>;
  url?: InputMaybe<Image_Image_Url_Operator>;
  width?: InputMaybe<Image_Image_Width_Operator>;
};

export type Image_Image_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Image_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Image_Image_Where_Or>>>;
  alt?: InputMaybe<Image_Image_Alt_Operator>;
  createdAt?: InputMaybe<Image_Image_CreatedAt_Operator>;
  filename?: InputMaybe<Image_Image_Filename_Operator>;
  filesize?: InputMaybe<Image_Image_Filesize_Operator>;
  focalX?: InputMaybe<Image_Image_FocalX_Operator>;
  focalY?: InputMaybe<Image_Image_FocalY_Operator>;
  height?: InputMaybe<Image_Image_Height_Operator>;
  id?: InputMaybe<Image_Image_Id_Operator>;
  mimeType?: InputMaybe<Image_Image_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Image_Image_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Image_Image_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Image_Image_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Image_Image_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Image_Image_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Image_Image_Sizes__Card__Width_Operator>;
  sizes__feature__filename?: InputMaybe<Image_Image_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<Image_Image_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<Image_Image_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<Image_Image_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<Image_Image_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<Image_Image_Sizes__Feature__Width_Operator>;
  updatedAt?: InputMaybe<Image_Image_UpdatedAt_Operator>;
  url?: InputMaybe<Image_Image_Url_Operator>;
  width?: InputMaybe<Image_Image_Width_Operator>;
};

export type Image_Image_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Link = {
  __typename?: 'Link';
  label?: Maybe<Scalars['String']>;
  reference?: Maybe<Page>;
  type?: Maybe<Link_Type>;
  url?: Maybe<Scalars['String']>;
};

export enum Link_Type {
  External = 'external',
  Internal = 'internal'
}

export type Media = {
  __typename?: 'Media';
  alt: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Float']>;
  focalX?: Maybe<Scalars['Float']>;
  focalY?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  sizes?: Maybe<Media_Sizes>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type MediaCreateAccess = {
  __typename?: 'MediaCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaCreateDocAccess = {
  __typename?: 'MediaCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaDeleteAccess = {
  __typename?: 'MediaDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaDeleteDocAccess = {
  __typename?: 'MediaDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaDocAccessFields = {
  __typename?: 'MediaDocAccessFields';
  alt?: Maybe<MediaDocAccessFields_Alt>;
  createdAt?: Maybe<MediaDocAccessFields_CreatedAt>;
  filename?: Maybe<MediaDocAccessFields_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Filesize>;
  focalX?: Maybe<MediaDocAccessFields_FocalX>;
  focalY?: Maybe<MediaDocAccessFields_FocalY>;
  height?: Maybe<MediaDocAccessFields_Height>;
  mimeType?: Maybe<MediaDocAccessFields_MimeType>;
  sizes?: Maybe<MediaDocAccessFields_Sizes>;
  updatedAt?: Maybe<MediaDocAccessFields_UpdatedAt>;
  url?: Maybe<MediaDocAccessFields_Url>;
  width?: Maybe<MediaDocAccessFields_Width>;
};

export type MediaDocAccessFields_Alt = {
  __typename?: 'MediaDocAccessFields_alt';
  create?: Maybe<MediaDocAccessFields_Alt_Create>;
  delete?: Maybe<MediaDocAccessFields_Alt_Delete>;
  read?: Maybe<MediaDocAccessFields_Alt_Read>;
  update?: Maybe<MediaDocAccessFields_Alt_Update>;
};

export type MediaDocAccessFields_Alt_Create = {
  __typename?: 'MediaDocAccessFields_alt_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Alt_Delete = {
  __typename?: 'MediaDocAccessFields_alt_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Alt_Read = {
  __typename?: 'MediaDocAccessFields_alt_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Alt_Update = {
  __typename?: 'MediaDocAccessFields_alt_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_CreatedAt = {
  __typename?: 'MediaDocAccessFields_createdAt';
  create?: Maybe<MediaDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_CreatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_CreatedAt_Update>;
};

export type MediaDocAccessFields_CreatedAt_Create = {
  __typename?: 'MediaDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_CreatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_CreatedAt_Read = {
  __typename?: 'MediaDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_CreatedAt_Update = {
  __typename?: 'MediaDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filename = {
  __typename?: 'MediaDocAccessFields_filename';
  create?: Maybe<MediaDocAccessFields_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Filename_Update>;
};

export type MediaDocAccessFields_Filename_Create = {
  __typename?: 'MediaDocAccessFields_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filename_Read = {
  __typename?: 'MediaDocAccessFields_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filename_Update = {
  __typename?: 'MediaDocAccessFields_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filesize = {
  __typename?: 'MediaDocAccessFields_filesize';
  create?: Maybe<MediaDocAccessFields_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Filesize_Update>;
};

export type MediaDocAccessFields_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_FocalX = {
  __typename?: 'MediaDocAccessFields_focalX';
  create?: Maybe<MediaDocAccessFields_FocalX_Create>;
  delete?: Maybe<MediaDocAccessFields_FocalX_Delete>;
  read?: Maybe<MediaDocAccessFields_FocalX_Read>;
  update?: Maybe<MediaDocAccessFields_FocalX_Update>;
};

export type MediaDocAccessFields_FocalX_Create = {
  __typename?: 'MediaDocAccessFields_focalX_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_FocalX_Delete = {
  __typename?: 'MediaDocAccessFields_focalX_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_FocalX_Read = {
  __typename?: 'MediaDocAccessFields_focalX_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_FocalX_Update = {
  __typename?: 'MediaDocAccessFields_focalX_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_FocalY = {
  __typename?: 'MediaDocAccessFields_focalY';
  create?: Maybe<MediaDocAccessFields_FocalY_Create>;
  delete?: Maybe<MediaDocAccessFields_FocalY_Delete>;
  read?: Maybe<MediaDocAccessFields_FocalY_Read>;
  update?: Maybe<MediaDocAccessFields_FocalY_Update>;
};

export type MediaDocAccessFields_FocalY_Create = {
  __typename?: 'MediaDocAccessFields_focalY_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_FocalY_Delete = {
  __typename?: 'MediaDocAccessFields_focalY_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_FocalY_Read = {
  __typename?: 'MediaDocAccessFields_focalY_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_FocalY_Update = {
  __typename?: 'MediaDocAccessFields_focalY_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Height = {
  __typename?: 'MediaDocAccessFields_height';
  create?: Maybe<MediaDocAccessFields_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Height_Update>;
};

export type MediaDocAccessFields_Height_Create = {
  __typename?: 'MediaDocAccessFields_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Height_Delete = {
  __typename?: 'MediaDocAccessFields_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Height_Read = {
  __typename?: 'MediaDocAccessFields_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Height_Update = {
  __typename?: 'MediaDocAccessFields_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_MimeType = {
  __typename?: 'MediaDocAccessFields_mimeType';
  create?: Maybe<MediaDocAccessFields_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_MimeType_Update>;
};

export type MediaDocAccessFields_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes = {
  __typename?: 'MediaDocAccessFields_sizes';
  create?: Maybe<MediaDocAccessFields_Sizes_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Update>;
};

export type MediaDocAccessFields_Sizes_Create = {
  __typename?: 'MediaDocAccessFields_sizes_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_Fields';
  card?: Maybe<MediaDocAccessFields_Sizes_Card>;
  feature?: Maybe<MediaDocAccessFields_Sizes_Feature>;
};

export type MediaDocAccessFields_Sizes_Read = {
  __typename?: 'MediaDocAccessFields_sizes_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Update = {
  __typename?: 'MediaDocAccessFields_sizes_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card = {
  __typename?: 'MediaDocAccessFields_sizes_card';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Card_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_card_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Card_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Card_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Card_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Card_Width>;
};

export type MediaDocAccessFields_Sizes_Card_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Height = {
  __typename?: 'MediaDocAccessFields_sizes_card_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Url = {
  __typename?: 'MediaDocAccessFields_sizes_card_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Width = {
  __typename?: 'MediaDocAccessFields_sizes_card_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature = {
  __typename?: 'MediaDocAccessFields_sizes_feature';
  create?: Maybe<MediaDocAccessFields_Sizes_Feature_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Feature_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Feature_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Feature_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Create = {
  __typename?: 'MediaDocAccessFields_sizes_feature_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_feature_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Feature_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Feature_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Feature_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Feature_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Feature_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Feature_Width>;
};

export type MediaDocAccessFields_Sizes_Feature_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Feature_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Feature_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Feature_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Feature_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Feature_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Feature_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Height = {
  __typename?: 'MediaDocAccessFields_sizes_feature_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Feature_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Feature_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Feature_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_feature_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_feature_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Feature_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Feature_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Feature_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Feature_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_feature_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Url = {
  __typename?: 'MediaDocAccessFields_sizes_feature_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Feature_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Feature_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Feature_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_feature_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Width = {
  __typename?: 'MediaDocAccessFields_sizes_feature_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Feature_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Feature_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Feature_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_feature_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_UpdatedAt = {
  __typename?: 'MediaDocAccessFields_updatedAt';
  create?: Maybe<MediaDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_UpdatedAt_Update>;
};

export type MediaDocAccessFields_UpdatedAt_Create = {
  __typename?: 'MediaDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_UpdatedAt_Read = {
  __typename?: 'MediaDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_UpdatedAt_Update = {
  __typename?: 'MediaDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Url = {
  __typename?: 'MediaDocAccessFields_url';
  create?: Maybe<MediaDocAccessFields_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Url_Update>;
};

export type MediaDocAccessFields_Url_Create = {
  __typename?: 'MediaDocAccessFields_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Url_Delete = {
  __typename?: 'MediaDocAccessFields_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Url_Read = {
  __typename?: 'MediaDocAccessFields_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Url_Update = {
  __typename?: 'MediaDocAccessFields_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Width = {
  __typename?: 'MediaDocAccessFields_width';
  create?: Maybe<MediaDocAccessFields_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Width_Update>;
};

export type MediaDocAccessFields_Width_Create = {
  __typename?: 'MediaDocAccessFields_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Width_Delete = {
  __typename?: 'MediaDocAccessFields_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Width_Read = {
  __typename?: 'MediaDocAccessFields_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Width_Update = {
  __typename?: 'MediaDocAccessFields_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields = {
  __typename?: 'MediaFields';
  alt?: Maybe<MediaFields_Alt>;
  createdAt?: Maybe<MediaFields_CreatedAt>;
  filename?: Maybe<MediaFields_Filename>;
  filesize?: Maybe<MediaFields_Filesize>;
  focalX?: Maybe<MediaFields_FocalX>;
  focalY?: Maybe<MediaFields_FocalY>;
  height?: Maybe<MediaFields_Height>;
  mimeType?: Maybe<MediaFields_MimeType>;
  sizes?: Maybe<MediaFields_Sizes>;
  updatedAt?: Maybe<MediaFields_UpdatedAt>;
  url?: Maybe<MediaFields_Url>;
  width?: Maybe<MediaFields_Width>;
};

export type MediaFields_Alt = {
  __typename?: 'MediaFields_alt';
  create?: Maybe<MediaFields_Alt_Create>;
  delete?: Maybe<MediaFields_Alt_Delete>;
  read?: Maybe<MediaFields_Alt_Read>;
  update?: Maybe<MediaFields_Alt_Update>;
};

export type MediaFields_Alt_Create = {
  __typename?: 'MediaFields_alt_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Alt_Delete = {
  __typename?: 'MediaFields_alt_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Alt_Read = {
  __typename?: 'MediaFields_alt_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Alt_Update = {
  __typename?: 'MediaFields_alt_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_CreatedAt = {
  __typename?: 'MediaFields_createdAt';
  create?: Maybe<MediaFields_CreatedAt_Create>;
  delete?: Maybe<MediaFields_CreatedAt_Delete>;
  read?: Maybe<MediaFields_CreatedAt_Read>;
  update?: Maybe<MediaFields_CreatedAt_Update>;
};

export type MediaFields_CreatedAt_Create = {
  __typename?: 'MediaFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_CreatedAt_Delete = {
  __typename?: 'MediaFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_CreatedAt_Read = {
  __typename?: 'MediaFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_CreatedAt_Update = {
  __typename?: 'MediaFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filename = {
  __typename?: 'MediaFields_filename';
  create?: Maybe<MediaFields_Filename_Create>;
  delete?: Maybe<MediaFields_Filename_Delete>;
  read?: Maybe<MediaFields_Filename_Read>;
  update?: Maybe<MediaFields_Filename_Update>;
};

export type MediaFields_Filename_Create = {
  __typename?: 'MediaFields_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filename_Delete = {
  __typename?: 'MediaFields_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filename_Read = {
  __typename?: 'MediaFields_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filename_Update = {
  __typename?: 'MediaFields_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filesize = {
  __typename?: 'MediaFields_filesize';
  create?: Maybe<MediaFields_Filesize_Create>;
  delete?: Maybe<MediaFields_Filesize_Delete>;
  read?: Maybe<MediaFields_Filesize_Read>;
  update?: Maybe<MediaFields_Filesize_Update>;
};

export type MediaFields_Filesize_Create = {
  __typename?: 'MediaFields_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filesize_Delete = {
  __typename?: 'MediaFields_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filesize_Read = {
  __typename?: 'MediaFields_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filesize_Update = {
  __typename?: 'MediaFields_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_FocalX = {
  __typename?: 'MediaFields_focalX';
  create?: Maybe<MediaFields_FocalX_Create>;
  delete?: Maybe<MediaFields_FocalX_Delete>;
  read?: Maybe<MediaFields_FocalX_Read>;
  update?: Maybe<MediaFields_FocalX_Update>;
};

export type MediaFields_FocalX_Create = {
  __typename?: 'MediaFields_focalX_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_FocalX_Delete = {
  __typename?: 'MediaFields_focalX_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_FocalX_Read = {
  __typename?: 'MediaFields_focalX_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_FocalX_Update = {
  __typename?: 'MediaFields_focalX_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_FocalY = {
  __typename?: 'MediaFields_focalY';
  create?: Maybe<MediaFields_FocalY_Create>;
  delete?: Maybe<MediaFields_FocalY_Delete>;
  read?: Maybe<MediaFields_FocalY_Read>;
  update?: Maybe<MediaFields_FocalY_Update>;
};

export type MediaFields_FocalY_Create = {
  __typename?: 'MediaFields_focalY_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_FocalY_Delete = {
  __typename?: 'MediaFields_focalY_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_FocalY_Read = {
  __typename?: 'MediaFields_focalY_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_FocalY_Update = {
  __typename?: 'MediaFields_focalY_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Height = {
  __typename?: 'MediaFields_height';
  create?: Maybe<MediaFields_Height_Create>;
  delete?: Maybe<MediaFields_Height_Delete>;
  read?: Maybe<MediaFields_Height_Read>;
  update?: Maybe<MediaFields_Height_Update>;
};

export type MediaFields_Height_Create = {
  __typename?: 'MediaFields_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Height_Delete = {
  __typename?: 'MediaFields_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Height_Read = {
  __typename?: 'MediaFields_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Height_Update = {
  __typename?: 'MediaFields_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_MimeType = {
  __typename?: 'MediaFields_mimeType';
  create?: Maybe<MediaFields_MimeType_Create>;
  delete?: Maybe<MediaFields_MimeType_Delete>;
  read?: Maybe<MediaFields_MimeType_Read>;
  update?: Maybe<MediaFields_MimeType_Update>;
};

export type MediaFields_MimeType_Create = {
  __typename?: 'MediaFields_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_MimeType_Delete = {
  __typename?: 'MediaFields_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_MimeType_Read = {
  __typename?: 'MediaFields_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_MimeType_Update = {
  __typename?: 'MediaFields_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes = {
  __typename?: 'MediaFields_sizes';
  create?: Maybe<MediaFields_Sizes_Create>;
  delete?: Maybe<MediaFields_Sizes_Delete>;
  fields?: Maybe<MediaFields_Sizes_Fields>;
  read?: Maybe<MediaFields_Sizes_Read>;
  update?: Maybe<MediaFields_Sizes_Update>;
};

export type MediaFields_Sizes_Create = {
  __typename?: 'MediaFields_sizes_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Delete = {
  __typename?: 'MediaFields_sizes_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Fields = {
  __typename?: 'MediaFields_sizes_Fields';
  card?: Maybe<MediaFields_Sizes_Card>;
  feature?: Maybe<MediaFields_Sizes_Feature>;
};

export type MediaFields_Sizes_Read = {
  __typename?: 'MediaFields_sizes_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Update = {
  __typename?: 'MediaFields_sizes_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card = {
  __typename?: 'MediaFields_sizes_card';
  create?: Maybe<MediaFields_Sizes_Card_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Delete>;
  fields?: Maybe<MediaFields_Sizes_Card_Fields>;
  read?: Maybe<MediaFields_Sizes_Card_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Update>;
};

export type MediaFields_Sizes_Card_Create = {
  __typename?: 'MediaFields_sizes_card_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Delete = {
  __typename?: 'MediaFields_sizes_card_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Fields = {
  __typename?: 'MediaFields_sizes_card_Fields';
  filename?: Maybe<MediaFields_Sizes_Card_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Card_Filesize>;
  height?: Maybe<MediaFields_Sizes_Card_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Card_MimeType>;
  url?: Maybe<MediaFields_Sizes_Card_Url>;
  width?: Maybe<MediaFields_Sizes_Card_Width>;
};

export type MediaFields_Sizes_Card_Read = {
  __typename?: 'MediaFields_sizes_card_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Update = {
  __typename?: 'MediaFields_sizes_card_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Filename = {
  __typename?: 'MediaFields_sizes_card_filename';
  create?: Maybe<MediaFields_Sizes_Card_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Filename_Update>;
};

export type MediaFields_Sizes_Card_Filename_Create = {
  __typename?: 'MediaFields_sizes_card_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Filename_Delete = {
  __typename?: 'MediaFields_sizes_card_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Filename_Read = {
  __typename?: 'MediaFields_sizes_card_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Filename_Update = {
  __typename?: 'MediaFields_sizes_card_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Filesize = {
  __typename?: 'MediaFields_sizes_card_filesize';
  create?: Maybe<MediaFields_Sizes_Card_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Filesize_Update>;
};

export type MediaFields_Sizes_Card_Filesize_Create = {
  __typename?: 'MediaFields_sizes_card_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_card_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Filesize_Read = {
  __typename?: 'MediaFields_sizes_card_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Filesize_Update = {
  __typename?: 'MediaFields_sizes_card_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Height = {
  __typename?: 'MediaFields_sizes_card_height';
  create?: Maybe<MediaFields_Sizes_Card_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Height_Update>;
};

export type MediaFields_Sizes_Card_Height_Create = {
  __typename?: 'MediaFields_sizes_card_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Height_Delete = {
  __typename?: 'MediaFields_sizes_card_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Height_Read = {
  __typename?: 'MediaFields_sizes_card_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Height_Update = {
  __typename?: 'MediaFields_sizes_card_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_MimeType = {
  __typename?: 'MediaFields_sizes_card_mimeType';
  create?: Maybe<MediaFields_Sizes_Card_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Card_MimeType_Update>;
};

export type MediaFields_Sizes_Card_MimeType_Create = {
  __typename?: 'MediaFields_sizes_card_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_card_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_MimeType_Read = {
  __typename?: 'MediaFields_sizes_card_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_MimeType_Update = {
  __typename?: 'MediaFields_sizes_card_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Url = {
  __typename?: 'MediaFields_sizes_card_url';
  create?: Maybe<MediaFields_Sizes_Card_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Url_Update>;
};

export type MediaFields_Sizes_Card_Url_Create = {
  __typename?: 'MediaFields_sizes_card_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Url_Delete = {
  __typename?: 'MediaFields_sizes_card_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Url_Read = {
  __typename?: 'MediaFields_sizes_card_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Url_Update = {
  __typename?: 'MediaFields_sizes_card_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Width = {
  __typename?: 'MediaFields_sizes_card_width';
  create?: Maybe<MediaFields_Sizes_Card_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Width_Update>;
};

export type MediaFields_Sizes_Card_Width_Create = {
  __typename?: 'MediaFields_sizes_card_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Width_Delete = {
  __typename?: 'MediaFields_sizes_card_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Width_Read = {
  __typename?: 'MediaFields_sizes_card_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Width_Update = {
  __typename?: 'MediaFields_sizes_card_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature = {
  __typename?: 'MediaFields_sizes_feature';
  create?: Maybe<MediaFields_Sizes_Feature_Create>;
  delete?: Maybe<MediaFields_Sizes_Feature_Delete>;
  fields?: Maybe<MediaFields_Sizes_Feature_Fields>;
  read?: Maybe<MediaFields_Sizes_Feature_Read>;
  update?: Maybe<MediaFields_Sizes_Feature_Update>;
};

export type MediaFields_Sizes_Feature_Create = {
  __typename?: 'MediaFields_sizes_feature_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Delete = {
  __typename?: 'MediaFields_sizes_feature_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Fields = {
  __typename?: 'MediaFields_sizes_feature_Fields';
  filename?: Maybe<MediaFields_Sizes_Feature_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Feature_Filesize>;
  height?: Maybe<MediaFields_Sizes_Feature_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Feature_MimeType>;
  url?: Maybe<MediaFields_Sizes_Feature_Url>;
  width?: Maybe<MediaFields_Sizes_Feature_Width>;
};

export type MediaFields_Sizes_Feature_Read = {
  __typename?: 'MediaFields_sizes_feature_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Update = {
  __typename?: 'MediaFields_sizes_feature_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Filename = {
  __typename?: 'MediaFields_sizes_feature_filename';
  create?: Maybe<MediaFields_Sizes_Feature_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Feature_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Feature_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Feature_Filename_Update>;
};

export type MediaFields_Sizes_Feature_Filename_Create = {
  __typename?: 'MediaFields_sizes_feature_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Filename_Delete = {
  __typename?: 'MediaFields_sizes_feature_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Filename_Read = {
  __typename?: 'MediaFields_sizes_feature_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Filename_Update = {
  __typename?: 'MediaFields_sizes_feature_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Filesize = {
  __typename?: 'MediaFields_sizes_feature_filesize';
  create?: Maybe<MediaFields_Sizes_Feature_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Feature_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Feature_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Feature_Filesize_Update>;
};

export type MediaFields_Sizes_Feature_Filesize_Create = {
  __typename?: 'MediaFields_sizes_feature_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_feature_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Filesize_Read = {
  __typename?: 'MediaFields_sizes_feature_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Filesize_Update = {
  __typename?: 'MediaFields_sizes_feature_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Height = {
  __typename?: 'MediaFields_sizes_feature_height';
  create?: Maybe<MediaFields_Sizes_Feature_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Feature_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Feature_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Feature_Height_Update>;
};

export type MediaFields_Sizes_Feature_Height_Create = {
  __typename?: 'MediaFields_sizes_feature_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Height_Delete = {
  __typename?: 'MediaFields_sizes_feature_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Height_Read = {
  __typename?: 'MediaFields_sizes_feature_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Height_Update = {
  __typename?: 'MediaFields_sizes_feature_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_MimeType = {
  __typename?: 'MediaFields_sizes_feature_mimeType';
  create?: Maybe<MediaFields_Sizes_Feature_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Feature_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Feature_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Feature_MimeType_Update>;
};

export type MediaFields_Sizes_Feature_MimeType_Create = {
  __typename?: 'MediaFields_sizes_feature_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_feature_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_MimeType_Read = {
  __typename?: 'MediaFields_sizes_feature_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_MimeType_Update = {
  __typename?: 'MediaFields_sizes_feature_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Url = {
  __typename?: 'MediaFields_sizes_feature_url';
  create?: Maybe<MediaFields_Sizes_Feature_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Feature_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Feature_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Feature_Url_Update>;
};

export type MediaFields_Sizes_Feature_Url_Create = {
  __typename?: 'MediaFields_sizes_feature_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Url_Delete = {
  __typename?: 'MediaFields_sizes_feature_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Url_Read = {
  __typename?: 'MediaFields_sizes_feature_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Url_Update = {
  __typename?: 'MediaFields_sizes_feature_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Width = {
  __typename?: 'MediaFields_sizes_feature_width';
  create?: Maybe<MediaFields_Sizes_Feature_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Feature_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Feature_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Feature_Width_Update>;
};

export type MediaFields_Sizes_Feature_Width_Create = {
  __typename?: 'MediaFields_sizes_feature_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Width_Delete = {
  __typename?: 'MediaFields_sizes_feature_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Width_Read = {
  __typename?: 'MediaFields_sizes_feature_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Width_Update = {
  __typename?: 'MediaFields_sizes_feature_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_UpdatedAt = {
  __typename?: 'MediaFields_updatedAt';
  create?: Maybe<MediaFields_UpdatedAt_Create>;
  delete?: Maybe<MediaFields_UpdatedAt_Delete>;
  read?: Maybe<MediaFields_UpdatedAt_Read>;
  update?: Maybe<MediaFields_UpdatedAt_Update>;
};

export type MediaFields_UpdatedAt_Create = {
  __typename?: 'MediaFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_UpdatedAt_Delete = {
  __typename?: 'MediaFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_UpdatedAt_Read = {
  __typename?: 'MediaFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_UpdatedAt_Update = {
  __typename?: 'MediaFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Url = {
  __typename?: 'MediaFields_url';
  create?: Maybe<MediaFields_Url_Create>;
  delete?: Maybe<MediaFields_Url_Delete>;
  read?: Maybe<MediaFields_Url_Read>;
  update?: Maybe<MediaFields_Url_Update>;
};

export type MediaFields_Url_Create = {
  __typename?: 'MediaFields_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Url_Delete = {
  __typename?: 'MediaFields_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Url_Read = {
  __typename?: 'MediaFields_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Url_Update = {
  __typename?: 'MediaFields_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Width = {
  __typename?: 'MediaFields_width';
  create?: Maybe<MediaFields_Width_Create>;
  delete?: Maybe<MediaFields_Width_Delete>;
  read?: Maybe<MediaFields_Width_Read>;
  update?: Maybe<MediaFields_Width_Update>;
};

export type MediaFields_Width_Create = {
  __typename?: 'MediaFields_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Width_Delete = {
  __typename?: 'MediaFields_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Width_Read = {
  __typename?: 'MediaFields_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Width_Update = {
  __typename?: 'MediaFields_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaReadAccess = {
  __typename?: 'MediaReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaReadDocAccess = {
  __typename?: 'MediaReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaUpdateAccess = {
  __typename?: 'MediaUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaUpdateDocAccess = {
  __typename?: 'MediaUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type Media_Sizes = {
  __typename?: 'Media_Sizes';
  card?: Maybe<Media_Sizes_Card>;
  feature?: Maybe<Media_Sizes_Feature>;
};

export type Media_Sizes_Card = {
  __typename?: 'Media_Sizes_Card';
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type Media_Sizes_Feature = {
  __typename?: 'Media_Sizes_Feature';
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type Media_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Media_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_FocalX_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_FocalY_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Card__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Card__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__Card__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__Card__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Card__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Card__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__Feature__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Feature__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__Feature__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__Feature__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Feature__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Feature__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Media_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Where = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Media_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Media_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Media_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Media_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Media_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Media_Sizes__Card__Width_Operator>;
  sizes__feature__filename?: InputMaybe<Media_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<Media_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<Media_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<Media_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<Media_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<Media_Sizes__Feature__Width_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Media_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Media_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Media_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Media_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Media_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Media_Sizes__Card__Width_Operator>;
  sizes__feature__filename?: InputMaybe<Media_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<Media_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<Media_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<Media_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<Media_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<Media_Sizes__Feature__Width_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Media_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Media_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Media_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Media_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Media_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Media_Sizes__Card__Width_Operator>;
  sizes__feature__filename?: InputMaybe<Media_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<Media_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<Media_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<Media_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<Media_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<Media_Sizes__Feature__Width_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createArticle?: Maybe<Article>;
  createMedia?: Maybe<Media>;
  createPage?: Maybe<Page>;
  createPayloadPreference?: Maybe<PayloadPreference>;
  createUser?: Maybe<User>;
  deleteArticle?: Maybe<Article>;
  deleteMedia?: Maybe<Media>;
  deletePage?: Maybe<Page>;
  deletePayloadPreference?: Maybe<PayloadPreference>;
  deleteUser?: Maybe<User>;
  forgotPasswordUser: Scalars['Boolean'];
  loginUser?: Maybe<UserLoginResult>;
  logoutUser?: Maybe<Scalars['String']>;
  refreshTokenUser?: Maybe<UserRefreshedUser>;
  resetPasswordUser?: Maybe<UserResetPassword>;
  restoreVersionArticle?: Maybe<Article>;
  unlockUser: Scalars['Boolean'];
  updateArticle?: Maybe<Article>;
  updateMedia?: Maybe<Media>;
  updatePage?: Maybe<Page>;
  updatePayloadPreference?: Maybe<PayloadPreference>;
  updateUser?: Maybe<User>;
  verifyEmailUser?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateArticleArgs = {
  data: MutationArticleInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateMediaArgs = {
  data: MutationMediaInput;
};


export type MutationCreatePageArgs = {
  data: MutationPageInput;
};


export type MutationCreatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
};


export type MutationCreateUserArgs = {
  data: MutationUserInput;
};


export type MutationDeleteArticleArgs = {
  id: Scalars['String'];
};


export type MutationDeleteMediaArgs = {
  id: Scalars['String'];
};


export type MutationDeletePageArgs = {
  id: Scalars['String'];
};


export type MutationDeletePayloadPreferenceArgs = {
  id: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type MutationForgotPasswordUserArgs = {
  disableEmail?: InputMaybe<Scalars['Boolean']>;
  email: Scalars['String'];
  expiration?: InputMaybe<Scalars['Int']>;
};


export type MutationLoginUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


export type MutationResetPasswordUserArgs = {
  password?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};


export type MutationRestoreVersionArticleArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationUnlockUserArgs = {
  email: Scalars['String'];
};


export type MutationUpdateArticleArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationArticleUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdateMediaArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationMediaUpdateInput;
  id: Scalars['String'];
};


export type MutationUpdatePageArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationPageUpdateInput;
  id: Scalars['String'];
};


export type MutationUpdatePayloadPreferenceArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationPayloadPreferenceUpdateInput;
  id: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationUserUpdateInput;
  id: Scalars['String'];
};


export type MutationVerifyEmailUserArgs = {
  token?: InputMaybe<Scalars['String']>;
};

export type Page = {
  __typename?: 'Page';
  createdAt?: Maybe<Scalars['DateTime']>;
  header?: Maybe<Page_Header>;
  id?: Maybe<Scalars['String']>;
  layout?: Maybe<Page_Layout>;
  showSideNavigation?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PageCreateAccess = {
  __typename?: 'PageCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PageCreateDocAccess = {
  __typename?: 'PageCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PageDeleteAccess = {
  __typename?: 'PageDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PageDeleteDocAccess = {
  __typename?: 'PageDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PageDocAccessFields = {
  __typename?: 'PageDocAccessFields';
  blocks?: Maybe<PageDocAccessFields_Blocks>;
  createdAt?: Maybe<PageDocAccessFields_CreatedAt>;
  description?: Maybe<PageDocAccessFields_Description>;
  showSideNavigation?: Maybe<PageDocAccessFields_ShowSideNavigation>;
  slug?: Maybe<PageDocAccessFields_Slug>;
  title?: Maybe<PageDocAccessFields_Title>;
  updatedAt?: Maybe<PageDocAccessFields_UpdatedAt>;
};

export type PageDocAccessFields_Blocks = {
  __typename?: 'PageDocAccessFields_blocks';
  create?: Maybe<PageDocAccessFields_Blocks_Create>;
  delete?: Maybe<PageDocAccessFields_Blocks_Delete>;
  read?: Maybe<PageDocAccessFields_Blocks_Read>;
  update?: Maybe<PageDocAccessFields_Blocks_Update>;
};

export type PageDocAccessFields_Blocks_Create = {
  __typename?: 'PageDocAccessFields_blocks_Create';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Blocks_Delete = {
  __typename?: 'PageDocAccessFields_blocks_Delete';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Blocks_Read = {
  __typename?: 'PageDocAccessFields_blocks_Read';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Blocks_Update = {
  __typename?: 'PageDocAccessFields_blocks_Update';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_CreatedAt = {
  __typename?: 'PageDocAccessFields_createdAt';
  create?: Maybe<PageDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PageDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PageDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PageDocAccessFields_CreatedAt_Update>;
};

export type PageDocAccessFields_CreatedAt_Create = {
  __typename?: 'PageDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PageDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_CreatedAt_Read = {
  __typename?: 'PageDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_CreatedAt_Update = {
  __typename?: 'PageDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Description = {
  __typename?: 'PageDocAccessFields_description';
  create?: Maybe<PageDocAccessFields_Description_Create>;
  delete?: Maybe<PageDocAccessFields_Description_Delete>;
  read?: Maybe<PageDocAccessFields_Description_Read>;
  update?: Maybe<PageDocAccessFields_Description_Update>;
};

export type PageDocAccessFields_Description_Create = {
  __typename?: 'PageDocAccessFields_description_Create';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Description_Delete = {
  __typename?: 'PageDocAccessFields_description_Delete';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Description_Read = {
  __typename?: 'PageDocAccessFields_description_Read';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Description_Update = {
  __typename?: 'PageDocAccessFields_description_Update';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_ShowSideNavigation = {
  __typename?: 'PageDocAccessFields_showSideNavigation';
  create?: Maybe<PageDocAccessFields_ShowSideNavigation_Create>;
  delete?: Maybe<PageDocAccessFields_ShowSideNavigation_Delete>;
  read?: Maybe<PageDocAccessFields_ShowSideNavigation_Read>;
  update?: Maybe<PageDocAccessFields_ShowSideNavigation_Update>;
};

export type PageDocAccessFields_ShowSideNavigation_Create = {
  __typename?: 'PageDocAccessFields_showSideNavigation_Create';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_ShowSideNavigation_Delete = {
  __typename?: 'PageDocAccessFields_showSideNavigation_Delete';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_ShowSideNavigation_Read = {
  __typename?: 'PageDocAccessFields_showSideNavigation_Read';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_ShowSideNavigation_Update = {
  __typename?: 'PageDocAccessFields_showSideNavigation_Update';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Slug = {
  __typename?: 'PageDocAccessFields_slug';
  create?: Maybe<PageDocAccessFields_Slug_Create>;
  delete?: Maybe<PageDocAccessFields_Slug_Delete>;
  read?: Maybe<PageDocAccessFields_Slug_Read>;
  update?: Maybe<PageDocAccessFields_Slug_Update>;
};

export type PageDocAccessFields_Slug_Create = {
  __typename?: 'PageDocAccessFields_slug_Create';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Slug_Delete = {
  __typename?: 'PageDocAccessFields_slug_Delete';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Slug_Read = {
  __typename?: 'PageDocAccessFields_slug_Read';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Slug_Update = {
  __typename?: 'PageDocAccessFields_slug_Update';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Title = {
  __typename?: 'PageDocAccessFields_title';
  create?: Maybe<PageDocAccessFields_Title_Create>;
  delete?: Maybe<PageDocAccessFields_Title_Delete>;
  read?: Maybe<PageDocAccessFields_Title_Read>;
  update?: Maybe<PageDocAccessFields_Title_Update>;
};

export type PageDocAccessFields_Title_Create = {
  __typename?: 'PageDocAccessFields_title_Create';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Title_Delete = {
  __typename?: 'PageDocAccessFields_title_Delete';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Title_Read = {
  __typename?: 'PageDocAccessFields_title_Read';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Title_Update = {
  __typename?: 'PageDocAccessFields_title_Update';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_UpdatedAt = {
  __typename?: 'PageDocAccessFields_updatedAt';
  create?: Maybe<PageDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PageDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PageDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PageDocAccessFields_UpdatedAt_Update>;
};

export type PageDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PageDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PageDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PageDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PageDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type PageFields = {
  __typename?: 'PageFields';
  blocks?: Maybe<PageFields_Blocks>;
  createdAt?: Maybe<PageFields_CreatedAt>;
  description?: Maybe<PageFields_Description>;
  showSideNavigation?: Maybe<PageFields_ShowSideNavigation>;
  slug?: Maybe<PageFields_Slug>;
  title?: Maybe<PageFields_Title>;
  updatedAt?: Maybe<PageFields_UpdatedAt>;
};

export type PageFields_Blocks = {
  __typename?: 'PageFields_blocks';
  create?: Maybe<PageFields_Blocks_Create>;
  delete?: Maybe<PageFields_Blocks_Delete>;
  read?: Maybe<PageFields_Blocks_Read>;
  update?: Maybe<PageFields_Blocks_Update>;
};

export type PageFields_Blocks_Create = {
  __typename?: 'PageFields_blocks_Create';
  permission: Scalars['Boolean'];
};

export type PageFields_Blocks_Delete = {
  __typename?: 'PageFields_blocks_Delete';
  permission: Scalars['Boolean'];
};

export type PageFields_Blocks_Read = {
  __typename?: 'PageFields_blocks_Read';
  permission: Scalars['Boolean'];
};

export type PageFields_Blocks_Update = {
  __typename?: 'PageFields_blocks_Update';
  permission: Scalars['Boolean'];
};

export type PageFields_CreatedAt = {
  __typename?: 'PageFields_createdAt';
  create?: Maybe<PageFields_CreatedAt_Create>;
  delete?: Maybe<PageFields_CreatedAt_Delete>;
  read?: Maybe<PageFields_CreatedAt_Read>;
  update?: Maybe<PageFields_CreatedAt_Update>;
};

export type PageFields_CreatedAt_Create = {
  __typename?: 'PageFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type PageFields_CreatedAt_Delete = {
  __typename?: 'PageFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type PageFields_CreatedAt_Read = {
  __typename?: 'PageFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type PageFields_CreatedAt_Update = {
  __typename?: 'PageFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type PageFields_Description = {
  __typename?: 'PageFields_description';
  create?: Maybe<PageFields_Description_Create>;
  delete?: Maybe<PageFields_Description_Delete>;
  read?: Maybe<PageFields_Description_Read>;
  update?: Maybe<PageFields_Description_Update>;
};

export type PageFields_Description_Create = {
  __typename?: 'PageFields_description_Create';
  permission: Scalars['Boolean'];
};

export type PageFields_Description_Delete = {
  __typename?: 'PageFields_description_Delete';
  permission: Scalars['Boolean'];
};

export type PageFields_Description_Read = {
  __typename?: 'PageFields_description_Read';
  permission: Scalars['Boolean'];
};

export type PageFields_Description_Update = {
  __typename?: 'PageFields_description_Update';
  permission: Scalars['Boolean'];
};

export type PageFields_ShowSideNavigation = {
  __typename?: 'PageFields_showSideNavigation';
  create?: Maybe<PageFields_ShowSideNavigation_Create>;
  delete?: Maybe<PageFields_ShowSideNavigation_Delete>;
  read?: Maybe<PageFields_ShowSideNavigation_Read>;
  update?: Maybe<PageFields_ShowSideNavigation_Update>;
};

export type PageFields_ShowSideNavigation_Create = {
  __typename?: 'PageFields_showSideNavigation_Create';
  permission: Scalars['Boolean'];
};

export type PageFields_ShowSideNavigation_Delete = {
  __typename?: 'PageFields_showSideNavigation_Delete';
  permission: Scalars['Boolean'];
};

export type PageFields_ShowSideNavigation_Read = {
  __typename?: 'PageFields_showSideNavigation_Read';
  permission: Scalars['Boolean'];
};

export type PageFields_ShowSideNavigation_Update = {
  __typename?: 'PageFields_showSideNavigation_Update';
  permission: Scalars['Boolean'];
};

export type PageFields_Slug = {
  __typename?: 'PageFields_slug';
  create?: Maybe<PageFields_Slug_Create>;
  delete?: Maybe<PageFields_Slug_Delete>;
  read?: Maybe<PageFields_Slug_Read>;
  update?: Maybe<PageFields_Slug_Update>;
};

export type PageFields_Slug_Create = {
  __typename?: 'PageFields_slug_Create';
  permission: Scalars['Boolean'];
};

export type PageFields_Slug_Delete = {
  __typename?: 'PageFields_slug_Delete';
  permission: Scalars['Boolean'];
};

export type PageFields_Slug_Read = {
  __typename?: 'PageFields_slug_Read';
  permission: Scalars['Boolean'];
};

export type PageFields_Slug_Update = {
  __typename?: 'PageFields_slug_Update';
  permission: Scalars['Boolean'];
};

export type PageFields_Title = {
  __typename?: 'PageFields_title';
  create?: Maybe<PageFields_Title_Create>;
  delete?: Maybe<PageFields_Title_Delete>;
  read?: Maybe<PageFields_Title_Read>;
  update?: Maybe<PageFields_Title_Update>;
};

export type PageFields_Title_Create = {
  __typename?: 'PageFields_title_Create';
  permission: Scalars['Boolean'];
};

export type PageFields_Title_Delete = {
  __typename?: 'PageFields_title_Delete';
  permission: Scalars['Boolean'];
};

export type PageFields_Title_Read = {
  __typename?: 'PageFields_title_Read';
  permission: Scalars['Boolean'];
};

export type PageFields_Title_Update = {
  __typename?: 'PageFields_title_Update';
  permission: Scalars['Boolean'];
};

export type PageFields_UpdatedAt = {
  __typename?: 'PageFields_updatedAt';
  create?: Maybe<PageFields_UpdatedAt_Create>;
  delete?: Maybe<PageFields_UpdatedAt_Delete>;
  read?: Maybe<PageFields_UpdatedAt_Read>;
  update?: Maybe<PageFields_UpdatedAt_Update>;
};

export type PageFields_UpdatedAt_Create = {
  __typename?: 'PageFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type PageFields_UpdatedAt_Delete = {
  __typename?: 'PageFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type PageFields_UpdatedAt_Read = {
  __typename?: 'PageFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type PageFields_UpdatedAt_Update = {
  __typename?: 'PageFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type PageReadAccess = {
  __typename?: 'PageReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PageReadDocAccess = {
  __typename?: 'PageReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PageUpdateAccess = {
  __typename?: 'PageUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PageUpdateDocAccess = {
  __typename?: 'PageUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type Page_Header = {
  __typename?: 'Page_Header';
  description: Scalars['JSON'];
};


export type Page_HeaderDescriptionArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};

export type Page_Layout = {
  __typename?: 'Page_Layout';
  blocks?: Maybe<Array<Page_Layout_Blocks>>;
};

export type Page_Layout_Blocks = ArticleScroller | Buttons | CardList | Columns | Content | IconsRow | Image;

export type Page_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Page_Header__Description_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
};

export type Page_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Page_ShowSideNavigation_Operator = {
  equals?: InputMaybe<Scalars['Boolean']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['Boolean']>;
};

export type Page_Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Page_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Page_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Page_Where = {
  AND?: InputMaybe<Array<InputMaybe<Page_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Page_Where_Or>>>;
  createdAt?: InputMaybe<Page_CreatedAt_Operator>;
  header__description?: InputMaybe<Page_Header__Description_Operator>;
  id?: InputMaybe<Page_Id_Operator>;
  showSideNavigation?: InputMaybe<Page_ShowSideNavigation_Operator>;
  slug?: InputMaybe<Page_Slug_Operator>;
  title?: InputMaybe<Page_Title_Operator>;
  updatedAt?: InputMaybe<Page_UpdatedAt_Operator>;
};

export type Page_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Page_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Page_Where_Or>>>;
  createdAt?: InputMaybe<Page_CreatedAt_Operator>;
  header__description?: InputMaybe<Page_Header__Description_Operator>;
  id?: InputMaybe<Page_Id_Operator>;
  showSideNavigation?: InputMaybe<Page_ShowSideNavigation_Operator>;
  slug?: InputMaybe<Page_Slug_Operator>;
  title?: InputMaybe<Page_Title_Operator>;
  updatedAt?: InputMaybe<Page_UpdatedAt_Operator>;
};

export type Page_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Page_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Page_Where_Or>>>;
  createdAt?: InputMaybe<Page_CreatedAt_Operator>;
  header__description?: InputMaybe<Page_Header__Description_Operator>;
  id?: InputMaybe<Page_Id_Operator>;
  showSideNavigation?: InputMaybe<Page_ShowSideNavigation_Operator>;
  slug?: InputMaybe<Page_Slug_Operator>;
  title?: InputMaybe<Page_Title_Operator>;
  updatedAt?: InputMaybe<Page_UpdatedAt_Operator>;
};

export type Pages = {
  __typename?: 'Pages';
  docs?: Maybe<Array<Maybe<Page>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type PayloadPreference = {
  __typename?: 'PayloadPreference';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: PayloadPreference_User_Relationship;
  value?: Maybe<Scalars['JSON']>;
};

export type PayloadPreferenceUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum PayloadPreferenceUpdate_UserRelationshipInputRelationTo {
  User = 'user'
}

export type PayloadPreference_User = User;

export type PayloadPreference_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreference_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum PayloadPreference_UserRelationshipInputRelationTo {
  User = 'user'
}

export enum PayloadPreference_User_RelationTo {
  User = 'user'
}

export type PayloadPreference_User_Relationship = {
  __typename?: 'PayloadPreference_User_Relationship';
  relationTo?: Maybe<PayloadPreference_User_RelationTo>;
  value?: Maybe<PayloadPreference_User>;
};

export type PayloadPreference_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type PayloadPreference_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PayloadPreference_Key_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PayloadPreference_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type PayloadPreference_User_Relation = {
  relationTo?: InputMaybe<PayloadPreference_User_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum PayloadPreference_User_Relation_RelationTo {
  User = 'user'
}

export type PayloadPreference_Value_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  intersects?: InputMaybe<Scalars['JSON']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  within?: InputMaybe<Scalars['JSON']>;
};

export type PayloadPreference_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreferences = {
  __typename?: 'PayloadPreferences';
  docs?: Maybe<Array<Maybe<PayloadPreference>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type PayloadPreferencesCreateAccess = {
  __typename?: 'PayloadPreferencesCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadPreferencesCreateDocAccess = {
  __typename?: 'PayloadPreferencesCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadPreferencesDeleteAccess = {
  __typename?: 'PayloadPreferencesDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadPreferencesDeleteDocAccess = {
  __typename?: 'PayloadPreferencesDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadPreferencesDocAccessFields = {
  __typename?: 'PayloadPreferencesDocAccessFields';
  createdAt?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesDocAccessFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesDocAccessFields_User>;
  value?: Maybe<PayloadPreferencesDocAccessFields_Value>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_Key = {
  __typename?: 'PayloadPreferencesDocAccessFields_key';
  create?: Maybe<PayloadPreferencesDocAccessFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Key_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Key_Update>;
};

export type PayloadPreferencesDocAccessFields_Key_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_Key_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_Key_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_Key_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_User = {
  __typename?: 'PayloadPreferencesDocAccessFields_user';
  create?: Maybe<PayloadPreferencesDocAccessFields_User_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_User_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_User_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_User_Update>;
};

export type PayloadPreferencesDocAccessFields_User_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_User_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_User_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_User_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_Value = {
  __typename?: 'PayloadPreferencesDocAccessFields_value';
  create?: Maybe<PayloadPreferencesDocAccessFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Value_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Value_Update>;
};

export type PayloadPreferencesDocAccessFields_Value_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_Value_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_Value_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_Value_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields = {
  __typename?: 'PayloadPreferencesFields';
  createdAt?: Maybe<PayloadPreferencesFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesFields_User>;
  value?: Maybe<PayloadPreferencesFields_Value>;
};

export type PayloadPreferencesFields_CreatedAt = {
  __typename?: 'PayloadPreferencesFields_createdAt';
  create?: Maybe<PayloadPreferencesFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_CreatedAt_Update>;
};

export type PayloadPreferencesFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_Key = {
  __typename?: 'PayloadPreferencesFields_key';
  create?: Maybe<PayloadPreferencesFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesFields_Key_Read>;
  update?: Maybe<PayloadPreferencesFields_Key_Update>;
};

export type PayloadPreferencesFields_Key_Create = {
  __typename?: 'PayloadPreferencesFields_key_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_Key_Delete = {
  __typename?: 'PayloadPreferencesFields_key_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_Key_Read = {
  __typename?: 'PayloadPreferencesFields_key_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_Key_Update = {
  __typename?: 'PayloadPreferencesFields_key_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesFields_updatedAt';
  create?: Maybe<PayloadPreferencesFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_UpdatedAt_Update>;
};

export type PayloadPreferencesFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_User = {
  __typename?: 'PayloadPreferencesFields_user';
  create?: Maybe<PayloadPreferencesFields_User_Create>;
  delete?: Maybe<PayloadPreferencesFields_User_Delete>;
  read?: Maybe<PayloadPreferencesFields_User_Read>;
  update?: Maybe<PayloadPreferencesFields_User_Update>;
};

export type PayloadPreferencesFields_User_Create = {
  __typename?: 'PayloadPreferencesFields_user_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_User_Delete = {
  __typename?: 'PayloadPreferencesFields_user_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_User_Read = {
  __typename?: 'PayloadPreferencesFields_user_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_User_Update = {
  __typename?: 'PayloadPreferencesFields_user_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_Value = {
  __typename?: 'PayloadPreferencesFields_value';
  create?: Maybe<PayloadPreferencesFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesFields_Value_Read>;
  update?: Maybe<PayloadPreferencesFields_Value_Update>;
};

export type PayloadPreferencesFields_Value_Create = {
  __typename?: 'PayloadPreferencesFields_value_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_Value_Delete = {
  __typename?: 'PayloadPreferencesFields_value_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_Value_Read = {
  __typename?: 'PayloadPreferencesFields_value_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_Value_Update = {
  __typename?: 'PayloadPreferencesFields_value_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesReadAccess = {
  __typename?: 'PayloadPreferencesReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadPreferencesReadDocAccess = {
  __typename?: 'PayloadPreferencesReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadPreferencesUpdateAccess = {
  __typename?: 'PayloadPreferencesUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadPreferencesUpdateDocAccess = {
  __typename?: 'PayloadPreferencesUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type Query = {
  __typename?: 'Query';
  Access?: Maybe<Access>;
  Article?: Maybe<Article>;
  Articles?: Maybe<Articles>;
  Media?: Maybe<Media>;
  Page?: Maybe<Page>;
  Pages?: Maybe<Pages>;
  PayloadPreference?: Maybe<PayloadPreference>;
  PayloadPreferences?: Maybe<PayloadPreferences>;
  User?: Maybe<User>;
  Users?: Maybe<Users>;
  allMedia?: Maybe<AllMedia>;
  countArticles?: Maybe<CountArticles>;
  countPages?: Maybe<CountPages>;
  countPayloadPreferences?: Maybe<CountPayloadPreferences>;
  countUsers?: Maybe<CountUsers>;
  countallMedia?: Maybe<CountallMedia>;
  docAccessArticle?: Maybe<ArticleDocAccess>;
  docAccessMedia?: Maybe<MediaDocAccess>;
  docAccessPage?: Maybe<PageDocAccess>;
  docAccessPayloadPreference?: Maybe<Payload_PreferencesDocAccess>;
  docAccessUser?: Maybe<UserDocAccess>;
  initializedUser?: Maybe<Scalars['Boolean']>;
  meUser?: Maybe<UserMe>;
  versionArticle?: Maybe<ArticleVersion>;
  versionsArticles?: Maybe<VersionsArticles>;
};


export type QueryArticleArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryArticlesArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Article_Where>;
};


export type QueryMediaArgs = {
  id: Scalars['String'];
};


export type QueryPageArgs = {
  id: Scalars['String'];
};


export type QueryPagesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Page_Where>;
};


export type QueryPayloadPreferenceArgs = {
  id: Scalars['String'];
};


export type QueryPayloadPreferencesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<User_Where>;
};


export type QueryAllMediaArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Media_Where>;
};


export type QueryCountArticlesArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<Article_Where>;
};


export type QueryCountPagesArgs = {
  where?: InputMaybe<Page_Where>;
};


export type QueryCountPayloadPreferencesArgs = {
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QueryCountUsersArgs = {
  where?: InputMaybe<User_Where>;
};


export type QueryCountallMediaArgs = {
  where?: InputMaybe<Media_Where>;
};


export type QueryDocAccessArticleArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessMediaArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessPageArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessPayloadPreferenceArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessUserArgs = {
  id: Scalars['String'];
};


export type QueryVersionArticleArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryVersionsArticlesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<VersionsArticle_Where>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['EmailAddress'];
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lockUntil?: Maybe<Scalars['DateTime']>;
  loginAttempts?: Maybe<Scalars['Float']>;
  password: Scalars['String'];
  resetPasswordExpiration?: Maybe<Scalars['DateTime']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  salt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateAccess = {
  __typename?: 'UserCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UserCreateDocAccess = {
  __typename?: 'UserCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UserDeleteAccess = {
  __typename?: 'UserDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UserDeleteDocAccess = {
  __typename?: 'UserDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UserDocAccessFields = {
  __typename?: 'UserDocAccessFields';
  createdAt?: Maybe<UserDocAccessFields_CreatedAt>;
  email?: Maybe<UserDocAccessFields_Email>;
  password?: Maybe<UserDocAccessFields_Password>;
  updatedAt?: Maybe<UserDocAccessFields_UpdatedAt>;
};

export type UserDocAccessFields_CreatedAt = {
  __typename?: 'UserDocAccessFields_createdAt';
  create?: Maybe<UserDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<UserDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<UserDocAccessFields_CreatedAt_Read>;
  update?: Maybe<UserDocAccessFields_CreatedAt_Update>;
};

export type UserDocAccessFields_CreatedAt_Create = {
  __typename?: 'UserDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type UserDocAccessFields_CreatedAt_Delete = {
  __typename?: 'UserDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type UserDocAccessFields_CreatedAt_Read = {
  __typename?: 'UserDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type UserDocAccessFields_CreatedAt_Update = {
  __typename?: 'UserDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type UserDocAccessFields_Email = {
  __typename?: 'UserDocAccessFields_email';
  create?: Maybe<UserDocAccessFields_Email_Create>;
  delete?: Maybe<UserDocAccessFields_Email_Delete>;
  read?: Maybe<UserDocAccessFields_Email_Read>;
  update?: Maybe<UserDocAccessFields_Email_Update>;
};

export type UserDocAccessFields_Email_Create = {
  __typename?: 'UserDocAccessFields_email_Create';
  permission: Scalars['Boolean'];
};

export type UserDocAccessFields_Email_Delete = {
  __typename?: 'UserDocAccessFields_email_Delete';
  permission: Scalars['Boolean'];
};

export type UserDocAccessFields_Email_Read = {
  __typename?: 'UserDocAccessFields_email_Read';
  permission: Scalars['Boolean'];
};

export type UserDocAccessFields_Email_Update = {
  __typename?: 'UserDocAccessFields_email_Update';
  permission: Scalars['Boolean'];
};

export type UserDocAccessFields_Password = {
  __typename?: 'UserDocAccessFields_password';
  create?: Maybe<UserDocAccessFields_Password_Create>;
  delete?: Maybe<UserDocAccessFields_Password_Delete>;
  read?: Maybe<UserDocAccessFields_Password_Read>;
  update?: Maybe<UserDocAccessFields_Password_Update>;
};

export type UserDocAccessFields_Password_Create = {
  __typename?: 'UserDocAccessFields_password_Create';
  permission: Scalars['Boolean'];
};

export type UserDocAccessFields_Password_Delete = {
  __typename?: 'UserDocAccessFields_password_Delete';
  permission: Scalars['Boolean'];
};

export type UserDocAccessFields_Password_Read = {
  __typename?: 'UserDocAccessFields_password_Read';
  permission: Scalars['Boolean'];
};

export type UserDocAccessFields_Password_Update = {
  __typename?: 'UserDocAccessFields_password_Update';
  permission: Scalars['Boolean'];
};

export type UserDocAccessFields_UpdatedAt = {
  __typename?: 'UserDocAccessFields_updatedAt';
  create?: Maybe<UserDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<UserDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<UserDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<UserDocAccessFields_UpdatedAt_Update>;
};

export type UserDocAccessFields_UpdatedAt_Create = {
  __typename?: 'UserDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type UserDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'UserDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type UserDocAccessFields_UpdatedAt_Read = {
  __typename?: 'UserDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type UserDocAccessFields_UpdatedAt_Update = {
  __typename?: 'UserDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type UserFields = {
  __typename?: 'UserFields';
  createdAt?: Maybe<UserFields_CreatedAt>;
  email?: Maybe<UserFields_Email>;
  password?: Maybe<UserFields_Password>;
  updatedAt?: Maybe<UserFields_UpdatedAt>;
};

export type UserFields_CreatedAt = {
  __typename?: 'UserFields_createdAt';
  create?: Maybe<UserFields_CreatedAt_Create>;
  delete?: Maybe<UserFields_CreatedAt_Delete>;
  read?: Maybe<UserFields_CreatedAt_Read>;
  update?: Maybe<UserFields_CreatedAt_Update>;
};

export type UserFields_CreatedAt_Create = {
  __typename?: 'UserFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type UserFields_CreatedAt_Delete = {
  __typename?: 'UserFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type UserFields_CreatedAt_Read = {
  __typename?: 'UserFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type UserFields_CreatedAt_Update = {
  __typename?: 'UserFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type UserFields_Email = {
  __typename?: 'UserFields_email';
  create?: Maybe<UserFields_Email_Create>;
  delete?: Maybe<UserFields_Email_Delete>;
  read?: Maybe<UserFields_Email_Read>;
  update?: Maybe<UserFields_Email_Update>;
};

export type UserFields_Email_Create = {
  __typename?: 'UserFields_email_Create';
  permission: Scalars['Boolean'];
};

export type UserFields_Email_Delete = {
  __typename?: 'UserFields_email_Delete';
  permission: Scalars['Boolean'];
};

export type UserFields_Email_Read = {
  __typename?: 'UserFields_email_Read';
  permission: Scalars['Boolean'];
};

export type UserFields_Email_Update = {
  __typename?: 'UserFields_email_Update';
  permission: Scalars['Boolean'];
};

export type UserFields_Password = {
  __typename?: 'UserFields_password';
  create?: Maybe<UserFields_Password_Create>;
  delete?: Maybe<UserFields_Password_Delete>;
  read?: Maybe<UserFields_Password_Read>;
  update?: Maybe<UserFields_Password_Update>;
};

export type UserFields_Password_Create = {
  __typename?: 'UserFields_password_Create';
  permission: Scalars['Boolean'];
};

export type UserFields_Password_Delete = {
  __typename?: 'UserFields_password_Delete';
  permission: Scalars['Boolean'];
};

export type UserFields_Password_Read = {
  __typename?: 'UserFields_password_Read';
  permission: Scalars['Boolean'];
};

export type UserFields_Password_Update = {
  __typename?: 'UserFields_password_Update';
  permission: Scalars['Boolean'];
};

export type UserFields_UpdatedAt = {
  __typename?: 'UserFields_updatedAt';
  create?: Maybe<UserFields_UpdatedAt_Create>;
  delete?: Maybe<UserFields_UpdatedAt_Delete>;
  read?: Maybe<UserFields_UpdatedAt_Read>;
  update?: Maybe<UserFields_UpdatedAt_Update>;
};

export type UserFields_UpdatedAt_Create = {
  __typename?: 'UserFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type UserFields_UpdatedAt_Delete = {
  __typename?: 'UserFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type UserFields_UpdatedAt_Read = {
  __typename?: 'UserFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type UserFields_UpdatedAt_Update = {
  __typename?: 'UserFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type UserReadAccess = {
  __typename?: 'UserReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UserReadDocAccess = {
  __typename?: 'UserReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UserUnlockAccess = {
  __typename?: 'UserUnlockAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UserUnlockDocAccess = {
  __typename?: 'UserUnlockDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UserUpdateAccess = {
  __typename?: 'UserUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UserUpdateDocAccess = {
  __typename?: 'UserUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type User_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type User_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']>;
  equals?: InputMaybe<Scalars['EmailAddress']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
  like?: InputMaybe<Scalars['EmailAddress']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
};

export type User_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type User_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type User_Where = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type Users = {
  __typename?: 'Users';
  docs?: Maybe<Array<Maybe<User>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type AllMedia = {
  __typename?: 'allMedia';
  docs?: Maybe<Array<Maybe<Media>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type ArticleAccess = {
  __typename?: 'articleAccess';
  create?: Maybe<ArticleCreateAccess>;
  delete?: Maybe<ArticleDeleteAccess>;
  fields?: Maybe<ArticleFields>;
  read?: Maybe<ArticleReadAccess>;
  readVersions?: Maybe<ArticleReadVersionsAccess>;
  update?: Maybe<ArticleUpdateAccess>;
};

export type ArticleDocAccess = {
  __typename?: 'articleDocAccess';
  create?: Maybe<ArticleCreateDocAccess>;
  delete?: Maybe<ArticleDeleteDocAccess>;
  fields?: Maybe<ArticleDocAccessFields>;
  read?: Maybe<ArticleReadDocAccess>;
  readVersions?: Maybe<ArticleReadVersionsDocAccess>;
  update?: Maybe<ArticleUpdateDocAccess>;
};

export type CountArticles = {
  __typename?: 'countArticles';
  totalDocs?: Maybe<Scalars['Int']>;
};

export type CountPages = {
  __typename?: 'countPages';
  totalDocs?: Maybe<Scalars['Int']>;
};

export type CountPayloadPreferences = {
  __typename?: 'countPayloadPreferences';
  totalDocs?: Maybe<Scalars['Int']>;
};

export type CountUsers = {
  __typename?: 'countUsers';
  totalDocs?: Maybe<Scalars['Int']>;
};

export type CountallMedia = {
  __typename?: 'countallMedia';
  totalDocs?: Maybe<Scalars['Int']>;
};

export type MediaAccess = {
  __typename?: 'mediaAccess';
  create?: Maybe<MediaCreateAccess>;
  delete?: Maybe<MediaDeleteAccess>;
  fields?: Maybe<MediaFields>;
  read?: Maybe<MediaReadAccess>;
  update?: Maybe<MediaUpdateAccess>;
};

export type MediaDocAccess = {
  __typename?: 'mediaDocAccess';
  create?: Maybe<MediaCreateDocAccess>;
  delete?: Maybe<MediaDeleteDocAccess>;
  fields?: Maybe<MediaDocAccessFields>;
  read?: Maybe<MediaReadDocAccess>;
  update?: Maybe<MediaUpdateDocAccess>;
};

export type MutationArticleInput = {
  _status?: InputMaybe<Article__Status_MutationInput>;
  createdAt?: InputMaybe<Scalars['String']>;
  header?: InputMaybe<MutationArticle_HeaderInput>;
  layout?: InputMaybe<MutationArticle_LayoutInput>;
  publishedAt?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationArticleUpdateInput = {
  _status?: InputMaybe<ArticleUpdate__Status_MutationInput>;
  createdAt?: InputMaybe<Scalars['String']>;
  header?: InputMaybe<MutationArticleUpdate_HeaderInput>;
  layout?: InputMaybe<MutationArticleUpdate_LayoutInput>;
  publishedAt?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationArticleUpdate_HeaderInput = {
  description: Scalars['JSON'];
};

export type MutationArticleUpdate_LayoutInput = {
  blocks?: InputMaybe<Scalars['JSON']>;
};

export type MutationArticle_HeaderInput = {
  description: Scalars['JSON'];
};

export type MutationArticle_LayoutInput = {
  blocks?: InputMaybe<Scalars['JSON']>;
};

export type MutationMediaInput = {
  alt: Scalars['String'];
  createdAt?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  focalX?: InputMaybe<Scalars['Float']>;
  focalY?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  sizes?: InputMaybe<MutationMedia_SizesInput>;
  updatedAt?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMediaUpdateInput = {
  alt?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  focalX?: InputMaybe<Scalars['Float']>;
  focalY?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  sizes?: InputMaybe<MutationMediaUpdate_SizesInput>;
  updatedAt?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMediaUpdate_SizesInput = {
  card?: InputMaybe<MutationMediaUpdate_Sizes_CardInput>;
  feature?: InputMaybe<MutationMediaUpdate_Sizes_FeatureInput>;
};

export type MutationMediaUpdate_Sizes_CardInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMediaUpdate_Sizes_FeatureInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMedia_SizesInput = {
  card?: InputMaybe<MutationMedia_Sizes_CardInput>;
  feature?: InputMaybe<MutationMedia_Sizes_FeatureInput>;
};

export type MutationMedia_Sizes_CardInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMedia_Sizes_FeatureInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationPageInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  header?: InputMaybe<MutationPage_HeaderInput>;
  layout?: InputMaybe<MutationPage_LayoutInput>;
  showSideNavigation?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationPageUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  header?: InputMaybe<MutationPageUpdate_HeaderInput>;
  layout?: InputMaybe<MutationPageUpdate_LayoutInput>;
  showSideNavigation?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationPageUpdate_HeaderInput = {
  description: Scalars['JSON'];
};

export type MutationPageUpdate_LayoutInput = {
  blocks?: InputMaybe<Scalars['JSON']>;
};

export type MutationPage_HeaderInput = {
  description: Scalars['JSON'];
};

export type MutationPage_LayoutInput = {
  blocks?: InputMaybe<Scalars['JSON']>;
};

export type MutationPayloadPreferenceInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<PayloadPreference_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']>;
};

export type MutationPayloadPreferenceUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']>;
};

export type MutationUserInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  hash?: InputMaybe<Scalars['String']>;
  lockUntil?: InputMaybe<Scalars['String']>;
  loginAttempts?: InputMaybe<Scalars['Float']>;
  password: Scalars['String'];
  resetPasswordExpiration?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  salt?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationUserUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  hash?: InputMaybe<Scalars['String']>;
  lockUntil?: InputMaybe<Scalars['String']>;
  loginAttempts?: InputMaybe<Scalars['Float']>;
  password?: InputMaybe<Scalars['String']>;
  resetPasswordExpiration?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  salt?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type PageAccess = {
  __typename?: 'pageAccess';
  create?: Maybe<PageCreateAccess>;
  delete?: Maybe<PageDeleteAccess>;
  fields?: Maybe<PageFields>;
  read?: Maybe<PageReadAccess>;
  update?: Maybe<PageUpdateAccess>;
};

export type PageDocAccess = {
  __typename?: 'pageDocAccess';
  create?: Maybe<PageCreateDocAccess>;
  delete?: Maybe<PageDeleteDocAccess>;
  fields?: Maybe<PageDocAccessFields>;
  read?: Maybe<PageReadDocAccess>;
  update?: Maybe<PageUpdateDocAccess>;
};

export type Payload_PreferencesAccess = {
  __typename?: 'payload_preferencesAccess';
  create?: Maybe<PayloadPreferencesCreateAccess>;
  delete?: Maybe<PayloadPreferencesDeleteAccess>;
  fields?: Maybe<PayloadPreferencesFields>;
  read?: Maybe<PayloadPreferencesReadAccess>;
  update?: Maybe<PayloadPreferencesUpdateAccess>;
};

export type Payload_PreferencesDocAccess = {
  __typename?: 'payload_preferencesDocAccess';
  create?: Maybe<PayloadPreferencesCreateDocAccess>;
  delete?: Maybe<PayloadPreferencesDeleteDocAccess>;
  fields?: Maybe<PayloadPreferencesDocAccessFields>;
  read?: Maybe<PayloadPreferencesReadDocAccess>;
  update?: Maybe<PayloadPreferencesUpdateDocAccess>;
};

export type UserAccess = {
  __typename?: 'userAccess';
  create?: Maybe<UserCreateAccess>;
  delete?: Maybe<UserDeleteAccess>;
  fields?: Maybe<UserFields>;
  read?: Maybe<UserReadAccess>;
  unlock?: Maybe<UserUnlockAccess>;
  update?: Maybe<UserUpdateAccess>;
};

export type UserDocAccess = {
  __typename?: 'userDocAccess';
  create?: Maybe<UserCreateDocAccess>;
  delete?: Maybe<UserDeleteDocAccess>;
  fields?: Maybe<UserDocAccessFields>;
  read?: Maybe<UserReadDocAccess>;
  unlock?: Maybe<UserUnlockDocAccess>;
  update?: Maybe<UserUpdateDocAccess>;
};

export type UserJwt = {
  __typename?: 'userJWT';
  collection: Scalars['String'];
  email: Scalars['EmailAddress'];
};

export type UserLoginResult = {
  __typename?: 'userLoginResult';
  exp?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type UserMe = {
  __typename?: 'userMe';
  collection?: Maybe<Scalars['String']>;
  exp?: Maybe<Scalars['Int']>;
  strategy?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type UserRefreshedUser = {
  __typename?: 'userRefreshedUser';
  exp?: Maybe<Scalars['Int']>;
  refreshedToken?: Maybe<Scalars['String']>;
  strategy?: Maybe<Scalars['String']>;
  user?: Maybe<UserJwt>;
};

export type UserResetPassword = {
  __typename?: 'userResetPassword';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type VersionsArticle_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type VersionsArticle_Header__Description_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
};

export type VersionsArticle_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VersionsArticle_Latest_Operator = {
  equals?: InputMaybe<Scalars['Boolean']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['Boolean']>;
};

export type VersionsArticle_Parent_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type VersionsArticle_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export enum VersionsArticle_Version___Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export type VersionsArticle_Version___Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsArticle_Version___Status_Input>>>;
  equals?: InputMaybe<VersionsArticle_Version___Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<VersionsArticle_Version___Status_Input>>>;
  not_equals?: InputMaybe<VersionsArticle_Version___Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<VersionsArticle_Version___Status_Input>>>;
};

export type VersionsArticle_Version__CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type VersionsArticle_Version__PublishedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type VersionsArticle_Version__Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VersionsArticle_Version__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VersionsArticle_Version__UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type VersionsArticle_Where = {
  AND?: InputMaybe<Array<InputMaybe<VersionsArticle_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsArticle_Where_Or>>>;
  createdAt?: InputMaybe<VersionsArticle_CreatedAt_Operator>;
  header__description?: InputMaybe<VersionsArticle_Header__Description_Operator>;
  id?: InputMaybe<VersionsArticle_Id_Operator>;
  latest?: InputMaybe<VersionsArticle_Latest_Operator>;
  parent?: InputMaybe<VersionsArticle_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsArticle_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsArticle_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsArticle_Version__CreatedAt_Operator>;
  version__publishedAt?: InputMaybe<VersionsArticle_Version__PublishedAt_Operator>;
  version__slug?: InputMaybe<VersionsArticle_Version__Slug_Operator>;
  version__title?: InputMaybe<VersionsArticle_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsArticle_Version__UpdatedAt_Operator>;
};

export type VersionsArticle_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<VersionsArticle_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsArticle_Where_Or>>>;
  createdAt?: InputMaybe<VersionsArticle_CreatedAt_Operator>;
  header__description?: InputMaybe<VersionsArticle_Header__Description_Operator>;
  id?: InputMaybe<VersionsArticle_Id_Operator>;
  latest?: InputMaybe<VersionsArticle_Latest_Operator>;
  parent?: InputMaybe<VersionsArticle_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsArticle_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsArticle_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsArticle_Version__CreatedAt_Operator>;
  version__publishedAt?: InputMaybe<VersionsArticle_Version__PublishedAt_Operator>;
  version__slug?: InputMaybe<VersionsArticle_Version__Slug_Operator>;
  version__title?: InputMaybe<VersionsArticle_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsArticle_Version__UpdatedAt_Operator>;
};

export type VersionsArticle_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<VersionsArticle_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsArticle_Where_Or>>>;
  createdAt?: InputMaybe<VersionsArticle_CreatedAt_Operator>;
  header__description?: InputMaybe<VersionsArticle_Header__Description_Operator>;
  id?: InputMaybe<VersionsArticle_Id_Operator>;
  latest?: InputMaybe<VersionsArticle_Latest_Operator>;
  parent?: InputMaybe<VersionsArticle_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsArticle_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsArticle_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsArticle_Version__CreatedAt_Operator>;
  version__publishedAt?: InputMaybe<VersionsArticle_Version__PublishedAt_Operator>;
  version__slug?: InputMaybe<VersionsArticle_Version__Slug_Operator>;
  version__title?: InputMaybe<VersionsArticle_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsArticle_Version__UpdatedAt_Operator>;
};

export type VersionsArticles = {
  __typename?: 'versionsArticles';
  docs?: Maybe<Array<Maybe<ArticleVersion>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export const LinkFieldFragmentFragmentDoc = gql`
    fragment LinkFieldFragment on Link {
  type
  reference {
    id
    slug
  }
  url
  label
}
    `;
export const ButtonsBlockFragmentFragmentDoc = gql`
    fragment ButtonsBlockFragment on Buttons {
  buttons {
    id
    buttonType
    link {
      ...LinkFieldFragment
    }
  }
  id
  blockName
  blockType
}
    ${LinkFieldFragmentFragmentDoc}`;
export const ContentBlockFragmentFragmentDoc = gql`
    fragment ContentBlockFragment on Content {
  content
  id
  blockName
  blockType
}
    `;
export const MediaFieldFragmentFragmentDoc = gql`
    fragment MediaFieldFragment on Media {
  id
  alt
  updatedAt
  createdAt
  url
  filename
  mimeType
  filesize
  width
  height
  focalX
  focalY
  sizes {
    card {
      url
      width
      height
      mimeType
      filesize
      filename
    }
    feature {
      url
      width
      height
      mimeType
      filesize
      filename
    }
  }
}
    `;
export const ImageBlockFragmentFragmentDoc = gql`
    fragment ImageBlockFragment on Image {
  image {
    ...MediaFieldFragment
  }
  caption
  id
  blockName
  blockType
}
    ${MediaFieldFragmentFragmentDoc}`;
export const ArticlesDocument = gql`
    query Articles($draft: Boolean, $where: Article_where, $limit: Int, $page: Int, $sort: String) {
  Articles(draft: $draft, where: $where, limit: $limit, page: $page, sort: $sort) {
    docs {
      id
      title
      slug
      header {
        description
      }
      publishedAt
      createdAt
      updatedAt
    }
    hasNextPage
    hasPrevPage
    limit
    nextPage
    offset
    page
    pagingCounter
    prevPage
    totalDocs
    totalPages
  }
}
    `;

/**
 * __useArticlesQuery__
 *
 * To run a query within a React component, call `useArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesQuery({
 *   variables: {
 *      draft: // value for 'draft'
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      page: // value for 'page'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useArticlesQuery(baseOptions?: Apollo.QueryHookOptions<ArticlesQuery, ArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArticlesQuery, ArticlesQueryVariables>(ArticlesDocument, options);
      }
export function useArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlesQuery, ArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArticlesQuery, ArticlesQueryVariables>(ArticlesDocument, options);
        }
export type ArticlesQueryHookResult = ReturnType<typeof useArticlesQuery>;
export type ArticlesLazyQueryHookResult = ReturnType<typeof useArticlesLazyQuery>;
export type ArticlesQueryResult = Apollo.QueryResult<ArticlesQuery, ArticlesQueryVariables>;
export const ArticleDocument = gql`
    query Article($draft: Boolean, $where: Article_where) {
  Articles(draft: $draft, where: $where, limit: 1, page: 1) {
    docs {
      id
      title
      slug
      header {
        description
      }
      publishedAt
      createdAt
      updatedAt
      layout {
        blocks {
          ...ContentBlockFragment
          ...ImageBlockFragment
        }
      }
    }
  }
}
    ${ContentBlockFragmentFragmentDoc}
${ImageBlockFragmentFragmentDoc}`;

/**
 * __useArticleQuery__
 *
 * To run a query within a React component, call `useArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleQuery({
 *   variables: {
 *      draft: // value for 'draft'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useArticleQuery(baseOptions?: Apollo.QueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
      }
export function useArticleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
        }
export type ArticleQueryHookResult = ReturnType<typeof useArticleQuery>;
export type ArticleLazyQueryHookResult = ReturnType<typeof useArticleLazyQuery>;
export type ArticleQueryResult = Apollo.QueryResult<ArticleQuery, ArticleQueryVariables>;