import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { pageHeaderStyles } from './styles';
// eslint-disable-next-line camelcase
import { Article_Header, Page_Header } from '../../graphql/generated/schema';
import { AppButton, Icon, RichText } from '../../components';
import { Container } from '../../components/layouts';

interface Props {
  title: string;
  // eslint-disable-next-line camelcase
  header?: Page_Header | Article_Header | null;
  displayGoBackButton?: boolean;
}

export const PageHeader: React.FC<Props> = ({
  title,
  header,
  displayGoBackButton,
}) => {
  const [greeting, setGreeting] = useState<string>('');

  const router = useRouter();

  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();

    if (hour < 12) {
      setGreeting('Good Morning');
    } else if (hour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  const styles = pageHeaderStyles();

  return (
    <Container className={styles.container}>
      {
        displayGoBackButton && (
          <AppButton
            type="link"
            onClick={() => {
              router.push(router.asPath.split('/')?.slice(0, -1).join('/') || '/');
            }}
          >
            <Icon icon="arrowLeftSharpLight" />
            Go back
          </AppButton>
        )
      }
      <h1>
        {title.replace('{{GREETING}}', greeting).split('\\n').map((line, index) => (
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
    </Container>
  );
};
