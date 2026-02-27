import React, { useEffect, useState } from 'react'
import { InnerContainer } from './item-select-style'
import BorderContainer from '../../border-container/border-container'
import IndividualColor from '../color-select-modal/individual-color'
import data from '../../../utils/dataV2.js'

const ColorSelect = ({ currentLayer, primary }) => {
  const { layerType, assetName, color, secondary } = currentLayer
  const dataColors = data[layerType][assetName]
  const [options, setOptions] = useState()
  useEffect(() => {
    if (!primary) {
      const secondaryColorOptionsCheck = dataColors.filter(
        (colorElement) => colorElement.substring(0, 7) === 'seconda'
      )
      setOptions(secondaryColorOptionsCheck)
    } else {
        const primaryColorOptions = dataColors.filter(
          (colorElement) => colorElement.substring(0, 7) === 'primary'
        )
        const colorChecked =
          dataColors[0].substring(0, 7) === 'primary' ? primaryColorOptions : dataColors
       setOptions(colorChecked)
      
    }
  }, [dataColors, primary])
  return (
    <BorderContainer>
      <InnerContainer>
        {options?.map((option, index) => (
          <IndividualColor
            color={option}
            key={'color#' + index}
            primary={primary}
            selection={primary ? color : secondary}
          />
        ))}
      </InnerContainer>
    </BorderContainer>
  )
}

export default ColorSelect
