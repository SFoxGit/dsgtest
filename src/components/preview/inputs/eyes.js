import React, { useState, useEffect } from 'react'
import useLayerStore from '../../../utils/store'
import data from '../../../utils/dataV2'
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
  const primaryColorOptions = data.Body['Etc_-_Eye_Color'].filter(
    (colorElement) => colorElement.substring(0, 7) === 'primary'
  )
  const splitPrimary = primaryColorOptions.map((colorOption) => {
    const optionSplit = colorOption.split('_')
    return optionSplit[1]
  })

  const AddEyeLayer = () => {
    addLayer({
      layerType: 'Body',
      assetName: 'Etc_-_Eye_Color',
      color: 'Black.png',
      isLocked: false,
      display: true,
      secondary: 'Black.png',
      additional: [],
    })
  }
  const IncrementEyeColor = () => {
    const eyeIndex = layerArr.findIndex(
      (layer) => layer.assetName === 'Etc_-_Eye_Color'
    )
    if (eyeIndex > -1) {
      const eyeColor = layerArr[eyeIndex].color
      const currentColorIndex = splitPrimary.findIndex(
        (color) => color === eyeColor
      )
      const currentLayer = layerArr[eyeIndex]
      if (currentColorIndex < splitPrimary.length - 1) {
        currentLayer.color = splitPrimary[currentColorIndex + 1]
        currentLayer.secondary = splitPrimary[currentColorIndex + 1]
      } else {
        currentLayer.color = splitPrimary[0]
        currentLayer.secondary = splitPrimary[0]
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
      const currentColorIndex = splitPrimary.findIndex(
        (color) => color === eyeColor
      )
      const currentLayer = layerArr[eyeIndex]
      if (currentColorIndex === 0) {
        currentLayer.color = splitPrimary[splitPrimary - 1]
        currentLayer.secondary = splitPrimary[splitPrimary - 1]
      } else {
        currentLayer.color = splitPrimary[currentColorIndex - 1]
        currentLayer.secondary = splitPrimary[currentColorIndex - 1]
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
