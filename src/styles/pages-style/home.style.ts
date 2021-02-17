import styled, { css } from 'styled-components'
import { Breakpoint, ColumnGap } from '../constants'

const homeSectioStyle = css`
  padding: ${({ theme: { padding } }) => `${padding.xlarge} 0`};
`

const BrandArea = styled.div`
  ${homeSectioStyle}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const Gallery = styled.section`
  ${homeSectioStyle}
  display: flex;
  min-height: 60vh;

  @media (max-width: ${Breakpoint.Medium}) {
    height: auto;
    flex-direction: column;
    gap: ${ColumnGap.Medium};
  }
`

export const HomeStyled = {
  BrandArea,
  Gallery
}
