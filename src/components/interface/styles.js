import Grid from '@mui/material/Grid'
import styled from '@emotion/styled'

const ImageHoldingGrid = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const StyledItemArrayContainer = styled(Grid)`
  height: 700px;
  overflow-y: auto;
  background-color: ${(props) => props.theme.palette.muted.main};
  border: 1px solid black;
  border-radius: 5px;
  padding: 0px 16px !important;
  position: relative;
  & > * {
    margin: 16px 0px;
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
export { ImageHoldingGrid, StyledItemArrayContainer, StyledFabContainer }
