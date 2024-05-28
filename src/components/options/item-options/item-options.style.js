import styled from '@emotion/styled'
import arrowLeft from '../../../monochrome/borderless/left.png'
import arrowRight from '../../../monochrome/borderless/right.png'
import Grid from '@mui/material/Grid'

const ItemOptionsContainer = styled.div`
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr) 5fr;
  grid-column-gap: 0px;
  grid-row-gap: 24px;
  @media screen and (max-width: 900px) {
    display: grid;
    max-height: 312px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const MobileContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 900px) {
    align-items: center;
  }
`
const AssetContainer = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ColorContainer = styled(Grid)`
  grid-area: 2 / 1 / 3 / 3;
  @media screen and (max-width: 900px) {
    grid-area: 2 / 1 / 3 / 2;
  }
`
const SingleColorContainer = styled(Grid)`
  grid-area: 2 / 1 / 3 / 2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 900px) {
    grid-area: 2 / 1 / 3 / 2;
  }
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
const SecondaryContainer = styled(Grid)`
  grid-area: 2 / 2 / 3 / 3;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 900px) {
    grid-area: 3 / 1 / 4 / 2;
  }
`
const PrimaryContainer = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const AssetSelectContainer = styled.div`
  grid-area: 3 / 1 / 4 / 3;
  max-height: 437px;
`

const AssetBorder = styled.div`
  height: 84px;
  width: 84px;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.palette.orange.main : theme.palette.secondary.main};
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
  width: calc(100% - 6px);
  height: calc(100% - 6px);
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
    background-color: ${({ theme }) => theme.palette.primary.alternate};
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
  SingleColorContainer,
  MobileContainer,
}
