import styled from '@emotion/styled'

const StyledContainer = styled.header`
  color: white;
  margin-bottom: 40px;
  text-align: center;
  border-bottom: 1px solid black;
  padding: 20px;
  & > * {
    -webkit-text-stroke: 2px ${props => props.theme.palette.primary.main};
  }
`

export { StyledContainer }
