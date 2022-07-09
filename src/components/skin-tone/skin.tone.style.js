// import { Container } from '@mui/material'
import styled from '@emotion/styled'
import Paper from '@mui/material/Paper'

const StyledSkinTone = styled('div')`
  background-color: ${(props) => props.color};
  width: 100%;
  height: 40px;
  border: 1px solid;
  border-radius: 5px;
  cursor: pointer;
`

const StyledContainer = styled(Paper)`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`

export { StyledSkinTone, StyledContainer }
