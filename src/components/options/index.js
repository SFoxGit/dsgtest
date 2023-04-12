import React from 'react'
import Options from './options'
import useOptionsStore from './utils/options-store'
import ItemOptions from './item-options/item-options'

const OptionsMenu = () => {
  const optionsState = useOptionsStore((state) => state.optionsState)

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