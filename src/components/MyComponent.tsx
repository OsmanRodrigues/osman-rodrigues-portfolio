import { HomeStyled } from '@styles/pages-style/home.style'
import React from 'react'

const { Wrapper } = HomeStyled

export const MyComponent: React.FC = () => {
  return (
    <Wrapper>
      <main>
        <h1>My website</h1>
      </main>
    </Wrapper>
  )
}
