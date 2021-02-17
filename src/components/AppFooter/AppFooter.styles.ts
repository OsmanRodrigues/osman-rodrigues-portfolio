import { Breakpoint, ColumnGap } from '@/styles/constants'
import styled from 'styled-components'

const Wrapper = styled.footer`
  position: sticky;
  bottom: 0;
  max-width: 20%;
  height: 5rem;
  padding: ${({ theme: { padding } }) => `${padding.medium} ${padding.large}`};
  display: flex;
  justify-content: center;
  border-radius: ${({ theme }) => theme.border.radius};
  gap: ${ColumnGap.Medium};

  &:hover {
    background-color: ${({ theme }) => theme.colors.acessory};
    opacity: 0.6;
  }

  img {
    &:hover,
    &:active {
      opacity: 0.5;
    }
  }

  @media (max-width: ${Breakpoint.Medium}) {
    position: relative;
    min-width: 100%;
  }
`

export const AppFooterStyled = {
  Wrapper
}
