import React, { useState } from 'react'
import styled from '@emotion/styled'
import { PreviewContainer } from './index.style'
import DarkBorder from '../../border-container/dark-border-container'
import Tooltip from '@mui/material/Tooltip'
import LoadModal from './load-modal'
import Folder from '../../../monochrome/folder.png'

const LoadIcon = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${Folder});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
`

const LoadButton = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <PreviewContainer onClick={() => setOpen(true)}>
        <DarkBorder>
          <Tooltip title='Open load options'>
            <LoadIcon />
          </Tooltip>
        </DarkBorder>
      </PreviewContainer>
      <LoadModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}

export default LoadButton
