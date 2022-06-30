import Grid from '@mui/material/Grid'
import styled from '@emotion/styled'

const ImageHoldingGrid = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  image-rendering: pixelated;
`

const StyledDownloadButton = styled.a`
  text-decoration: none;
`

const StyledDownloadContainer = styled(Grid)`
  & > * {
    margin-right: 10px;
  }
`

const StyledItemArrayContainer = styled(Grid)`
  height: 800px;
  overflow-y: scroll;
`
export { ImageHoldingGrid, StyledImage, StyledDownloadButton, StyledDownloadContainer, StyledItemArrayContainer }
