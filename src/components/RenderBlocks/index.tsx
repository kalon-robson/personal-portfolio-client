/* eslint-disable camelcase */
import React from 'react';
import * as components from '../../blocks';
import { Page_Layout } from '../../graphql/generated/schema';
import { toPascalCase } from '../../utils/changeCase';

type Props = {
  layout: Page_Layout[];
  className?: string;
};

export const RenderBlocks: React.FC<Props> = ({ layout, className }) => (
  <div className={className}>
    {layout.map((block, i) => {
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
