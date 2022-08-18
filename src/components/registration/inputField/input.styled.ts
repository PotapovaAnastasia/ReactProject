import styled from 'styled-components'

export const InputStyled = styled.input`
  width: 460px;
  height: ${({ theme }) => theme.inputHeight};

  border: 1px solid #fff;
  border-radius: 6px;

  padding: 10px;

  background-color: ${({ theme }) => theme.inputBackground};
  box-shadow: 0 0 5px #b8b8b8;
`