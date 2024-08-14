module.exports = {
  extends: [
    '@innovixx/eslint-config/configs/base',
    '@innovixx/eslint-config/configs/typescript',
    '@innovixx/eslint-config/configs/react',
  ],
  ignorePatterns: ['src/graphql/generated/schema.ts'],
};
