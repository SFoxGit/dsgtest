import React from 'react'
import data from '../../../utils/dataV2.js'
import useLayerStore from '../../../utils/store'
import RandomizerTool from '../../../utils/randomizer-tool'
import styled from '@emotion/styled'
import randomIcon from '../../../monochrome/light-borderless/random.png'
import { PreviewContainer } from './index.style'
import DarkBorder from '../../border-container/dark-border-container'
import Tooltip from '@mui/material/Tooltip'

const RandomIcon = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${randomIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
`
const RandomButton = () => {
  const layerArr = useLayerStore((state) => state.layerArr)
  const setLayerArr = useLayerStore((state) => state.setLayerArr)

  const randomizer = () => {
    layerArr.forEach((layer, index) => {
      if (index !== 0 && !layer.isLocked) {
        const newLayer = RandomizerTool(layer.layerType)
        const colorOptions = data[layer.layerType][newLayer.asset]
        const randomColor = colorOptions.includes('swarthy.png')
          ? layerArr[0].color
          : newLayer.color
        layerArr[index].assetName = newLayer.asset
        layerArr[index].color = randomColor
        layerArr[index].secondary = newLayer.secondary
        setLayerArr([...layerArr])
      }
    })
  }

  return (
    <PreviewContainer onClick={() => randomizer()}>
      <DarkBorder>
        <Tooltip title='Randomize all unlocked layers'>
          <RandomIcon />
        </Tooltip>
      </DarkBorder>
    </PreviewContainer>
  )
}

export default RandomButton
