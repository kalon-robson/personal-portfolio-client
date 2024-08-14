import React from 'react';
import { Buttons } from '../../graphql/generated/schema';
import { buttonsComponentStyles } from './styles';
import { AppButton, AppLink } from '../../components';
import { Container } from '../../components/layouts';

export const ButtonsComponent: React.FC<Buttons> = ({
  buttons,
}) => {
  const styles = buttonsComponentStyles();

  return (
    <Container className={styles.container}>
      {buttons?.map((button) => (
        <AppLink
          link={button.link}
        >
          <AppButton
            htmlElement="span"
            key={button.id}
          >
            {button.link?.label}
          </AppButton>
        </AppLink>
      ))}
    </Container>
  );
};
