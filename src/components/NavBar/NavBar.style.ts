import styled from 'styled-components'

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100vw;
  max-height: 80px;
  display: flex;
  justify-content: space-between;
  padding: ${({
    theme: {
      spacing: { padding }
    }
  }) => `${padding.normal} ${padding.large}`};
`
const ActionArea = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
`

export const NavBarStyled = {
  Wrapper,
  ActionArea
}
