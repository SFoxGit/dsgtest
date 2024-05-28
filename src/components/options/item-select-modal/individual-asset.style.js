import styled from '@emotion/styled'

const StyledAssetContainer = styled.div`
  width: 62px;
  height: 62px;
  margin: 0px 1px;
  image-rendering: pixelated;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`
const AssetImage = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${(props) => props.importedImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
`

export { StyledAssetContainer, AssetImage }
