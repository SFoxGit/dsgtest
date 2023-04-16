import React, { useEffect, useState } from 'react'
import colors from '../../../utils/colors'
import useLayerStore from '../../../utils/store'
import ColorSelectModal from '../color-select-modal/color-select-modal'

import {
  AssetPreview,
  AssetBorder,
  LeftArrow,
  RightArrow,
  ColorPreview,
  PrimaryContainer,
  ButtonContainer,
} from './item-options.style'

const SingleColorSelector = ({
  colorOptions,
  primaryColor,
  setPrimaryColor,
  setSelectionType,
  selectionType
}) => {
  const [colorHex, setColorHex] = useState(
    colors.find((colorObject) => colorObject.fileName === primaryColor).hex
  )
  const [open, setOpen] = useState(false)
  const setColor = useLayerStore((state) => state.setColor)
  const currentColorIndex = colorOptions.indexOf(primaryColor)
  const isMobile = window.screen.width < 900

  const incrementColor = () => {
    if (currentColorIndex === colorOptions.length - 1) {
      setPrimaryColor(colorOptions[0])
      setColor(colorOptions[0])
    } else {
      setPrimaryColor(colorOptions[currentColorIndex + 1])
      setColor(colorOptions[currentColorIndex + 1])
    }
  }
  const decrementColor = () => {
    if (currentColorIndex === 0) {
      setPrimaryColor(colorOptions[colorOptions.length - 1])
      setColor(colorOptions[colorOptions.length - 1])
    } else {
      setPrimaryColor(colorOptions[currentColorIndex - 1])
      setColor(colorOptions[currentColorIndex - 1])
    }
  }
  useEffect(() => {
    const colorObject = colors.find(
      (colorObject) => colorObject.fileName === primaryColor
    )
    setColorHex(colorObject ? colorObject.hex : colors[0].hex)
  }, [primaryColor])
  return (
    <PrimaryContainer item xs={12}>
      <ButtonContainer onClick={() => decrementColor()}>
        <LeftArrow />
      </ButtonContainer>
      <AssetBorder isSelected={selectionType === 'colorPrimary'}>
        <AssetPreview
          onClick={
            isMobile
              ? () => setOpen(true)
              : () => setSelectionType('colorPrimary')
          }
        >
          {colorHex && <ColorPreview color={colorHex} />}
        </AssetPreview>
      </AssetBorder>
      <ButtonContainer onClick={() => incrementColor()}>
        <RightArrow />
      </ButtonContainer>
      <ColorSelectModal
        open={open}
        onClose={() => setOpen(false)}
        options={colorOptions}
        primary={true}
      />
    </PrimaryContainer>
  )
}

export default SingleColorSelector
