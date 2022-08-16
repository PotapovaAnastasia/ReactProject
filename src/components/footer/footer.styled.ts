import styled from 'styled-components'

export const FooterStyled = styled.footer`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 21px;
  z-index: 5000;
  background-color: ${({ theme }) => theme.backgroundHeaderFooter};
  box-shadow: 0 0 10px rgb(194, 193, 193);
  text-align: center;
  font-size: 12px;
  font-style: italic;
`
