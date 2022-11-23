import styled from '@emotion/styled'
import itemBackground from '../../userInterface/inventory_inset_sm.png'
import weapon from '../../userInterface/hands_category_sm.png'
import robe from '../../userInterface/icons/robe.png'
import additionalpieces from '../../userInterface/icons/additionalpieces.png'
import lower from '../../userInterface/icons/lower.png'
import upper from '../../userInterface/icons/upper.png'
import hair from '../../userInterface/icons/hair.png'
import body from '../../userInterface/icons/body.png'
import feet from '../../userInterface/icons/feet.png'
import back from '../../userInterface/icons/back.png'

const StyledOptionsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  & > * {
    background-image: url(${itemBackground});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
  }
  @media only screen and (max-width: 600px) {
    padding: 0px 4px !important;
    & > * {
      margin: 4px 0px;
    }
  }
`

const Weapons = styled.div`
  grid-area: 5 / 2 / 7 / 4;
  padding: 8px;
  & > * {
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    background-image: url(${weapon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
  }
`

const Robes = styled.div`
  grid-area: 8 / 2 / 10 / 4;
  padding: 8px;
  & > * {
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    background-image: url(${robe});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
  }
`
const Accessories = styled.div`
  grid-area: 9 / 5 / 10 / 6;
  & > * {
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    background-image: url(${additionalpieces});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
  }
`
const Lower = styled.div`
  grid-area: 8 / 7 / 10 / 9;
  padding: 8px;
  & > * {
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    background-image: url(${lower});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
  }
`
const Upper = styled.div`
  grid-area: 5 / 7 / 7 / 9;
  padding: 8px;
  & > * {
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    background-image: url(${upper});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
  }
`
const Head = styled.div`
  grid-area: 2 / 7 / 4 / 9;
  padding: 8px;
  & > * {
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    background-image: url(${hair});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
  }
`
const Body = styled.div`
  grid-area: 9 / 10 / 10 / 11;
  & > * {
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    background-image: url(${body});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
  }
`
const Feet = styled.div`
  grid-area: 8 / 12 / 10 / 14;
  padding: 8px;
  & > * {
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    background-image: url(${feet});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
  }
`
const Back = styled.div`
  grid-area: 5 / 12 / 7 / 14;
  padding: 8px;
  & > * {
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    background-image: url(${back});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
  }
`

export {
  StyledOptionsContainer,
  Weapons,
  Robes,
  Accessories,
  Lower,
  Upper,
  Head,
  Body,
  Feet,
  Back,
}
