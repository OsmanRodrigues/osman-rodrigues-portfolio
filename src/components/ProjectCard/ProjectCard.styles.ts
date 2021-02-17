import { Breakpoint } from '@/styles/constants'
import styled from 'styled-components'

interface WrapperProps {
  reverse?: boolean
}

const Wrapper = styled.div<WrapperProps>`
  display: inline-flex;
  height: auto;
  flex-direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};
  padding: ${({ theme }) => `0 ${theme.padding.small}`};

  @media (max-width: ${Breakpoint.Medium}) {
    flex-direction: column;
  }
`

export const ProjectCardStyled = {
  Wrapper
}
