import React from 'react'
import { BurgerMenuStyled, CurrentLayer } from './burger-menu.style'

const BurgerMenu: React.FC = ({ children }) => {
  const [currentLayer, setCurrentLayer] = React.useState<CurrentLayer>('button')
  return (
    <BurgerMenuStyled.Wrapper>
      <BurgerMenuStyled.OpenButton
        currentLayer={currentLayer}
        onClick={() => setCurrentLayer('overlay')}
      >
        btn
      </BurgerMenuStyled.OpenButton>
      <BurgerMenuStyled.Overlay currentLayer={currentLayer}>
        <BurgerMenuStyled.CloseButton onClick={() => setCurrentLayer('button')}>
          X
        </BurgerMenuStyled.CloseButton>
        {children}
      </BurgerMenuStyled.Overlay>
    </BurgerMenuStyled.Wrapper>
  )
}

export default BurgerMenu
