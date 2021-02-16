import styled from 'styled-components'

const Wrapper = styled.div`
  border: 1px solid red;
`
const BrandArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme: { padding } }) => `${padding.xlarge} 0`};
`

export const HomeStyled = {
  Wrapper,
  BrandArea
}
