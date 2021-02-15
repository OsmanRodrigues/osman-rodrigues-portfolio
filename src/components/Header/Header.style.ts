import { Breakpoint } from '@atomic/obj/constants'
import styled, { css } from 'styled-components'

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  max-height: 5rem;
  display: flex;
  justify-content: space-between;
  padding: ${({ theme: { padding } }) => `${padding.medium} ${padding.large}`};
`
// TODO: set to grid
const headerColStyle = css`
  width: 50%;
  height: 100%;
  display: flex;
`
const Branding = styled.div`
  ${headerColStyle}
  a {
    font-size: ${({ theme }) => theme.typography.large};
    font-weight: bold;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.highlight};
  }
`
const NavBar = styled.nav`
  ${headerColStyle}
  justify-content: flex-end;
  a {
    font-size: ${({ theme }) => theme.typography.medium};
    text-decoration: none;
    color: ${({ theme }) => theme.colors.link};
    padding: ${({ theme: { padding } }) =>
      `${padding.small} ${padding.medium}`};
    &:hover,
    &:active,
    &:focus {
      border-bottom: solid
        ${({ theme }) => `${theme.colors.primary} ${theme.border.thickness}`};
    }
    @media (max-width: ${Breakpoint.Medium}) {
      display: none;
    }
  }
`

export const HeaderStyled = {
  Wrapper,
  Branding,
  NavBar
}
