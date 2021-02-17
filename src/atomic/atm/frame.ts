import { boxShadowStyle } from '@/styles/constants'
import styled from 'styled-components'

interface FrameProps {
  color?: 'primary' | 'acessory'
  size?: 'medium' | 'large'
}

interface IFrameProps {
  fillIn?: boolean
}

export const Frame = styled.div<FrameProps>`
  width: 100%;
  height: auto; /* ${({ size }) => (size === 'large' ? '75%' : '25%')}; */
  padding: ${({ theme: { padding } }) => `${padding.medium} ${padding.small}`};
  border-radius: ${({ theme }) => theme.border.radius};
  background-color: ${({ theme: { colors }, color }) => colors[color]};
  color: red;
  box-shadow: ${boxShadowStyle};
`
export const IFrame = styled.iframe<IFrameProps>`
  width: ${({ fillIn }) => (fillIn ? '100%' : 'auto')};
  height: ${({ fillIn }) => (fillIn ? '100%' : 'auto')};
  background-color: inherit;
  border-radius: ${({ theme }) => theme.border.radius};
`
