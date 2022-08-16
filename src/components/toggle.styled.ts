import styled from 'styled-components'

export const ToggleStyled = styled.input`
  -webkit-appearance: none;
  appearance: none;
  padding: 11px 22px;
  z-index: 10000;
  border-radius: 10px;
  background: radial-gradient(circle 9px, white 100%, transparent calc(100% + 1px)) #4c5866 -10px;
  transition: 0.3s ease-in-out;
  position: absolute;
  top: 2.5%;
  right: 3%;
  cursor: pointer;
  &:checked {
    background-color: #9999ff;
    background-position: 11px;
  }
`
