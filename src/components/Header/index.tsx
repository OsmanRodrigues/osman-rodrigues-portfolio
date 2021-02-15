import React from 'react'
import Link from 'next/link'
import BurgerMenu from '@atomic/mol/burguer-menu'
import { HeaderStyled } from './Header.style'
import { strings } from '@atomic/obj/strings'
const { route } = strings

const Header: React.FC = () => {
  return (
    <HeaderStyled.Wrapper>
      <HeaderStyled.Branding>
        <Link href={route.home}>Osman R.</Link>
      </HeaderStyled.Branding>
      <HeaderStyled.NavBar>
        <Link href={route.projetos}>Projetos</Link>
        <Link href={route.contato}>Contato</Link>
      </HeaderStyled.NavBar>
      <BurgerMenu>
        <Link href={route.projetos}>Projetos</Link>
        <Link href={route.contato}>Contato</Link>
      </BurgerMenu>
    </HeaderStyled.Wrapper>
  )
}
export default Header
