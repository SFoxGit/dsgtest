import { Container } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledSkinTone = styled('div')`
  background-color: ${(props) => props.color};
  width: 100%;
  height: 40px;
  margin: 4px 0px;
`

const StyledContainer = styled(Container)`
  margin-top: 200px;
`

export { StyledSkinTone, StyledContainer }
