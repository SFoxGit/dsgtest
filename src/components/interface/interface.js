import React from 'react'
import ItemContainer from '../item-container/ItemContainer'
import useLayerStore from '../../utils/store'
import OptionsMenu from '../options/index'
import TabletHeader from '../tablet-header/tablet-header'
import Preview from '../preview/preview'
import { InterfaceContainer, CoinContainer } from './styles'

export default function Interface() {
  const layerArr = useLayerStore((state) => state.layerArr)

  return (
    <InterfaceContainer>
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
      <CoinContainer>
        <ItemContainer layerArr={layerArr} />
      </CoinContainer>
      <TabletHeader />
      <OptionsMenu />
    </InterfaceContainer>
  )
}
