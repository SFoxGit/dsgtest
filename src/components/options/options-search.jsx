import { useEffect, useState } from 'react'
import BorderContainer from '../border-container/border-container'
import useLayerStore from '../../utils/store'
import SearchAsset from './search-asset'
import { OptionsContainer, InnerContainer } from './options.style'
import assetArray from '../../utils/assetArray'

const OptionsSearch = () => {
  const [optionsArray, setOptionsArray] = useState([])
  const searchInput = useLayerStore((state) => state.searchInput)

  useEffect(() => {
    const filteredArray = []
    const searchText = searchInput.toLowerCase()
    for (var i = assetArray.length - 1; i >= 0; i--) {
      if (assetArray[i].type.toLowerCase().includes(searchText)) {
        filteredArray.push(assetArray[i])
      } else if (assetArray[i].asset.toLowerCase().includes(searchText)) {
        filteredArray.push(assetArray[i])
      }
      if (i === 0) {
        setOptionsArray(filteredArray)
      }
    }
    return () => {
      // Cleanup function to clear data
      setOptionsArray([])
    }
  }, [searchInput])
  return (
    <OptionsContainer>
      <BorderContainer>
        <InnerContainer>
          {optionsArray?.map((obj, index) => (
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
