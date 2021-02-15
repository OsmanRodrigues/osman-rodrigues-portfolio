import { Breakpoint, overlayStyle } from '@styles/constants'
import styled from 'styled-components'

export type CurrentLayer = 'button' | 'overlay'

interface BurgerMenuStyledProps {
  currentLayer: CurrentLayer
}

const Wrapper = styled.div`
  @media (min-width: ${Breakpoint.Medium}) {
    display: none;
  }
`
const OpenButton = styled.button<BurgerMenuStyledProps>`
  display: ${({ currentLayer }) =>
    currentLayer === 'button' ? 'initial' : 'none'};
`
const CloseButton = styled.button``
const Overlay = styled.div<BurgerMenuStyledProps>`
  ${overlayStyle}
  display: ${({ currentLayer }) =>
    currentLayer === 'overlay' ? 'initial' : 'none'};
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid red;
`

export const BurgerMenuStyled = {
  Wrapper,
  OpenButton,
  CloseButton,
  Overlay
}
