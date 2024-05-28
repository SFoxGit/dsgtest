import styled from '@emotion/styled'

const StyledContainer = styled.div`
  grid-area: 1 / 3 / 2 / 7;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const SearchOuter = styled.div`
  width: 200px;
  height: 50px;
  padding-right: 20px;
  & > * {
    font-family: 'JoystixMonospace' !important;
    & > * {
      font-family: 'JoystixMonospace' !important;
    }
  }
`

export { StyledContainer, SearchOuter }
