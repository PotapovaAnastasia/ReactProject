import styled from 'styled-components'

export const ButtonStyled = styled.button`
  width: 90px;
  height: 28px;

  border-radius: 4px;
  border: none;
  box-shadow: ${({ theme }) => theme.buttonsFormBoxShadow};

  background-color: ${({ theme }) => theme.buttonsFormBackground};
  color: #f8f4ff;

  margin-right: 100px;
  margin-top: 30px;
  margin-bottom: 30px;

  transition: all 0.2s linear;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.buttonsFormHoverBackground};
    box-shadow: ${({ theme }) => theme.buttonsFormHoverBoxShadow};
  }
`
