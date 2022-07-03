import Grid from '@mui/material/Grid'
import styled from '@emotion/styled'

const ImageHoldingGrid = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  image-rendering: -moz-crisp-edges;
  image-rendering: -webkit-crisp-edges;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
`

const StyledDownloadButton = styled.a`
  text-decoration: none;
`

const StyledDownloadContainer = styled(Grid)`
  margin: 20px 0px;
  padding: 0px !important;
  & > * {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`

const StyledItemArrayContainer = styled(Grid)`
  height: 700px;
  overflow-y: auto;
  background-color: ${(props) => props.theme.palette.muted.main};
  border: 1px solid black;
  border-radius: 5px;
  padding: 0px 16px !important;
  & > * {
    margin: 16px 0px;
  }
`
export { ImageHoldingGrid, StyledImage, StyledDownloadButton, StyledDownloadContainer, StyledItemArrayContainer }
