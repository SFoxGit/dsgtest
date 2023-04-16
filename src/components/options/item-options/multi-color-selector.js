import React, { useEffect, useState } from 'react'
import colors from '../../../utils/colors'
import SingleColorSelector from './single-color-selector'
import data from '../../../utils/dataV2'
import useLayerStore from '../../../utils/store'
import ColorSelectModal from '../color-select-modal/color-select-modal'

import {
  AssetPreview,
  AssetBorder,
  LeftArrow,
  RightArrow,
  ColorPreview,
  SingleColorContainer,
  SecondaryContainer,
  ButtonContainer,
} from './item-options.style'

const MultiColorSelector = ({
  primaryColor,
  setPrimaryColor,
  setSelectionType,
  selectionType,
}) => {
  const selectedLayer = useLayerStore((state) => state.selectedLayer)
  const layerArr = useLayerStore((state) => state.layerArr)
  const setSecondary = useLayerStore((state) => state.setSecondary)
  const [open, setOpen] = useState(false)
  const isMobile = window.screen.width < 900

  const currentLayer = layerArr[selectedLayer]
  const dataColors = data[currentLayer.layerType][currentLayer.assetName]
  const primaryColorOptions = dataColors.filter(
    (colorElement) => colorElement.substring(0, 7) === 'primary'
  )
  const splitPrimary = primaryColorOptions.map((colorOption) => {
    const optionSplit = colorOption.split('_')
    return optionSplit[1]
  })
  const [colorOptions, setColorOptions] = useState(splitPrimary)

  const secondaryColorOptionsCheck = dataColors.filter(
    (colorElement) => colorElement.substring(0, 7) === 'seconda'
  )
  const splitSecondary = secondaryColorOptionsCheck.map((colorOption) => {
    const optionSplit = colorOption.split('_')
    return optionSplit[1]
  })
  const [secondaryColor, setSecondaryColor] = useState(currentLayer.secondary)

  const [secondaryColorOptions, setSecondaryColorOptions] =
    useState(splitSecondary)
  const [colorHex, setColorHex] = useState(
    colors.find((colorObject) => colorObject.fileName === secondaryColor).hex
  )
  const currentColorIndex = secondaryColorOptions.indexOf(secondaryColor)
  const incrementSecondaryColor = () => {
    if (currentColorIndex === colorOptions.length - 1) {
      setSecondaryColor(secondaryColorOptions[0])
      setSecondary(colorOptions[0])
    } else {
      setSecondaryColor(secondaryColorOptions[currentColorIndex + 1])
      setSecondary(colorOptions[currentColorIndex + 1])
    }
  }
  const decrementSecondaryColor = () => {
    if (currentColorIndex === 0) {
      setSecondaryColor(secondaryColorOptions[secondaryColorOptions.length - 1])
      setSecondary(colorOptions[colorOptions.length - 1])
    } else {
      setSecondaryColor(secondaryColorOptions[currentColorIndex - 1])
      setSecondary(colorOptions[currentColorIndex - 1])
    }
  }
  useEffect(() => {
    const colorObject = colors.find(
      (colorObject) => colorObject.fileName === secondaryColor
    )
    setColorHex(colorObject ? colorObject.hex : colors[0].hex)
  }, [secondaryColor])

  useEffect(() => {
    setSecondaryColor(currentLayer.secondary)
  }, [currentLayer.secondary])

  return (
    <>
      <SingleColorContainer>
        <SingleColorSelector
          colorOptions={colorOptions}
          primaryColor={primaryColor}
          setPrimaryColor={setPrimaryColor}
          inputWidth={6}
          setSelectionType={setSelectionType}
          selectionType={selectionType}
        />
      </SingleColorContainer>

      <SecondaryContainer item xs={12}>
        <ButtonContainer onClick={() => decrementSecondaryColor()}>
          <LeftArrow />
        </ButtonContainer>
        <AssetBorder isSelected={selectionType === 'colorSecondary'}>
          <AssetPreview
            onClick={
              isMobile
                ? () => setOpen(true)
                : () => setSelectionType('colorSecondary')
            }
          >
            {colorHex && <ColorPreview color={colorHex} />}
          </AssetPreview>
        </AssetBorder>
        <ButtonContainer onClick={() => incrementSecondaryColor()}>
          <RightArrow />
        </ButtonContainer>
      </SecondaryContainer>
      <ColorSelectModal
        open={open}
        onClose={() => setOpen(false)}
        options={secondaryColorOptions}
        primary={false}
      />
    </>
  )
}

export default MultiColorSelector
