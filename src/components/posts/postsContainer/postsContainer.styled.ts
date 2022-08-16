import styled from 'styled-components'

export const PostsContainerStyled = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem 1rem;
  grid-auto-flow: row;
  grid-template-areas:
    'a a f'
    'a a g'
    'b c h'
    'b c i'
    'd e j'
    'd e k';
`
