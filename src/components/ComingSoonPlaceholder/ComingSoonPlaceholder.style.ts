import { Breakpoint } from '@/styles/constants'
import styled from 'styled-components'

export const ComingSoonPlaceholderWrapperStyled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${Breakpoint.Medium}) {
    height: 50vh;
  }
`
