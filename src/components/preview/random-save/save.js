import React from 'react'
import styled from '@emotion/styled'
import saveIcon from '../../../monochrome/light-borderless/save.png'
import { PreviewContainer } from './index.style'
import DarkBorder from '../../border-container/dark-border-container'

const SaveIcon = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${saveIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
`

const SaveButton = () => {
  const downloadPNG = async () => {
    const canvas = document.getElementById('canvas')
    const image = await canvas.toDataURL()
    const a = document.createElement('a')
    a.href = image
    a.download = 'qr-code-maker.png'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }
  return (
    <PreviewContainer onClick={() => downloadPNG()}>
      <DarkBorder>
        <SaveIcon />
      </DarkBorder>
    </PreviewContainer>
  )
}

export default SaveButton
