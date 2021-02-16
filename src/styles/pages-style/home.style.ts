import styled, { css } from 'styled-components'

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
  height: 60vh;
`

export const HomeStyled = {
  BrandArea,
  Gallery
}
