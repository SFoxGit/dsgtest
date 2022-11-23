import styled from '@emotion/styled'
import Container from '@mui/material/Container'
import bricks from './userInterface/bricks.png'

const StyledContainer = styled(Container)`
  margin: 0px;
  padding: 0px !important;
  min-height: 100vh;
  background-color: ${(props) => props.theme.palette.background.default};
  background-image: url(${bricks});
  background-repeat: repeat;
`

const StyledBody = styled(Container)`
  margin: 20px 0px;
  padding: 0px !important;
`

export { StyledContainer, StyledBody }
