import styled from '@emotion/styled'
import CloseIcon from '../../../monochrome/borderless/close.png'
import saveIcon from '../../../monochrome/light-borderless/save.png'
import TextField from '@mui/material/TextField'
import Delete from '../../../monochrome/borderless/delete.png'
import Close from '../../../monochrome/accept.png'

const StyledContainer = styled.div`
  width: 600px;
  height: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
  @media screen and (max-width: 900px) {
    width: 100%;
    height: 100%;
  }
`

const InnerModal = styled.div`
  width: calc(100% - 16px);
  height: calc(100% - 16px);
  overflow-y: auto;
`
const CloseRow = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 8px;
`
const CloseButton = styled.div`
  width: 40px;
  height: 40px;
  clip-path: polygon(
    0px 6px,
    3px 6px,
    3px 3px,
    6px 3px,
    6px 0px,
    calc(100% - 6px) 0px,
    calc(100% - 6px) 3px,
    calc(100% - 3px) 3px,
    calc(100% - 3px) 6px,
    100% 6px,
    100% calc(100% - 6px),
    calc(100% - 3px) calc(100% - 6px),
    calc(100% - 3px) calc(100% - 3px),
    calc(100% - 6px) calc(100% - 3px),
    calc(100% - 6px) 100%,
    6px 100%,
    6px calc(100% - 3px),
    3px calc(100% - 3px),
    3px calc(100% - 6px),
    0px calc(100% - 6px)
  );
  background-image: url(${CloseIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.primary.alternate};
  }
`
const SaveIcon = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${saveIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.primary.alternate};
  }
`
const SelectStateRow = styled.div`
  width: 100%;
  margin-bottom: 8px;
  & > * {
    width: 100%;
    margin-bottom: 8px;
    font-family: 'JoystixMonospace';
    & > * {
      font-family: 'JoystixMonospace';
      width: 33%;
    }
  }
`
const SaveImageContent = styled.div`
  width: 100%;
  height: calc(100% - 124px);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: space-between;
  overflow-y: auto;
  & > * {
    margin-bottom: 8px;
  }
`
const InputRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const TextContainer = styled.div`
  min-width: 95px;
  max-width: calc(100% - 116px);
  margin-left: 8px;
  padding-left: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.palette.background.main};
  display: flex;
  flex-direction: column;
`
const StyledTextField = styled(TextField)`
  & .MuiInputBase-input {
    clip-path: polygon(
      0px 6px,
      3px 6px,
      3px 3px,
      6px 3px,
      6px 0px,
      calc(100% - 6px) 0px,
      calc(100% - 6px) 3px,
      calc(100% - 3px) 3px,
      calc(100% - 3px) 6px,
      100% 6px,
      100% calc(100% - 6px),
      calc(100% - 3px) calc(100% - 6px),
      calc(100% - 3px) calc(100% - 3px),
      calc(100% - 6px) calc(100% - 3px),
      calc(100% - 6px) 100%,
      6px 100%,
      6px calc(100% - 3px),
      3px calc(100% - 3px),
      3px calc(100% - 6px),
      0px calc(100% - 6px)
    );

    background-color: ${({ theme }) => theme.palette.white.main};
  }
`
const ButtonContainer = styled.div`
  height: 48px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(
    0px 6px,
    3px 6px,
    3px 3px,
    6px 3px,
    6px 0px,
    calc(100% - 6px) 0px,
    calc(100% - 6px) 3px,
    calc(100% - 3px) 3px,
    calc(100% - 3px) 6px,
    100% 6px,
    100% calc(100% - 6px),
    calc(100% - 3px) calc(100% - 6px),
    calc(100% - 3px) calc(100% - 3px),
    calc(100% - 6px) calc(100% - 3px),
    calc(100% - 6px) 100%,
    6px 100%,
    6px calc(100% - 3px),
    3px calc(100% - 3px),
    3px calc(100% - 6px),
    0px calc(100% - 6px)
  );
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.primary.alternate};
  }
`
const LoadItemButton = styled.div`
  height: 44px;
  width: calc(100% - 20px);
  margin: 4px;
  padding: 0px 12px 0px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  clip-path: polygon(
    0px 6px,
    3px 6px,
    3px 3px,
    6px 3px,
    6px 0px,
    calc(100% - 6px) 0px,
    calc(100% - 6px) 3px,
    calc(100% - 3px) 3px,
    calc(100% - 3px) 6px,
    100% 6px,
    100% calc(100% - 6px),
    calc(100% - 3px) calc(100% - 6px),
    calc(100% - 3px) calc(100% - 3px),
    calc(100% - 6px) calc(100% - 3px),
    calc(100% - 6px) 100%,
    6px 100%,
    6px calc(100% - 3px),
    3px calc(100% - 3px),
    3px calc(100% - 6px),
    0px calc(100% - 6px)
  );
  background-color: ${({ theme }) => theme.palette.white.main};
`
const LoadImageContent = styled.div`
  width: 100%;
  height: calc(100% - 124px);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: space-between;
  overflow-y: auto;
  & > * {
    margin-bottom: 8px;
  }
`
const DeleteButton = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${Delete});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.primary.alternate};
  }
`
const AcceptButton = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${Close});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.primary.alternate};
  }
`
const AcceptDeleteContainer = styled.div`
  width: 88px;
  display: flex;
  justify-content: space-between;
`
export {
  StyledContainer,
  InnerModal,
  CloseRow,
  CloseButton,
  SaveIcon,
  SelectStateRow,
  SaveImageContent,
  InputRow,
  TextContainer,
  StyledTextField,
  ButtonContainer,
  LoadItemButton,
  LoadImageContent,
  DeleteButton,
  AcceptButton,
  AcceptDeleteContainer,
}
