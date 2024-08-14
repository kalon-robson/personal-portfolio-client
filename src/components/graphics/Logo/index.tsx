import React from 'react';
import { colors } from '../../../styles';

interface Props {
  width?: number;
  color?: string;
  className?: string;
}

export const Logo: React.FC<Props> = ({
  width = 100,
  color = colors.light,
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 34 27"
    width={width}
    height={width * (27 / 34)}
    fill={color}
    className={className}
  >
    <path d="M4.112 26.288c-1.08 0-1.968-.312-2.664-.936A3.174 3.174 0 0 1 .44 22.976c0-.96.336-1.764 1.008-2.412.696-.648 1.584-.972 2.664-.972 1.056 0 1.92.324 2.592.972.696.648 1.044 1.452 1.044 2.412 0 .936-.348 1.728-1.044 2.376-.672.624-1.536.936-2.592.936ZM26.044 26l-8.496-11.16V26h-6.156V.728h6.156v11.088L25.972.728h7.236l-9.792 12.384L33.568 26h-7.524Z" />
  </svg>
);
