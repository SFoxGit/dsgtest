import React from 'react'
import { InnerContainer } from './item-select-style'
import BorderContainer from '../../border-container/border-container'
import IndividualAsset from '../item-select-modal/individual-asset'

const ItemSelect = ({ options, layerType, itemType }) => {
  return (
    <BorderContainer>
      <InnerContainer>
        {options.map((asset, index) => (
          <IndividualAsset
            asset={asset}
            layerType={layerType}
            key={'asset#' + index}
            isSelected={itemType === asset}
          />
        ))}
      </InnerContainer>
    </BorderContainer>
  )
}

export default ItemSelect
