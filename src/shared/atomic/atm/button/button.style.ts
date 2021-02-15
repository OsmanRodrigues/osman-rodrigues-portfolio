import styled, { css } from 'styled-components'

const buttonStyles = css`
  font-size: ${({ theme }) => theme.typography.largeSize};
`
export const LinkButtonWrapper = styled.button`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.link};
  }
  border: none;
  background: none;
  &:hover,
  &:active,
  &:focus {
    border-bottom: solid
      ${({ theme }) =>
        `${theme.colors.primary} ${theme.spacing.border.Thickness}`};
  }
  ${buttonStyles}
`
export const SimpleButton = styled.button`
  ${buttonStyles}
`
