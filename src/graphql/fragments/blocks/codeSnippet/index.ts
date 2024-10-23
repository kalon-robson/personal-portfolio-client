import gql from 'graphql-tag';

export const CODE_SNIPPET_BLOCK = gql`
  fragment CodeSnippetBlockFragment on CodeSnippet {
    code
    language
    id
    blockName
    blockType
  }
`;
