import React, { useEffect, useState } from 'react'
import colors from '../../../utils/colors'
import useLayerStore from '../../../utils/store'
import ColorSelectModal from '../color-select-modal/color-select-modal'

import {
  LeftColorContainer,
  MiddleColor,
  RightColorContainer,
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
}) => {
  const [colorHex, setColorHex] = useState(
    colors.find((colorObject) => colorObject.fileName === primaryColor).hex
  )
  const [open, setOpen] = useState(false)
  const setColor = useLayerStore((state) => state.setColor)
  const currentColorIndex = colorOptions.indexOf(primaryColor)
  const isMobile = window.screen.width < 420

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
    <PrimaryContainer item container xs={12} lg={6}>
      <LeftColorContainer item xs={3}>
        <ButtonContainer onClick={() => decrementColor()}>
          <LeftArrow />
        </ButtonContainer>
      </LeftColorContainer>
      <MiddleColor item xs={6}>
        <AssetBorder>
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
      </MiddleColor>
      <RightColorContainer item xs={3}>
        <ButtonContainer onClick={() => incrementColor()}>
          <RightArrow />
        </ButtonContainer>
      </RightColorContainer>
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
