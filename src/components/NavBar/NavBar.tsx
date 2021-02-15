import { LinkButton } from '@shared/atomic/atm/button'
import { H1 } from '@shared/atomic/atm/typography'
import React from 'react'
import { NavBarStyled } from './NavBar.style'

const { Wrapper, ActionArea } = NavBarStyled

export const NavBar: React.FC = () => {
  return (
    <Wrapper>
      <H1 highlighted={true}>Osman R.</H1>
      <ActionArea>
        <LinkButton href="">Projetos</LinkButton>
        <LinkButton href="">Contato</LinkButton>
      </ActionArea>
    </Wrapper>
  )
}
