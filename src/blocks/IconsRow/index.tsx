import React from 'react';
import { iconsRowComponentStyles } from './styles';
import { Container } from '../../components/layouts';
import { IconsRow } from '../../graphql/generated/schema';
import { Icon, IconType } from '../../components';
import { toSentenceCase } from '../../utils/changeCase';

export const IconsRowComponent: React.FC<IconsRow> = ({
  icons,
}) => {
  const styles = iconsRowComponentStyles();

  return (
    <Container className={styles.container}>
      <div className={styles.iconsRowContainer}>
        {icons?.map(({ icon }) => (
          <Icon
            icon={icon as IconType}
            size={50}
            fill="doNotFill"
            title={toSentenceCase(`${icon}`)}
            className={styles.icon}
          />
        ))}
      </div>
    </Container>
  );
};
