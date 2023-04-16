import React, { useState } from 'react'
import Modal from '@mui/material/Modal'
import BorderContainer from '../../border-container/border-container'
import {
  StyledContainer,
  InnerModal,
  CloseRow,
  CloseButton,
  SaveIcon,
} from './save-modal-style'
import TextField from '@mui/material/TextField'

const SaveModal = ({ open, onClose }) => {
  const [name, setName] = useState('')
  const downloadPNG = async () => {
    const canvas = document.getElementById('canvas')
    const image = await canvas.toDataURL()
    const a = document.createElement('a')
    a.href = image
    a.download = `${name}.png`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return (
    <Modal open={open} onClose={onClose}>
      <StyledContainer>
        <BorderContainer>
          <InnerModal>
            <CloseRow>
              <CloseButton onClick={onClose} />
            </CloseRow>
            <TextField
              id='name-controlled'
              value={name}
              onChange={(event) => {
                setName(event.target.value)
              }}
            />
            <SaveIcon onClick={() => downloadPNG()} />
          </InnerModal>
        </BorderContainer>
      </StyledContainer>
    </Modal>
  )
}

export default SaveModal
