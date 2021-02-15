import styled, { css } from 'styled-components'
import { TextProps, TitleProps } from './models'

const titleStyles = css<TitleProps>`
  color: ${({ theme: { colors }, highlighted }) =>
    highlighted ? colors.highlight : colors.title};
  font-weight: ${({ bolded }) => bolded && 'bold'};
`

const H1 = styled.h1`
  ${titleStyles}
`
const H2 = styled.h2`
  ${titleStyles}
`
const H3 = styled.h3`
  ${titleStyles}
`
const H4 = styled.h4`
  ${titleStyles}
`
const Paragraph = styled.p<TextProps>`
  color: ${({ theme: { colors }, highlighted }) =>
    highlighted ? colors.text : colors.highlight};
  font-weight: ${({ bolded }) => bolded && 'bold'};
`

export const TypographyStyled = {
  H1,
  H2,
  H3,
  H4,
  Paragraph
}
