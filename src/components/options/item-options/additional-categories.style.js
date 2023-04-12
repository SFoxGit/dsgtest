import styled from '@emotion/styled'
import accessories from '../../../monochrome/categories/accessories.png'
import additional from '../../../monochrome/categories/additional.png'
import armor from '../../../monochrome/categories/armor.png'
import back from '../../../monochrome/categories/back.png'
import backhand from '../../../monochrome/categories/backhand.png'
import body from '../../../monochrome/categories/body.png'
import dress from '../../../monochrome/categories/dress.png'
import face from '../../../monochrome/categories/face.png'
import facialhair from '../../../monochrome/categories/facialhair.png'
import feet from '../../../monochrome/categories/feet.png'
import forehand from '../../../monochrome/categories/forehand.png'
import hair from '../../../monochrome/categories/hair.png'
import headgear from '../../../monochrome/categories/headgear.png'
import helm from '../../../monochrome/categories/helm.png'
import hood from '../../../monochrome/categories/hood.png'
import lower from '../../../monochrome/categories/lower.png'
import robe from '../../../monochrome/categories/robe.png'
import upper from '../../../monochrome/categories/upper.png'

const OptionsContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const BorderOption = styled.div`
  width: calc(100% - 6px);
  height: calc(100% - 6px);
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
  & > * {
    width: calc(100% - 6px);
    height: calc(100% - 6px);  
    background-color: ${({ theme }) => theme.palette.primary.main};
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    image-rendering: pixelated;
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
const StyledOptionsContainer = styled.div`
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  display: flex;
  flex-wrap: wrap;
  & > * {
    width: 40px;
    height: 40px;  
    background-color: ${({ theme }) => theme.palette.secondary.main};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 4px;
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
  
  }
  @media screen and (max-width: 600px) {
    padding: 0px 4px !important;
    & > * {
      margin: 4px 0px;
    }
  }
`

const Face = styled.div`
  & > * {
    background-image: url(${face});
  }
`
const FacialHair = styled.div`
  & > * {
    background-image: url(${facialhair});
  }
`
const Hair = styled.div`
  & > * {
    background-image: url(${hair});
  }
`
const HeadGear = styled.div`
  & > * {
    background-image: url(${headgear});
  }
`
const Helm = styled.div`
  & > * {
    background-image: url(${helm});
  }
`
const Hood = styled.div`
  & > * {
    background-image: url(${hood});
  }
`
const BackHand = styled.div`
  & > * {
    background-image: url(${backhand});
  }
`
const UpperBody = styled.div`
  & > * {
    background-image: url(${upper});
  }
`
const Armor = styled.div`
  & > * {
    background-image: url(${armor});
  }
`
const ForeHand = styled.div`
  & > * {
    background-image: url(${forehand});
  }
`
const Robe = styled.div`
  & > * {
    background-image: url(${robe});
  }
`
const LowerBody = styled.div`
  & > * {
    background-image: url(${lower});
  }
`
const Back = styled.div`
  & > * {
    background-image: url(${back});
  }
`
const Dress = styled.div`
  & > * {
    background-image: url(${dress});
  }
`
const Accessories = styled.div`
  & > * {
    background-image: url(${accessories});
  }
`
const Feet = styled.div`
  & > * {
    background-image: url(${feet});
  }
`
const Body = styled.div`
  & > * {
    background-image: url(${body});
  }
`
const Additional = styled.div`
  & > * {
    background-image: url(${additional});
  }
`
export {
  OptionsContainer,
  StyledOptionsContainer,
  BorderOption,
  Face,
  FacialHair,
  Hair,
  HeadGear,
  Helm,
  Hood,
  BackHand,
  UpperBody,
  Armor,
  ForeHand,
  Robe,
  LowerBody,
  Back,
  Dress,
  Accessories,
  Feet,
  Body,
  Additional,
}
