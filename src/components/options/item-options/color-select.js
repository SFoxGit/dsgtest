import React, { useEffect, useState } from 'react'
import { InnerContainer } from './item-select-style'
import BorderContainer from '../../border-container/border-container'
import IndividualColor from '../color-select-modal/individual-color'
import data from '../../../utils/dataV2'

const ColorSelect = ({ currentLayer, primary }) => {
  const { layerType, assetName } = currentLayer
  const dataColors = data[layerType][assetName]
  const [options, setOptions] = useState()
  useEffect(() => {
    if (!primary) {
      const secondaryColorOptionsCheck = dataColors.filter(
        (colorElement) => colorElement.substring(0, 7) === 'seconda'
      )
      const splitSecondary = secondaryColorOptionsCheck.map((colorOption) => {
        const optionSplit = colorOption.split('_')
        return optionSplit[1]
      })
      setOptions(splitSecondary)
    } else {
        const primaryColorOptions = dataColors.filter(
          (colorElement) => colorElement.substring(0, 7) === 'primary'
        )
        const splitPrimary = primaryColorOptions.map((colorOption) => {
          const optionSplit = colorOption.split('_')
          return optionSplit[1]
        })
        const colorChecked =
          dataColors[0].substring(0, 7) === 'primary' ? splitPrimary : dataColors
       setOptions(colorChecked)
      
    }
  }, [dataColors, primary])
  return (
    <BorderContainer>
      <InnerContainer>
        {options?.map((color, index) => (
          <IndividualColor
            color={color}
            key={'color#' + index}
            primary={primary}
          />
        ))}
      </InnerContainer>
    </BorderContainer>
  )
}

export default ColorSelect
