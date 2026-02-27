import React from 'react'
import styled from '@emotion/styled'
import clearAllIcon from '../../../monochrome/light-borderless/clear_all.png'

import { PreviewContainer } from './index.style'
import DarkBorder from '../../border-container/dark-border-container'
import Tooltip from '@mui/material/Tooltip'
import useLayerStore from '../../../utils/store'
import useOptionsStore from '../../options/utils/options-store'

const ClearIcon = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${clearAllIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
`

const ClearAll = () => {
  const layerArr = useLayerStore((state) => state.layerArr)
  const setLayerArr = useLayerStore((state) => state.setLayerArr)
  const setOptionsState = useOptionsStore((state) => state.setOptionsState)
  const handleClick = () => {
    setOptionsState('main')
    setLayerArr([layerArr[0]])
  }
  return (
    <PreviewContainer onClick={() => handleClick()}>
      <DarkBorder>
        <Tooltip title='Clear all assets'>
          <ClearIcon />
        </Tooltip>
      </DarkBorder>
    </PreviewContainer>
  )
}

export default ClearAll
