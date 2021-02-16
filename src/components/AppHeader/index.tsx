import React from 'react'
import BurgerMenu from '@/atomic/mol/burguer-menu'
import { HeaderStyled } from './AppHeader.style'
import { strings } from '@/atomic/obj/strings'
import { CurrentLayer } from '@/atomic/mol/burguer-menu/burger-menu.style'
import ButtonLink from '@/atomic/mol/button-link'

const { route } = strings

const AppHeader: React.FC = () => {
  const [currentLayer, setCurrentLayer] = React.useState<CurrentLayer>('button')

  const handleClick = (layer: CurrentLayer) => {
    setCurrentLayer(layer)
  }

  return (
    <HeaderStyled.Wrapper>
      <HeaderStyled.Branding>
        <ButtonLink href={route.home}>Osman R.</ButtonLink>
      </HeaderStyled.Branding>
      <HeaderStyled.NavBar>
        <ButtonLink href={route.projetos}>Projetos</ButtonLink>
        <ButtonLink href={route.contato}>Contato</ButtonLink>
      </HeaderStyled.NavBar>

      <BurgerMenu
        currentLayer={currentLayer}
        openMenuHandle={() => handleClick('overlay')}
        closeMenuHandle={() => handleClick('button')}
      >
        <ButtonLink
          handleClick={() => handleClick('button')}
          href={route.projetos}
        >
          Projetos
        </ButtonLink>
        <ButtonLink
          handleClick={() => handleClick('button')}
          href={route.contato}
        >
          Contato
        </ButtonLink>
      </BurgerMenu>
    </HeaderStyled.Wrapper>
  )
}

export default AppHeader
