import { Icon } from '@/assets/Icon'
import { strings } from '@/atomic/atm/strings'
import React from 'react'
import { AppFooterStyled } from './AppFooter.styles'
const { externalUrl } = strings
const AppFooter: React.FC = () => {
  return (
    <AppFooterStyled.Wrapper>
      <a href={externalUrl.whatsApp} rel="noreferrer" target="_blank">
        <Icon.Whatsapp />
      </a>
      <a href={externalUrl.gitHub} rel="noreferrer" target="_blank">
        <Icon.GitHub />
      </a>
      <a href={externalUrl.linkedIn} rel="noreferrer" target="_blank">
        <Icon.LinkedIn />
      </a>
    </AppFooterStyled.Wrapper>
  )
}

export default AppFooter
