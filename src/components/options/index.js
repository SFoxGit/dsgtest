import React from 'react'
import Options from './options'
import HeadOptions from './head'
import useOptionsStore from './utils/options-store'

const OptionsMenu = () => {
  const optionsState = useOptionsStore((state) => state.optionsState)

  switch (optionsState) {
    case 'main':
      return <Options />
    case 'head':
      return <HeadOptions />
    default:
      return <></>
  }
}

export default OptionsMenu