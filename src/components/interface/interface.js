import React, { useEffect } from 'react'
import ItemContainer from '../item-container/ItemContainer'
import useLayerStore from '../../utils/store'
import OptionsMenu from '../options/index'
import TabletHeader from '../tablet-header/tablet-header'
import Preview from '../preview/preview'
import { InterfaceContainer, CoinContainer } from './styles'
import ConnectWithUs from '../preview/connect/connect'
import RandomSaveContainer from '../preview/random-save'
import ExpandButton from '../expand-button/expand-button'
import Inputs from '../preview/inputs/inputs'
import { useParams } from 'react-router-dom'

export default function Interface() {
  const layerArr = useLayerStore((state) => state.layerArr)
  const setLayerArr = useLayerStore((state) => state.setLayerArr)
  const isMobile = window.screen.width < 920
  const { loadConfig } = useParams()
  useEffect(() => {
    if (loadConfig) {
      setLayerArr(JSON.parse(loadConfig))
    }
  }, [loadConfig, setLayerArr])
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
          <Inputs />
          <RandomSaveContainer />
          <ConnectWithUs />
        </>
      )}
    </InterfaceContainer>
  )
}
