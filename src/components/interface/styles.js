import styled from '@emotion/styled'

const ImageHoldingGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const InterfaceContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 9fr 2fr 10fr;
  grid-column-gap: 4px;
  grid-row-gap: 4px;
  @media screen and (min-width: 1320px) {
    height: 820px;
    width: 1320px;
    display: grid;
    grid-template-columns: 5fr 1fr 10fr;
    grid-template-rows: 1fr 7fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  } ;
`

const PreviewContainer = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  @media screen and (min-width: 1320px) {
    grid-area: 1 / 1 / 3 / 2;
  } ;
`

const CoinContainer = styled.div`
  display: flex;
  justify-content: center;
  grid-area: 1 / 2 / 2 / 3;
  @media screen and (min-width: 1320px) {
    grid-area: 1 / 2 / 3 / 3;
  } ;
`
const EyesAndSkinContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`
const PixelsAndSaveContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  & > * {
    width: 50%;
  }
`

export {
  ImageHoldingGrid,
  InterfaceContainer,
  PreviewContainer,
  CoinContainer,
  EyesAndSkinContainer,
  PixelsAndSaveContainer,
}
