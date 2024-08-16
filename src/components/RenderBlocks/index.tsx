import React, { useEffect, useRef } from 'react';
import * as components from '../../blocks';
import { toPascalCase } from '../../utils/changeCase';
import { eventEmitter } from '../../lib/eventEmitter';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  blocks: any[];
  addIdLinks?: boolean;
  className?: string;
};

export const RenderBlocks: React.FC<Props> = ({ blocks, className, addIdLinks }) => {
  const blockRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      blockRefs.current.forEach((blockRef, i) => {
        if (blockRef) {
          const rect = blockRef.getBoundingClientRect();
          if (rect.top <= 100) {
            const { blockName } = blocks[i];
            if (!blockName) return;
            eventEmitter.emit('blockIntersect', toPascalCase(blockName).toLowerCase());
            window.history.replaceState(null, '', `#${toPascalCase(blockName).toLowerCase()}`);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [blocks]);

  return (
    <div className={className}>
      {blocks.map((block, i) => {
        const blockType = `${toPascalCase(`${block.blockType}`)}Component`;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const Block: React.FC<any> = components[blockType as keyof typeof components];

        if (Block) {
          return (
            <section
              key={i}
              ref={(ref) => { blockRefs.current[i] = ref; }}
              {...(addIdLinks && { id: toPascalCase(block.blockName).toLowerCase() })}
            >
              <Block {...block} />
            </section>
          );
        }

        return null;
      })}
    </div>
  );
};
