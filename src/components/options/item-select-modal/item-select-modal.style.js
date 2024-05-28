import styled from '@emotion/styled'
import CloseIcon from '../../../monochrome/borderless/close.png'
const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  border: medium none;
`

const InnerModal = styled.div`
  width: calc(100% - 16px);
  height: calc(100% - 16px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: auto;
`
const CloseRow = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`
const CloseButton = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${CloseIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
`
const AssetContainer = styled.div`
  height: calc(100% - 48px);
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export { StyledContainer, InnerModal, CloseRow, CloseButton, AssetContainer }
