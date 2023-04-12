import React from 'react'
import { InnerContainer } from './item-select-style'
import BorderContainer from '../../border-container/border-container'
import IndividualAsset from '../item-select-modal/individual-asset'

const ItemSelect = ({ options, layerType }) => {
  return (
    <BorderContainer>
      <InnerContainer>
        {options.map((asset, index) => (
          <IndividualAsset
            asset={asset}
            layerType={layerType}
            key={'asset#' + index}
          />
        ))}
      </InnerContainer>
    </BorderContainer>
  )
}

export default ItemSelect
