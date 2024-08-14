import React, { ElementType, HtmlHTMLAttributes } from 'react';
import { appButtonStyles } from './styles';
import { htmlFontSize } from '../../styles';
import { constructClassName } from '../../utils/constructClassName';
import { Icon, IconType } from '../Icon';

type Props = HtmlHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
  icon?: IconType;
  iconSize?: number;
  iconFill?: string;
  loading?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
  textColor?: string;
  title?: string;
  type?: 'primary' | 'tertiary' | 'link';
  htmlElement?: ElementType;
}

export const AppButton: React.FC<Props> = ({
  children,
  className,
  disabled,
  htmlType = 'button',
  icon,
  iconFill,
  iconSize,
  loading,
  onClick,
  style,
  textColor,
  title,
  type = 'primary',
  htmlElement: Button = 'button',
  ...rest
}) => {
  const styles = appButtonStyles();

  return (
    <Button
      className={constructClassName([
        styles.button,
        styles[type],
        !children && styles.iconOnly,
        loading && styles.buttonLoading,
        className,
      ])}
      // eslint-disable-next-line react/button-has-type
      type={htmlType}
      onClick={() => {
        if (!loading) onClick?.();
      }}
      style={style}
      title={title}
      disabled={disabled}
      {...rest}
    >
      <span
        className={styles.contentSpan}
        style={{ color: textColor }}
      >
        {children}
        {
          !loading && icon && (
            <Icon
              icon={icon}
              className={
                constructClassName([
                  styles.icon,
                ])
              }
              fill={iconFill}
              size={iconSize || htmlFontSize}
            />
          )
        }
        {
          loading && (
            <span className={constructClassName([
              styles.loadingIcon,
            ])}
            >
              <Icon
                icon="circleNotchClassicLight"
                size={iconSize || htmlFontSize}
                fill={iconFill}
              />
            </span>
          )
        }
      </span>
    </Button>
  );
};
