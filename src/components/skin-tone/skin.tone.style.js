import { Container } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledSkinTone = styled('div')`
  background-color: ${(props) => props.color};
  width: 100%;
  height: 40px;
  border: 1px solid;
  border-radius: 5px;
  cursor: pointer;
`

const StyledContainer = styled(Container)`
  margin-top: 10px;
  margin-bottom: 20px;
  & > * {
    margin-top: 5px;
  }
`

export { StyledSkinTone, StyledContainer }
