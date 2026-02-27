import React, { useEffect, useState } from 'react'
import useLayerStore from '../../../utils/store'
import SkinColors from '../../../utils/skinColors'
import DarkBorder from '../../border-container/dark-border-container'

import {
  EyesContainer,
  TextContainer,
  LeftArrow,
  RightArrow,
  ColorPreview,
  PreviewContainer,
  ButtonContainer,
  InnerContainer,
} from './eyes.style'

const Skin = () => {
  const layerArr = useLayerStore((state) => state.layerArr)
  const updateLayer = useLayerStore((state) => state.updateLayer)
  const [hex, setHex] = useState('#f3d6ba')

  const IncrementSkinColor = () => {
    const copyLayer = layerArr[0]
    const skinIndex = SkinColors.findIndex(
      (skinColor) => skinColor.fileName === copyLayer.color
    )
    if (skinIndex === SkinColors.length - 1) {
      copyLayer.color = SkinColors[0].fileName
      updateLayer(copyLayer)
    } else {
      copyLayer.color = SkinColors[skinIndex + 1].fileName
      updateLayer(copyLayer)
    }
  }
  const DecrementSkinColor = () => {
    const copyLayer = layerArr[0]
    const skinIndex = SkinColors.findIndex(
      (skinColor) => skinColor.fileName === copyLayer.color
    )
    if (skinIndex === 0) {
      copyLayer.color = SkinColors[SkinColors.length - 1].fileName
      updateLayer(copyLayer)
    } else {
      copyLayer.color = SkinColors[skinIndex - 1].fileName
      updateLayer(copyLayer)
    }
  }

  useEffect(() => {
    const skinColorObject = SkinColors.find((skinObj) => skinObj.fileName === layerArr[0].color)
    if (skinColorObject) {
      setHex(skinColorObject.hex)
    }
  }, [layerArr])

  return (
    <EyesContainer>
      <TextContainer className='font-face-gm'>Skin</TextContainer>
      <ButtonContainer onClick={() => DecrementSkinColor()}>
        <InnerContainer>
          <LeftArrow />
        </InnerContainer>
      </ButtonContainer>
      <PreviewContainer>
        <DarkBorder>
          <ColorPreview hex={hex} />
        </DarkBorder>
      </PreviewContainer>
      <ButtonContainer onClick={() => IncrementSkinColor()}>
        <InnerContainer>
          <RightArrow />
        </InnerContainer>
      </ButtonContainer>
    </EyesContainer>
  )
}

export default Skin
