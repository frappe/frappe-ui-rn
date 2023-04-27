import { css } from '@emotion/native';
import tokens from '../../tokens';
import { fontStyles } from '../../../src/utils/typography';
import type { BadgeProps } from '.';

const sizeMap = {
  sm: css({
    padding: '1px 6px',
    fontSize: '12px',
  }),
  md: css({
    padding: '3px 6px',
    fontSize: '12px',
  }),
  lg: css({
    padding: '4.5px 8px',
    fontSize: '13px',
  }),
};

const variantMap = {
  solid: {
    default: css({
      backgroundColor: tokens.colors.gray[900],
      color: tokens.colors.white,
      border: '',
    }),
    blue: css({
      backgroundColor: tokens.colors.blue[500],
      color: tokens.colors.white,
      border: '',
    }),
    green: css({
      backgroundColor: tokens.colors.green[600],
      color: tokens.colors.white,
      border: '',
    }),
    red: css({
      backgroundColor: tokens.colors.red[600],
      color: tokens.colors.white,
      border: '',
    }),
    orange: css({
      backgroundColor: tokens.colors.amber[600],
      color: tokens.colors.white,
      border: '',
    }),
  },
  subtle: {
    default: css({
      backgroundColor: tokens.colors.gray[100],
      color: tokens.colors.gray[700],
      border: '',
    }),
    blue: css({
      backgroundColor: tokens.colors.blue[100],
      color: tokens.colors.blue[600],
      border: '',
    }),
    green: css({
      backgroundColor: tokens.colors.green[200],
      color: tokens.colors.green[800],
      border: '',
    }),
    red: css({
      backgroundColor: tokens.colors.red[100],
      color: tokens.colors.red[600],
      border: '',
    }),
    orange: css({
      backgroundColor: tokens.colors.amber[100],
      color: tokens.colors.amber[700],
      border: '',
    }),
  },
  outline: {
    default: css({
      backgroundColor: tokens.colors.white,
      color: tokens.colors.gray[700],
      border: `1px solid ${tokens.colors.gray[300]}`,
    }),
    blue: css({
      backgroundColor: tokens.colors.white,
      color: tokens.colors.blue[600],
      border: `1px solid ${tokens.colors.blue[300]}`,
    }),
    green: css({
      backgroundColor: tokens.colors.white,
      color: tokens.colors.green[800],
      border: `1px solid ${tokens.colors.green[300]}`,
    }),
    red: css({
      backgroundColor: tokens.colors.white,
      color: tokens.colors.red[600],
      border: `1px solid ${tokens.colors.red[300]}`,
    }),
    orange: css({
      backgroundColor: tokens.colors.white,
      color: tokens.colors.amber[700],
      border: `1px solid ${tokens.colors.amber[300]}`,
    }),
  },
  ghost: {
    default: css({
      backgroundColor: '',
      color: tokens.colors.gray[700],
      border: '',
    }),
    blue: css({
      backgroundColor: '',
      color: tokens.colors.blue[600],
      border: '',
    }),
    green: css({
      backgroundColor: '',
      color: tokens.colors.green[800],
      border: '',
    }),
    red: css({
      backgroundColor: '',
      color: tokens.colors.red[600],
      border: '',
    }),
    orange: css({
      backgroundColor: '',
      color: tokens.colors.amber[700],
      border: '',
    }),
  },
};

// -----------
// BASE STYLES
export const baseBadgeContainerStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
`;

export const baseBadgeTextStyles = css`
  ${fontStyles.regular}
  font-size: 12px;
`;
// -----------

type BadgeStyleOptions = {
  size: NonNullable<BadgeProps['size']>;
  theme: NonNullable<BadgeProps['theme']>;
  variant: NonNullable<BadgeProps['variant']>;
};

export function badgeContainerStyles({
  size,
  theme,
  variant,
}: BadgeStyleOptions) {
  return css`
    ${baseBadgeContainerStyles}
    padding: ${sizeMap[size].padding};
    background-color: ${variantMap[variant][theme].backgroundColor};
    border: ${variantMap[variant][theme].border};
  `;
}

export function badgeTextStyles({ size, theme, variant }: BadgeStyleOptions) {
  return css`
    ${baseBadgeTextStyles}
    color: ${variantMap[variant][theme].color};
    font-size: ${sizeMap[size].fontSize};
  `;
}
