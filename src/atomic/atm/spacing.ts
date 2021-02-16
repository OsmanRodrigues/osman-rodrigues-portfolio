import { Breakpoint, PalleteColor } from '@/styles/constants'
import styled from 'styled-components'

interface VSeparatorProps {
  size?: 'small' | 'medium' | 'large'
}

export const HR = styled.hr`
  background-color: ${PalleteColor.Black};
  width: 24vw;
  height: 4px;

  @media (max-width: ${Breakpoint.Medium}) {
    width: 36vw;
  }
`
export const VSeparator = styled.div<VSeparatorProps>`
  display: block;
  padding: ${({ size, theme: { padding } }) =>
    size ? padding[size] : padding.medium};
`
