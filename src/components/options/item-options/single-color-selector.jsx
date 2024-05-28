import { useEffect, useState } from 'react'
import colors from '../../../utils/colors.js'
import useLayerStore from '../../../utils/store.js'
import ColorSelectModal from '../color-select-modal/color-select-modal.jsx'
import data from '../../../utils/dataV2.js'

import {
  AssetPreview,
  AssetBorder,
  LeftArrow,
  RightArrow,
  ColorPreview,
  PrimaryContainer,
  ButtonContainer,
} from './item-options.style.js'

const SingleColorSelector = ({ setSelectionType, selectionType }) => {
  const setColor = useLayerStore((state) => state.setColor)
  const layerArr = useLayerStore((state) => state.layerArr)
  const selectedLayer = useLayerStore((state) => state.selectedLayer)
  const currentLayer = layerArr[selectedLayer]
  const { layerType, assetName, color } = currentLayer

  const dataColors = data[layerType][assetName]
  const [colorHex, setColorHex] = useState(
    colors.find((colorObject) => colorObject.fileName === color).hex
  )
  const [open, setOpen] = useState(false)
  const colorOptions = dataColors.filter(
    (colorElement) => colorElement.substring(0, 7) === 'primary'
  )
  const currentColorIndex = colorOptions.indexOf(color)
  const isMobile = window.screen.width < 900

  const incrementColor = () => {
    if (currentColorIndex === colorOptions.length - 1) {
      setColor(colorOptions[0])
    } else {
      setColor(colorOptions[currentColorIndex + 1])
    }
  }
  const decrementColor = () => {
    if (currentColorIndex === 0) {
      setColor(colorOptions[colorOptions.length - 1])
    } else {
      setColor(colorOptions[currentColorIndex - 1])
    }
  }
  useEffect(() => {
    const colorObject = colors.find(
      (colorObject) => colorObject.fileName === color
    )
    setColorHex(colorObject ? colorObject.hex : colors[0].hex)
    return () => {
      // Cleanup function to clear data
      setColorHex()
    }
  }, [color])
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
