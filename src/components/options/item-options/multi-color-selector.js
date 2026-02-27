import React, { useEffect, useState } from 'react'
import colors from '../../../utils/colors'
import SingleColorSelector from './single-color-selector'
import data from '../../../utils/dataV2.js'
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
  setSelectionType,
  selectionType,
}) => {
  const selectedLayer = useLayerStore((state) => state.selectedLayer)
  const layerArr = useLayerStore((state) => state.layerArr)
  const setSecondary = useLayerStore((state) => state.setSecondary)
  const [open, setOpen] = useState(false)
  const isMobile = window.screen.width < 900

  const currentLayer = layerArr[selectedLayer]
  const { layerType, assetName, secondary } = currentLayer
  const dataColors = data[layerType][assetName]
  const secondaryColorOptions = dataColors.filter(
    (colorElement) => colorElement.substring(0, 7) === 'seconda'
  )

  const [colorHex, setColorHex] = useState(
    colors.find((colorObject) => colorObject.fileName === secondary).hex
  )
  const currentColorIndex = secondaryColorOptions.indexOf(secondary)

  const incrementSecondaryColor = () => {
    if (currentColorIndex === secondaryColorOptions.length - 1) {
      setSecondary(secondaryColorOptions[0])
    } else {
      setSecondary(secondaryColorOptions[currentColorIndex + 1])
    }
  }
  const decrementSecondaryColor = () => {
    if (currentColorIndex === 0) {
      setSecondary(secondaryColorOptions[secondaryColorOptions.length - 1])
    } else {
      setSecondary(secondaryColorOptions[currentColorIndex - 1])
    }
  }

  useEffect(() => {
    const colorObject = colors.find(
      (colorObject) => colorObject.fileName === secondary
    )
    setColorHex(colorObject ? colorObject.hex : colors[0].hex)
  }, [secondary])

  return (
    <>
      <SingleColorContainer>
        <SingleColorSelector
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
