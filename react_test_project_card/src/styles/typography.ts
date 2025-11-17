import { css } from '@emotion/react';

export const typographyMap = {
  Headline: css`
    font-size: 54px;
    font-weight: 700;
    line-height: 40px;
  `,
  Title: css`
    font-size: 48px;
    font-weight: 600;
    line-height: 32px;
  `,
  SubTitle1: css`
    font-size: 40px;
    font-weight: 500;
    line-height: 28px;
  `,
  SubTitle2: css`
    font-size: 36px;
    font-weight: 500;
    line-height: 24px;
  `,
  Body1: css`
    font-size: 32px;
    font-weight: 400;
    line-height: 20px;
  `,
  Body2: css`
    font-size: 28px;
    font-weight: 400;
    line-height: 18px;
  `,
  Caption1: css`
    font-size: 24px;
    font-weight: 400;
    line-height: 16px;
  `,
  Caption2: css`
    font-size: 16px;
    font-weight: 400;
    line-height: 12px;
  `,
};


export type TypographyVariants = keyof typeof typographyMap;