import styled from '@emotion/styled'
import Typography from '@mui/material/Typography'
import clearAllIcon from '../../../monochrome/light-borderless/clear_all.png'
import Folder from '../../../monochrome/folder.png'
import randomIcon from '../../../monochrome/light-borderless/random.png'
import saveIcon from '../../../monochrome/light-borderless/save.png'

const OuterContainer = styled.div`
  width: calc(100% - 16px);
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1320px) {
    margin-top: 16px;
    grid-area: 5 / 1 / 6 / 3;
    width: calc(100% - 32px);
    padding: 8px 16px;
  }
`
const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: space-evenly;
`
const PreviewContainer = styled.div`
  height: 64px;
  width: 64px;
  &:hover {
    cursor: pointer;
    & > * {
      background-color: ${({ theme }) => theme.palette.primary.alternate};
      & > * {
        background-color: ${({ theme }) => theme.palette.secondary.main};
      }
    }
  }
`
const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledText = styled(Typography)`
  color: ${({ theme }) => theme.palette.white.main};
  font-family: 'JoystixMonospace';
`
const ClearIcon = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${clearAllIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
`
const LoadIcon = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${Folder});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
`
const RandomIcon = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${randomIcon});
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
export {
  OuterContainer,
  InnerContainer,
  PreviewContainer,
  MobileContainer,
  StyledText,
  ClearIcon,
  LoadIcon,
  RandomIcon,
  SaveIcon,
}
