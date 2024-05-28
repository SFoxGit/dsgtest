import { useState } from 'react'
import Tooltip from '@mui/material/Tooltip'
import DarkBorder from '../../border-container/dark-border-container'
import LoadModal from './load-modal'
import { PreviewContainer, LoadIcon } from './random-save.style'

const LoadButton = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <PreviewContainer onClick={() => setOpen(true)}>
        <DarkBorder>
          <Tooltip title='Open load options'>
            <LoadIcon />
          </Tooltip>
        </DarkBorder>
      </PreviewContainer>
      <LoadModal open={open} onClose={() => setOpen(false)} />
    </div>
  )
}

export default LoadButton
