import { lazy } from 'react'
import useLayerStore from '../../utils/store'
import OptionsMenu from '../options/index'
import TabletHeader from '../tablet-header/tablet-header'
import { InterfaceContainer, CoinContainer } from './styles'
const Inputs = lazy(() => import('../preview/inputs/inputs'))
const ConnectWithUs = lazy(() => import('../preview/connect/connect'))
const ItemContainer = lazy(() => import('../item-container/ItemContainer'))
const Preview = lazy(() => import('../preview/preview'))
const RandomSaveContainer = lazy(() =>
  import('../preview/random-save/random-save')
)
const ExpandButton = lazy(() => import('../expand-button/expand-button'))

const Interface = () => {
  const layerArr = useLayerStore((state) => state.layerArr)
  const isMobile = window.screen.width < 920

  return (
    <InterfaceContainer>
      {isMobile && <ExpandButton />}
      <Preview />
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

export default Interface
