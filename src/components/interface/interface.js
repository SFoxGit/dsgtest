import React from 'react'
import ItemContainer from '../item-container/ItemContainer'
import useLayerStore from '../../utils/store'
import OptionsMenu from '../options/index'
import TabletHeader from '../tablet-header/tablet-header'
import Preview from '../preview/preview'
import { InterfaceContainer, CoinContainer } from './styles'
import ConnectWithUs from '../preview/connect/connect'
import RandomSaveContainer from '../preview/random-save'
import ExpandButton from '../expand-button/expand-button'

export default function Interface() {
  const layerArr = useLayerStore((state) => state.layerArr)
  const isMobile = window.screen.width < 920

  return (
    <InterfaceContainer>
      {isMobile && <ExpandButton />}
      <Preview />
      {/* <PreviewContainer>
        <ImageHoldingGrid>
          <Canvas srcImage={imageConverted} pixels={pixels} />
        </ImageHoldingGrid>
        <EyesAndSkinContainer>
          <Eyes />
          <Skin />
        </EyesAndSkinContainer>
        <PixelsAndSaveContainer>
          <Button variant='contained' onClick={() => exportAsImage('sprite')}>
            <Typography variant='body1'>
              <DownloadIcon />
            </Typography>
          </Button>
        </PixelsAndSaveContainer>
        <RandomButton layerArr={layerArr} />
      </PreviewContainer> */}
      {!isMobile && (
        <CoinContainer>
          <ItemContainer layerArr={layerArr} />
        </CoinContainer>
      )}
      <TabletHeader />
      <OptionsMenu />
      {isMobile && (
        <>
          <RandomSaveContainer />
          <ConnectWithUs />
        </>
      )}
    </InterfaceContainer>
  )
}
