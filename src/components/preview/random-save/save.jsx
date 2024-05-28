import { useState } from 'react'
import { PreviewContainer, SaveIcon } from './random-save.style'
import DarkBorder from '../../border-container/dark-border-container'
import Tooltip from '@mui/material/Tooltip'
import SaveModal from './save-modal'

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
