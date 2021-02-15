import React from 'react'
import { LinkButton } from '@shared/atomic/atm/button'
import { H1 } from '@shared/atomic/atm/typography'
import { NavBarStyled } from './NavBar.style'

const NavBar: React.FC = () => {
  return (
    <NavBarStyled.Wrapper>
      {/* TODO: change this H1 to another element */}
      <H1 highlighted={true}>Osman R.</H1>
      <NavBarStyled.ActionArea>
        <LinkButton href="/projects">Projetos</LinkButton>
        <LinkButton href="/contact">Contato</LinkButton>
      </NavBarStyled.ActionArea>
    </NavBarStyled.Wrapper>
  )
}
export default NavBar
