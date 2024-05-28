import { useState, useEffect } from 'react'
import useLayerStore from '../../../utils/store'
import data from '../../../utils/dataV2.js'
import colors from '../../../utils/colors'
import DarkBorder from '../../border-container/dark-border-container'
import {
  EyesContainer,
  PreviewContainer,
  TextContainer,
  LeftArrow,
  RightArrow,
  ColorPreview,
  ButtonContainer,
  InnerContainer,
} from './eyes.style'

const Eyes = () => {
  const addLayer = useLayerStore((state) => state.addLayer)
  const layerArr = useLayerStore((state) => state.layerArr)
  const updateLayer = useLayerStore((state) => state.updateLayer)
  const [hex, setHex] = useState('#393939')
  const primaryColorOptions = data.Physique['Etc_-_Eye_Color'].filter(
    (colorElement) => colorElement.substring(0, 7) === 'primary'
  )

  const AddEyeLayer = () => {
    addLayer({
      layerType: 'Physique',
      assetName: 'Etc_-_Eye_Color',
      color: 'primary_Black.png',
      isLocked: false,
      display: true,
      secondary: 'secondary_Black.png',
    })
  }
  const IncrementEyeColor = () => {
    const eyeIndex = layerArr.findIndex(
      (layer) => layer.assetName === 'Etc_-_Eye_Color'
    )
    if (eyeIndex > -1) {
      const eyeColor = layerArr[eyeIndex].color
      const currentColorIndex = primaryColorOptions.findIndex(
        (color) => color === eyeColor
      )
      const currentLayer = layerArr[eyeIndex]
      if (currentColorIndex < primaryColorOptions.length - 1) {
        currentLayer.color = primaryColorOptions[currentColorIndex + 1]
        currentLayer.secondary = primaryColorOptions[currentColorIndex + 1]
      } else {
        currentLayer.color = primaryColorOptions[0]
        currentLayer.secondary = primaryColorOptions[0]
      }
      updateLayer(currentLayer)
    } else {
      AddEyeLayer()
    }
  }
  const DecrementEyeColor = () => {
    const eyeIndex = layerArr.findIndex(
      (layer) => layer.assetName === 'Etc_-_Eye_Color'
    )
    if (eyeIndex > -1) {
      const eyeColor = layerArr[eyeIndex].color
      const currentColorIndex = primaryColorOptions.findIndex(
        (color) => color === eyeColor
      )
      const currentLayer = layerArr[eyeIndex]
      if (currentColorIndex === 0) {
        currentLayer.color = primaryColorOptions[primaryColorOptions - 1]
        currentLayer.secondary = primaryColorOptions[primaryColorOptions - 1]
      } else {
        currentLayer.color = primaryColorOptions[currentColorIndex - 1]
        currentLayer.secondary = primaryColorOptions[currentColorIndex - 1]
      }
      updateLayer(currentLayer)
    } else {
      AddEyeLayer()
    }
  }

  useEffect(() => {
    setHex(
      colors.find(
        (colorObj) =>
          colorObj.fileName ===
          layerArr.find((layer) => layer.assetName === 'Etc_-_Eye_Color')?.color
      )?.hex || '#393939'
    )
  }, [layerArr])

  return (
    <EyesContainer>
      <TextContainer className='font-face-gm'>Eyes</TextContainer>
      <ButtonContainer onClick={() => DecrementEyeColor()}>
        <InnerContainer>
          <LeftArrow />
        </InnerContainer>
      </ButtonContainer>
      <PreviewContainer>
        <DarkBorder>
          <ColorPreview hex={hex} />
        </DarkBorder>
      </PreviewContainer>
      <ButtonContainer onClick={() => IncrementEyeColor()}>
        <InnerContainer>
          <RightArrow />
        </InnerContainer>
      </ButtonContainer>
    </EyesContainer>
  )
}

export default Eyes
