import React from 'react'
import { HeaderStyled } from './Header.style'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <HeaderStyled.Wrapper>
      <HeaderStyled.Branding>
        <Link href="/">Osman R.</Link>
      </HeaderStyled.Branding>
      <HeaderStyled.NavBar>
        <Link href="/projetos">Projetos</Link>
        <Link href="/contato">Contato</Link>
      </HeaderStyled.NavBar>
    </HeaderStyled.Wrapper>
  )
}
export default Header
