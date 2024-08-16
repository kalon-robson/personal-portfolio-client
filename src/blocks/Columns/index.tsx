import { Grid, Cell } from '@faceless-ui/css-grid';
import React from 'react';
import { columnsComponentStyles } from './styles';
import { Columns } from '../../graphql/generated/schema';
import { Container } from '../../components/layouts';
import { RenderBlocks } from '../../components/RenderBlocks';

const colStyles = {
  full: {
    cols: 12,
  },
  half: {
    cols: 6,
  },
  quarter: {
    cols: 3,

  },
  third: {
    cols: 4,
  },
  twoThirds: {
    cols: 8,
  },
};

export const ColumnsComponent: React.FC<Columns> = ({
  columns,
}) => {
  const styles = columnsComponentStyles();

  return (
    <Container className={styles.container}>
      <Grid>
        {
          columns?.map((column) => column.columnWidth && (
            <Cell
              key={column.id}
              {...colStyles[column.columnWidth]}
            >
              {
                column.blocks && (
                  <RenderBlocks
                    blocks={column.blocks}
                    noBottomMargin
                  />
                )
              }
            </Cell>
          ))
        }
      </Grid>
    </Container>
  );
};
