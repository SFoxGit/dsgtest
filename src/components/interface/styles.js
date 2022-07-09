import Grid from '@mui/material/Grid'
import styled from '@emotion/styled'

const ImageHoldingGrid = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px !important;
`

const StyledItemArrayContainer = styled(Grid)`
  height: 700px;
  overflow-y: auto;
  background-color: ${(props) => props.theme.palette.muted.main};
  border-radius: 5px;
  padding: 0px 16px !important;
  position: relative;
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

const StyledFabContainer = styled.div`
  position: sticky;
  bottom: 10px;
  padding-left: 91%;
  @media only screen and (max-width: 600px) {
    padding-left: 80%;
  }
`
const StyledPixelContainer = styled(Grid)`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
  padding: 0px;
  height: 80px;
  & > * {
    margin-top: 0px;
    height: 50.25px;
    text-align: center;
  }
`

export { ImageHoldingGrid, StyledItemArrayContainer, StyledFabContainer, StyledPixelContainer }
