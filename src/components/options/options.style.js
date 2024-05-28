import styled from '@emotion/styled'
import accessories from '../../monochrome/categories/accessories.png'
import back from '../../monochrome/categories/back.png'
import backhand from '../../monochrome/categories/backhand.png'
import body from '../../monochrome/categories/body.png'
import face from '../../monochrome/categories/face.png'
import feet from '../../monochrome/categories/feet.png'
import forehand from '../../monochrome/categories/forehand.png'
import hair from '../../monochrome/categories/hair.png'
import headgear from '../../monochrome/categories/headgear.png'
import lower from '../../monochrome/categories/lower.png'
import robe from '../../monochrome/categories/robe.png'
import upper from '../../monochrome/categories/upper.png'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

const OptionsContainer = styled.div`
  grid-area: 3 / 1 / 4 / 3;
  @media screen and (min-width: 920px) {
    grid-area: 2 / 3 / 3 / 4;
  }
`
const StyledOptionsContainer = styled(Grid)`
  width: calc(100% - 20px);
  height: calc(100% - 10px);
  & > * {
    height: 116px;
    @media screen and (min-width: 920px) {
      height: 30%;
    }
  }
  @media screen and (max-width: 920px) {
    align-self: start;
    height: 464px;
    margin-top: 0px;
  }
`

const Face = styled(Button)`
  background-image: url(${face});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
`
const Hair = styled(Button)`
  background-image: url(${hair});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
`
const HeadGear = styled(Button)`
  background-image: url(${headgear});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
`
const BackHand = styled(Button)`
  background-image: url(${backhand});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
`
const UpperBody = styled(Button)`
  background-image: url(${upper});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
`
const ForeHand = styled(Button)`
  background-image: url(${forehand});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
`
const Robe = styled(Button)`
  background-image: url(${robe});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
`
const LowerBody = styled(Button)`
  background-image: url(${lower});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
`
const Back = styled(Button)`
  background-image: url(${back});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
`
const Accessories = styled(Button)`
  background-image: url(${accessories});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
`
const Feet = styled(Button)`
  background-image: url(${feet});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
`
const Body = styled(Button)`
  background-image: url(${body});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
`
const StyledGridItem = styled(Grid)`
  height: 100%;
  background-color: ${({ theme }) => theme.palette.secondary.main};
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
`
const StyledButtonContainer = styled.div`
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.white.alternate};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
  border-style: none;
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
  & > * {
    width: calc(100% - 6px);
    height: calc(100% - 6px);
  }
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.primary.alternate};
  }
`
const InnerContainer = styled.div`
  width: calc(100% - 24px);
  height: 680px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: auto;
`
export {
  OptionsContainer,
  StyledOptionsContainer,
  Face,
  Hair,
  HeadGear,
  BackHand,
  UpperBody,
  ForeHand,
  Robe,
  LowerBody,
  Back,
  Accessories,
  Feet,
  Body,
  StyledGridItem,
  StyledButtonContainer,
  InnerContainer
}
