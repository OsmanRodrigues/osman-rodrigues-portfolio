import styled from 'styled-components'

interface WrapperProps {
  reverse?: boolean
}

const Wrapper = styled.div<WrapperProps>`
  display: inline-flex;
  flex-direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};
  height: 100%;
  padding: ${({ theme }) => `0 ${theme.padding.small}`};
`

export const ProjectCardStyled = {
  Wrapper
}
