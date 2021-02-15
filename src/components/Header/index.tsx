import React from 'react'
import { HeaderStyled } from './Header.style'
import Link from 'next/link'
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
    </HeaderStyled.Wrapper>
  )
}
export default Header
