import styled from 'styled-components'

export const HeaderStyled = styled.footer`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px;
  z-index: 5000;
  background-color: ${({ theme }) => theme.backgroundHeaderFooter};
  box-shadow: 0 0 10px rgb(194, 193, 193);
`
