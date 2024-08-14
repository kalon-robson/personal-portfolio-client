import React from 'react';
import * as components from '../../blocks';
import { toPascalCase } from '../../utils/changeCase';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  blocks: any[];
  className?: string;
};

export const RenderBlocks: React.FC<Props> = ({ blocks, className }) => (
  <div className={className}>
    {blocks.map((block, i) => {
      // make blockType first character uppercase
      const blockType = `${toPascalCase(`${block.blockType}`)}Component`;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const Block: React.FC<any> = components[blockType as keyof typeof components];

      if (Block) {
        return (
          <section key={i}>
            <Block {...block} />
          </section>
        );
      }

      return null;
    })}
  </div>
);
