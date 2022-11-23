import styled from '@emotion/styled'
import hair from '../../userInterface/icons/hair.png'
import headgear from '../../userInterface/icons/headgear.png'
import hood from '../../userInterface/icons/hood.png'
import facialhair from '../../userInterface/icons/facialhair.png'
import face from '../../userInterface/icons/face.png'
import helm from '../../userInterface/icons/helm.png'
import Grid from '@mui/material/Grid'
import itemBackground from '../../userInterface/inventory_inset_sm.png'

const StyledHeadContainer = styled(Grid)`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
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

const Hair = styled.div`
  grid-area: 2 / 2 / 3 / 3;
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
const Headgear = styled.div`
  grid-area: 2 / 4 / 3 / 5;
  padding: 8px;
  & > * {
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    background-image: url(${headgear});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
  }
`
const Hood = styled.div`
  grid-area: 2 / 6 / 3 / 7;
  padding: 8px;
  & > * {
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    background-image: url(${hood});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
  }
`
const FacialHair = styled.div`
  grid-area: 4 / 2 / 5 / 3;
  padding: 8px;
  & > * {
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    background-image: url(${facialhair});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
  }
`
const Face = styled.div`
  grid-area: 4 / 4 / 5 / 5;
  padding: 8px;
  & > * {
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    background-image: url(${face});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
  }
`
const Helm = styled.div`
  grid-area: 4 / 6 / 5 / 7;
  padding: 8px;
  & > * {
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    background-image: url(${helm});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
  }
`

export { StyledHeadContainer, Hair, Headgear, Hood, FacialHair, Face, Helm }
