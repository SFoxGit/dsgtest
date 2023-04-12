import styled from '@emotion/styled'

const StyledAssetContainer = styled.div`
  width: 64px;
  height: 64px;
  margin: 4px;
  image-rendering: pixelated;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`
const AssetImage = styled.div`
  width: 32px;
  height: 32px;
  background-image: url(${(props) => props.importedImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
`

export { StyledAssetContainer, AssetImage }
