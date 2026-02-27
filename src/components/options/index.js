import React from 'react'
import Options from './options'
import useOptionsStore from './utils/options-store'
import ItemOptions from './item-options/item-options'
import useLayerStore from '../../utils/store'
import OptionsSearch from './options-search'

const OptionsMenu = () => {
  const optionsState = useOptionsStore((state) => state.optionsState)
  const searchInput = useLayerStore((state) => state.searchInput)

  if (searchInput !== '') {
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