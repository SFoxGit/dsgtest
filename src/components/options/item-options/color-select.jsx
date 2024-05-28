import { useEffect, useState } from 'react'
import BorderContainer from '../../border-container/border-container.jsx'
import IndividualColor from '../color-select-modal/individual-color'
import data from '../../../utils/dataV2.js'
import { InnerContainer } from './item-select-style'

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
        dataColors[0].substring(0, 7) === 'primary'
          ? primaryColorOptions
          : dataColors
      setOptions(colorChecked)
    }
    return () => {
      // Cleanup function to clear data
      setOptions()
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
