import styled from 'styled-components'

export const PostStyled = styled.section`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.postBackground};
  border-radius: 0.6rem;
  padding: 25px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
