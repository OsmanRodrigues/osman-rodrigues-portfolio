import Link, { LinkProps } from 'next/link'
import React from 'react'
import { ButtonLinkStyled } from './button-link.styles'

interface ButtonLinkProps extends LinkProps {
  handleClick?: () => void
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  handleClick,
  ...linkProps
}) => {
  return (
    <Link {...linkProps}>
      {handleClick ? (
        <ButtonLinkStyled.Anchor onClick={handleClick}>
          {children}
        </ButtonLinkStyled.Anchor>
      ) : (
        children
      )}
    </Link>
  )
}
export default ButtonLink
