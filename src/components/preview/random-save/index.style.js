import styled from '@emotion/styled'

const OuterContainer = styled.div`
  width: calc(100% - 16px);
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1320px) {
    margin-top: 16px;
    grid-area: 4 / 1 / 5 / 3;
    width: calc(100% - 32px);
    padding: 8px 16px;
  } ;
`
const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: space-evenly;
`
const PreviewContainer = styled.div`
  height: 64px;
  width: 64px;
  &:hover {
    cursor: pointer;
    & > * {
      background-color: ${({ theme }) => theme.palette.primary.alternate};
      & > * {
        background-color: ${({ theme }) => theme.palette.secondary.main};
      }
    }
  }
`

export { OuterContainer, InnerContainer, PreviewContainer }
