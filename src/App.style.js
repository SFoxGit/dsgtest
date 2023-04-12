import styled from '@emotion/styled'
import Container from '@mui/material/Container'

const StyledContainer = styled(Container)`
  margin: 0px;
  min-height: 100vh;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.palette.background.default};
`

const StyledBody = styled(Container)`
  margin: 20px 0px;
  padding: 0px !important;
`

export { StyledContainer, StyledBody }
