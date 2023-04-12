import styled from '@emotion/styled'
import arrowLeft from '../../../monochrome/borderless/left.png'
import arrowRight from '../../../monochrome/borderless/right.png'
import Grid from '@mui/material/Grid'

const ItemOptionsContainer = styled.div`
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr) 5fr;
  grid-column-gap: 0px;
  grid-row-gap: 24px;
  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const AssetContainer = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ColorContainer = styled(Grid)`
  grid-area: 2 / 1 / 3 / 2;
`
const LeftColorContainer = styled(Grid)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const MiddleColor = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
`
const RightColorContainer = styled(Grid)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const SecondaryContainer = styled(Grid)``
const PrimaryContainer = styled(Grid)``

const AssetSelectContainer = styled.div`
  grid-area: 3 / 1 / 4 / 2;
  max-height: 437px;
`

const AssetBorder = styled.div`
  height: 84px;
  width: 84px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  display: flex;
  margin: 0px 54px;
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
`
const AssetPreview = styled.div`
  width: calc(100% - 5px);
  height: calc(100% - 5px);
  background-color: ${({ theme }) => theme.palette.white.alternate};
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
  }
`

const AssetImage = styled.div`
  height: 64px;
  width: 64px;
  background-image: url(${(props) => props.importedImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  image-rendering: pixelated;
`

const LeftArrow = styled.div`
  height: 32px;
  width: 32px;
  background-image: url(${arrowLeft});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
`
const RightArrow = styled.div`
  height: 32px;
  width: 32px;
  background-image: url(${arrowRight});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
`
const ColorPreview = styled.div`
  height: 64px;
  width: 64px;
  background-color: ${(props) => props.color};
  &:hover {
    cursor: pointer;
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

export {
  ItemOptionsContainer,
  AssetContainer,
  LeftColorContainer,
  ColorContainer,
  RightColorContainer,
  AssetPreview,
  AssetBorder,
  AssetImage,
  LeftArrow,
  RightArrow,
  ColorPreview,
  MiddleColor,
  SecondaryContainer,
  PrimaryContainer,
  AssetSelectContainer,
  ButtonContainer,
}
