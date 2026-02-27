import React, { useEffect, useState } from 'react'
import { OptionsContainer, InnerContainer } from './options.style'
import BorderContainer from '../border-container/border-container'
import data from '../../utils/dataV2'
import useLayerStore from '../../utils/store'
import SearchAsset from './search-asset'

const OptionsSearch = () => {
  const [optionsArray, setOptionsArray] = useState([])
  const searchInput = useLayerStore((state) => state.searchInput)

  useEffect(() => {
    const assetList = []
    const layerTypes = Object.keys(data)
    if (assetList.length === 0) {
      layerTypes.forEach((layerType) => {
        Object.keys(data[layerType]).forEach((key) => {
          assetList.push({ type: layerType, asset: key })
        })
      })
    }
    const filteredArray = assetList.filter((obj) =>
      obj.asset.toLowerCase().includes(searchInput.toLowerCase())
    )
    setOptionsArray(filteredArray)
  }, [searchInput])
  return (
    <OptionsContainer>
      <BorderContainer>
        <InnerContainer>
          {optionsArray.map((obj, index) => (
            <SearchAsset
              asset={obj.asset}
              layerType={obj.type}
              key={'asset#' + index}
            />
          ))}
        </InnerContainer>
      </BorderContainer>
    </OptionsContainer>
  )
}

export default OptionsSearch
