import {
  Breakpoint,
  buttonRawStyle,
  overlayStyle,
  Transition
} from '@styles/constants'
import styled from 'styled-components'

export type CurrentLayer = 'button' | 'overlay'

interface BurgerMenuStyledProps {
  currentLayer: CurrentLayer
}

const Wrapper = styled.div`
  @media (min-width: ${Breakpoint.Medium}) {
    display: none;
  }
  display: flex;
`
// TODO: change display to visibility
// TODO: check inset property
const OpenButton = styled.button<BurgerMenuStyledProps>`
  ${buttonRawStyle};
  display: ${({ currentLayer }) =>
    currentLayer === 'button' ? 'inherit' : 'none'};
  align-items: center;
`
const CloseButton = styled.button`
  ${buttonRawStyle};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: inherit;
  font-weight: inherit;
  padding: ${({ theme }) => theme.padding.medium};
`
const Overlay = styled.div<BurgerMenuStyledProps>`
  ${overlayStyle}
  font-size: ${({ theme }) => theme.typography.large};
  background-color: ${({ theme }) => theme.colors.primary};
  display: inherit;
  align-items: flex-start;
  visibility: ${({ currentLayer }) =>
    currentLayer === 'overlay' ? 'visible' : 'hidden'};
  left: ${({ currentLayer }) => (currentLayer === 'overlay' ? '0' : '100%')};
  transition: ${Transition.Fast};
`

const OverlayNavBar = styled.nav`
  height: 100%;
  width: 100%;
  display: inherit;
  flex-direction: column;
  align-items: flex-start;
  padding: ${({ theme }) => theme.padding.xlarge};
  a {
    padding-bottom: ${({ theme }) => theme.padding.small};
  }
`

export const BurgerMenuStyled = {
  Wrapper,
  OpenButton,
  CloseButton,
  Overlay,
  OverlayNavBar
}
