import styled from '@emotion/styled'
import accessories from '../../monochrome/categories/accessories.png'
import additional from '../../monochrome/categories/additional.png'
import armor from '../../monochrome/categories/armor.png'
import back from '../../monochrome/categories/back.png'
import backhand from '../../monochrome/categories/backhand.png'
import body from '../../monochrome/categories/body.png'
import dress from '../../monochrome/categories/dress.png'
import face from '../../monochrome/categories/face.png'
import facialhair from '../../monochrome/categories/facialhair.png'
import feet from '../../monochrome/categories/feet.png'
import forehand from '../../monochrome/categories/forehand.png'
import hair from '../../monochrome/categories/hair.png'
import headgear from '../../monochrome/categories/headgear.png'
import helm from '../../monochrome/categories/helm.png'
import hood from '../../monochrome/categories/hood.png'
import lower from '../../monochrome/categories/lower.png'
import robe from '../../monochrome/categories/robe.png'
import upper from '../../monochrome/categories/upper.png'

const OptionsContainer = styled.div`
  grid-area: 3 / 1 / 4 / 3;
  @media screen and (min-width: 1320px) {
    grid-area: 2 / 3 / 3 / 4;
  } ;
`
const StyledOptionsContainer = styled.div`
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  & > * {
    width: 100%;
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
  }
  @media screen and (max-width: 1320px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 4px;
    grid-row-gap: 4px;
  }
  @media screen and (min-width: 1320px) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  } ;
`

const Face = styled.div`
  @media screen and (min-width: 1320px) {
    grid-area: 1 / 1 / 2 / 2;
  }
  @media screen and (max-width: 1320px) {
    grid-area: 3 / 2 / 4 / 3;
  }

  & > * {
    background-image: url(${face});
  }
`
const FacialHair = styled.div`
  @media screen and (min-width: 1320px) {
    grid-area: 1 / 2 / 2 / 3;
  }
  @media screen and (max-width: 1320px) {
    grid-area: 3 / 3 / 4 / 4;
  }

  & > * {
    background-image: url(${facialhair});
  }
`
const Hair = styled.div`
  @media screen and (min-width: 1320px) {
    grid-area: 1 / 3 / 2 / 4;
  }
  @media screen and (max-width: 1320px) {
    grid-area: 4 / 3 / 5 / 4;
  }

  & > * {
    background-image: url(${hair});
  }
`
const HeadGear = styled.div`
  @media screen and (max-width: 1320px) {
    grid-area: 5 / 1 / 6 / 2;
  }
  @media screen and (min-width: 1320px) {
    grid-area: 1 / 4 / 2 / 5;
  }
  & > * {
    background-image: url(${headgear});
  }
`
const Helm = styled.div`
  @media screen and (max-width: 1320px) {
    grid-area: 5 / 2 / 6 / 3;
  }
  @media screen and (min-width: 1320px) {
    grid-area: 1 / 5 / 2 / 6;
  }
  & > * {
    background-image: url(${helm});
  }
`
const Hood = styled.div`
  @media screen and (max-width: 1320px) {
    grid-area: 5 / 3 / 6 / 4;
  }
  @media screen and (min-width: 1320px) {
    grid-area: 1 / 6 / 2 / 7;
  }
  & > * {
    background-image: url(${hood});
  }
`
const BackHand = styled.div`
  @media screen and (max-width: 1320px) {
    grid-area: 2 / 2 / 3 / 3;
  }
  @media screen and (min-width: 1320px) {
    grid-area: 2 / 1 / 3 / 2;
  }
  & > * {
    background-image: url(${backhand});
  }
`
const UpperBody = styled.div`
  @media screen and (max-width: 1320px) {
    grid-area: 6 / 3 / 7 / 4;
  }
  @media screen and (min-width: 1320px) {
    grid-area: 2 / 3 / 3 / 4;
  }
  & > * {
    background-image: url(${upper});
  }
`
const Armor = styled.div`
  @media screen and (max-width: 1320px) {
    grid-area: 1 / 3 / 2 / 4;
  }
  @media screen and (min-width: 1320px) {
    grid-area: 2 / 4 / 3 / 5;
  }
  & > * {
    background-image: url(${armor});
  }
`
const ForeHand = styled.div`
  @media screen and (max-width: 1320px) {
    grid-area: 4 / 2 / 5 / 3;
  }
  @media screen and (min-width: 1320px) {
    grid-area: 2 / 6 / 3 / 7;
  }
  & > * {
    background-image: url(${forehand});
  }
`
const Robe = styled.div`
  @media screen and (max-width: 1320px) {
    grid-area: 6 / 2 / 7 / 3;
  }
  @media screen and (min-width: 1320px) {
    grid-area: 3 / 1 / 4 / 2;
  }
  & > * {
    background-image: url(${robe});
  }
`
const LowerBody = styled.div`
  @media screen and (max-width: 1320px) {
    grid-area: 6 / 1 / 7 / 2;
  }
  @media screen and (min-width: 1320px) {
    grid-area: 3 / 3 / 4 / 4;
  }
  & > * {
    background-image: url(${lower});
  }
`
const Back = styled.div`
  @media screen and (max-width: 1320px) {
    grid-area: 2 / 1 / 3 / 2;
  }
  @media screen and (min-width: 1320px) {
    grid-area: 3 / 4 / 4 / 5;
  }
  & > * {
    background-image: url(${back});
  }
`
const Dress = styled.div`
  @media screen and (max-width: 1320px) {
    grid-area: 3 / 1 / 4 / 2;
  }
  @media screen and (min-width: 1320px) {
    grid-area: 3 / 6 / 4 / 7;
  }
  & > * {
    background-image: url(${dress});
  }
`
const Accessories = styled.div`
  @media screen and (max-width: 1320px) {
    grid-area: 1 / 1 / 2 / 2;
  }
  @media screen and (min-width: 1320px) {
    grid-area: 4 / 1 / 5 / 2;
  }
  & > * {
    background-image: url(${accessories});
  }
`
const Feet = styled.div`
  @media screen and (max-width: 1320px) {
    grid-area: 4 / 1 / 5 / 2;
  }
  @media screen and (min-width: 1320px) {
    grid-area: 4 / 3 / 5 / 4;
  }
  & > * {
    background-image: url(${feet});
  }
`
const Body = styled.div`
  @media screen and (max-width: 1320px) {
    grid-area: 2 / 3 / 3 / 4;
  }
  @media screen and (min-width: 1320px) {
    grid-area: 4 / 4 / 5 / 5;
  }
  & > * {
    background-image: url(${body});
  }
`
const Additional = styled.div`
  @media screen and (max-width: 1320px) {
    grid-area: 1 / 2 / 2 / 3;
  }
  @media screen and (min-width: 1320px) {
    grid-area: 4 / 6 / 5 / 7;
  }
  & > * {
    background-image: url(${additional});
  }
`
export {
  OptionsContainer,
  StyledOptionsContainer,
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
