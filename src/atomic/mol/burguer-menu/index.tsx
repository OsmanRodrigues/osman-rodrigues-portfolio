import React from 'react'
import { BurgerMenuStyled, CurrentLayer } from './burger-menu.style'
import { Icon } from '@atomic/atm/icon'
interface BurgerMenuProps {
  currentLayer: CurrentLayer
  openMenuHandle: () => void
  closeMenuHandle: () => void
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({
  children,
  openMenuHandle,
  closeMenuHandle,
  currentLayer
}) => {
  return (
    <BurgerMenuStyled.Wrapper>
      <BurgerMenuStyled.OpenButton
        currentLayer={currentLayer}
        onClick={openMenuHandle}
      >
        <Icon.Burger />
      </BurgerMenuStyled.OpenButton>
      <BurgerMenuStyled.Overlay currentLayer={currentLayer}>
        <BurgerMenuStyled.CloseButton onClick={closeMenuHandle}>
          X
        </BurgerMenuStyled.CloseButton>
        <BurgerMenuStyled.OverlayNavBar>
          {children}
        </BurgerMenuStyled.OverlayNavBar>
      </BurgerMenuStyled.Overlay>
    </BurgerMenuStyled.Wrapper>
  )
}

export default BurgerMenu
