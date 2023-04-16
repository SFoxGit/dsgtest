import styled from '@emotion/styled'
import CloseIcon from '../../../monochrome/borderless/close.png'
import saveIcon from '../../../monochrome/light-borderless/save.png'

const StyledContainer = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
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
const SaveIcon = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${saveIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
`


export { StyledContainer, InnerModal, CloseRow, CloseButton, SaveIcon }
