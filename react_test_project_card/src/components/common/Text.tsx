import type { CSSProperties } from 'react';
import styled from '@emotion/styled';

import { colors, type Colors } from '@/styles/colorPalette';
import { typographyMap, type TypographyVariants } from '@/styles/typography';

interface TextProps {
  typography?: TypographyVariants;
  color?: Colors
  display?: CSSProperties['display']
  textAlign?: CSSProperties['textAlign']
  fontweight?: CSSProperties['fontWeight']
  bold?:boolean
}

const Text = styled.span<TextProps>(
  ({ color='black', display, textAlign, fontWeight, bold }) => ({
    color: colors[color],
    display,
    textAlign,
    fontWeight: bold ? 'bold' : fontWeight,
  }),
  ({ typography = 'Headline' }) => typographyMap[typography],
)

export default Text;