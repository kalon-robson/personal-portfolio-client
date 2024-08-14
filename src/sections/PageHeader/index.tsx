import React from 'react';
import { pageHeaderStyles } from './styles';
// eslint-disable-next-line camelcase
import { Page_Header } from '../../graphql/generated/schema';
import { RichText } from '../../components';

interface Props {
  title: string;
  // eslint-disable-next-line camelcase
  header?: Page_Header | null;
}

export const PageHeader: React.FC<Props> = ({
  title,
  header,
}) => {
  const styles = pageHeaderStyles();

  return (
    <div className={styles.container}>
      <h1>
        {title.split('\\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </h1>
      <RichText
        className={styles.description}
        content={header?.description}
      />
    </div>
  );
};
