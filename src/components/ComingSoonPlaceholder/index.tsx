import { H1 } from '@/atomic/atm/typography'
import React from 'react'
import { ComingSoonPlaceholderWrapperStyled } from './ComingSoonPlaceholder.style'

const ComingSoonPlaceholder = (): JSX.Element => {
  return (
    <ComingSoonPlaceholderWrapperStyled>
      <H1>Em breve</H1>
    </ComingSoonPlaceholderWrapperStyled>
  )
}

export default ComingSoonPlaceholder
