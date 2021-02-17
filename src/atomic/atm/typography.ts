import styled, { css } from 'styled-components'
import { TextProps, TitleProps } from './models'

const titleStyles = css<TitleProps>`
  color: ${({ theme: { colors }, highlighted }) =>
    highlighted ? colors.highlight : colors.title};
  font-weight: ${({ bolded }) => bolded && 'bold'};
  text-align: ${({ centered }) => centered && 'center'};
`
const minorTitleColor = css<TitleProps>`
  color: ${({ theme: { colors }, highlighted }) =>
    highlighted ? colors.highlight : colors.secondary};
`

export const H1 = styled.h1`
  ${titleStyles}
`
export const H2 = styled.h2`
  ${titleStyles}
`
export const H3 = styled.h3`
  ${titleStyles}
  ${minorTitleColor}
`
export const H4 = styled.h4`
  ${titleStyles}
  ${minorTitleColor}
`
export const Paragraph = styled.p<TextProps>`
  color: ${({ theme: { colors }, highlighted }) =>
    highlighted ? colors.text : colors.highlight};
  font-weight: ${({ bolded }) => bolded && 'bold'};
`
