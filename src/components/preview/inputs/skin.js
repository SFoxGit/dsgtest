import React, { useEffect, useState } from 'react'
import useLayerStore from '../../../utils/store'
import DarkBorder from '../../border-container/dark-border-container'

import {
  EyesContainer,
  TextContainer,
  LeftArrow,
  RightArrow,
  ColorPreview,
  PreviewContainer
} from './eyes.style'

const SkinColors = [
  { name: 'Black', hex: '#343434', file: 'Black.png' },
  { name: 'Blue', hex: '#98b0d8', file: 'Blue.png' },
  { name: 'Brick', hex: '#886746', file: 'Brick.png' },
  { name: 'Bronze', hex: '#ce955c', file: 'Bronze.png' },
  { name: 'Brown', hex: '#754a27', file: 'Brown.png' },
  { name: 'Caucasian', hex: '#e6c8aa', file: 'Caucasian.png' },
  { name: 'Chocolate', hex: '#4c2a1e', file: 'Chocolate.png' },
  { name: 'Dust', hex: '#706e54', file: 'Dust.png' },
  { name: 'Gold', hex: '#e4e96d', file: 'Gold.png' },
  { name: 'Green', hex: '#2e9b5b', file: 'Green.png' },
  { name: 'Grey', hex: '#7b7b7b', file: 'Grey.png' },
  { name: 'Honey', hex: '#a38836', file: 'Honey.png' },
  { name: 'Night', hex: '#3b4c67', file: 'Night.png' },
  { name: 'Olive', hex: '#967644', file: 'Olive.png' },
  { name: 'Pale', hex: '#f3d6ba', file: 'Pale.png' },
  { name: 'Porcelain', hex: '#f4eef2', file: 'Porcelain.png' },
  { name: 'Purple', hex: '#81478e', file: 'Purple.png' },
  { name: 'Red', hex: '#9a2424', file: 'Red.png' },
  { name: 'Skeleton', hex: '#d4d7b1', file: 'Skeleton.png' },
  { name: 'Swarthy', hex: '#8f6527', file: 'Swarthy.png' },
  { name: 'Tan', hex: '#e5b770', file: 'Tan.png' },
]
const Skin = () => {
  const layerArr = useLayerStore((state) => state.layerArr)
  const updateLayer = useLayerStore((state) => state.updateLayer)
  const [hex, setHex] = useState('#f3d6ba')

  const IncrementSkinColor = () => {
    const copyLayer = layerArr[0]
    const skinIndex = SkinColors.findIndex(
      (skinColor) => skinColor.file === copyLayer.color
    )
    if (skinIndex === SkinColors.length - 1) {
      copyLayer.color = SkinColors[0].file
      updateLayer(copyLayer)
    } else {
      copyLayer.color = SkinColors[skinIndex + 1].file
      updateLayer(copyLayer)
    }
  }
  const DecrementSkinColor = () => {
    const copyLayer = layerArr[0]
    const skinIndex = SkinColors.findIndex(
      (skinColor) => skinColor.file === copyLayer.color
    )
    if (skinIndex === 0) {
      copyLayer.color = SkinColors[SkinColors.length - 1].file
      updateLayer(copyLayer)
    } else {
      copyLayer.color = SkinColors[skinIndex - 1].file
      updateLayer(copyLayer)
    }
  }

  useEffect(() => {
    setHex(SkinColors.find((skinObj) => skinObj.file === layerArr[0].color).hex)
  }, [layerArr])

  return (
    <EyesContainer>
      <TextContainer className='font-face-gm'>Skin</TextContainer>
      <LeftArrow onClick={() => IncrementSkinColor()} />
      <PreviewContainer>
        <DarkBorder>
          <ColorPreview hex={hex} />
        </DarkBorder>
      </PreviewContainer>
      <RightArrow onClick={() => DecrementSkinColor()} />
    </EyesContainer>
  )
}

export default Skin
