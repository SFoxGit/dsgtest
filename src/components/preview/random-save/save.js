import React, { useState } from 'react'
import styled from '@emotion/styled'
import saveIcon from '../../../monochrome/light-borderless/save.png'
import { PreviewContainer } from './index.style'
import DarkBorder from '../../border-container/dark-border-container'
import Tooltip from '@mui/material/Tooltip'
import SaveModal from './save-modal'

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
  const [open, setOpen] = useState(false)
  return (
    <>
      <PreviewContainer onClick={() => setOpen(true)}>
        <DarkBorder>
          <Tooltip title='Open save options'>
            <SaveIcon />
          </Tooltip>
        </DarkBorder>
      </PreviewContainer>
      <SaveModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}

export default SaveButton
