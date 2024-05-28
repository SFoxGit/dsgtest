import { lazy } from 'react'
import useOptionsStore from './utils/options-store'
import useLayerStore from '../../utils/store'
const OptionsSearch = lazy(() => import('./options-search'))
const ItemOptions = lazy(() => import('./item-options/item-options'))
const Options = lazy(() => import('./options'))

const OptionsMenu = () => {
  const optionsState = useOptionsStore((state) => state.optionsState)
  const searchInput = useLayerStore((state) => state.searchInput)

  if (searchInput !== '' && optionsState !== 'item') {
    return <OptionsSearch />
  }

  switch (optionsState) {
    case 'main':
      return <Options />
    case 'item':
      return <ItemOptions />
    default:
      return <></>
  }
}

export default OptionsMenu
