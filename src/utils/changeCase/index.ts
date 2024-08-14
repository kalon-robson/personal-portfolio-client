const splitIntoWords = (str?: string) => {
  if (!str) return [];

  const words = str.match(/[A-Z]+(?=_)|[A-Z]+(?![a-z])|[A-Za-z][a-z]+|[0-9]+/g);
  return words || [];
};

export const toSentenceCase = (str: string) => {
  const words = splitIntoWords(str);
  const sentence = words
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
  return sentence;
};

export const toCamelCase = (str: string) => {
  const words = splitIntoWords(str);
  const camel = words
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
  return camel;
};

export const toPascalCase = (str: string) => {
  const words = splitIntoWords(str);
  const pascal = words
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join('');
  return pascal;
};

export const toSnakeCase = (str: string) => {
  const words = splitIntoWords(str);
  const snake = words
    .map((word) => word.toLowerCase())
    .join('_');
  return snake;
};
