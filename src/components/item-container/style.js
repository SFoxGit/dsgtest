import Grid from '@mui/material/Grid'
import styled from '@emotion/styled'
import logoLarge from '../../userInterface/tokensVertical.png'

const StyledItemArrayContainer = styled(Grid)`
  height: 700px;
  overflow-y: auto;
  background-image: url(${logoLarge});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  border-radius: 5px;
  padding: 0px 16px !important;
  & > * {
    margin: 16px 0px;
  };
  @media only screen and (max-width: 600px) {
    padding: 0px 4px !important;
    & > * {
      margin: 4px 0px;
    }
  }
`

export { StyledItemArrayContainer }
