import React, { useState } from 'react'
import Modal from '@mui/material/Modal'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import BorderContainer from '../../border-container/border-container'
import {
  StyledContainer,
  InnerModal,
  CloseRow,
  CloseButton,
  SaveIcon,
  SelectStateRow,
  SaveImageContent,
  InputRow,
  TextContainer,
  StyledTextField,
  ButtonContainer,
} from './save-modal-style'
import useLayerStore from '../../../utils/store'

const SaveModal = ({ open, onClose }) => {
  const { pixels, setPixels, name, setName, layerArr } = useLayerStore(
    (state) => ({
      pixels: state.pixels,
      setPixels: state.setPixels,
      name: state.name,
      setName: state.setName,
      layerArr: state.layerArr,
    })
  )
  const currentSprites = JSON.parse(localStorage.getItem('Sprites')) || {}
  const [selection, setSelection] = useState('print')
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
  const saveConfig = () => {
    currentSprites[name] = layerArr
    localStorage.setItem('Sprites', JSON.stringify(currentSprites))
  }

  const handleToggleChange = (value) => {
    value !== selection && setSelection(value)
  }
  return (
    <Modal open={open} onClose={onClose}>
      <StyledContainer>
        <BorderContainer>
          <InnerModal>
            <CloseRow>
              <CloseButton onClick={onClose} />
            </CloseRow>
            <SelectStateRow>
              <ToggleButtonGroup
                value={selection}
                exclusive
                onChange={(e) => handleToggleChange(e.target.value)}
              >
                <ToggleButton value='print'>Save Image</ToggleButton>
                <ToggleButton value='save'>Save Config</ToggleButton>
                <ToggleButton value='export'>Export Code</ToggleButton>
              </ToggleButtonGroup>
            </SelectStateRow>
            {selection === 'print' && (
              <SaveImageContent>
                <InputRow>
                  <TextContainer className='font-face-gm'>Name:</TextContainer>
                  <StyledTextField
                    id='name-controlled'
                    value={name}
                    placeholder='Sprite Name'
                    onChange={(event) => {
                      setName(event.target.value)
                    }}
                  />
                </InputRow>
                <InputRow>
                  <TextContainer className='font-face-gm'>
                    Pixels:
                  </TextContainer>
                  <StyledTextField
                    type='number'
                    value={pixels}
                    onChange={(event) => {
                      setPixels(event.target.value)
                    }}
                  />
                </InputRow>
                <ButtonContainer onClick={() => downloadPNG()}>
                  <SaveIcon />
                </ButtonContainer>
              </SaveImageContent>
            )}
            {selection === 'save' && (
              <SaveImageContent>
                <InputRow>
                  <TextContainer className='font-face-gm'>Name:</TextContainer>
                  <StyledTextField
                    id='name-controlled'
                    value={name}
                    placeholder='Sprite Name'
                    onChange={(event) => {
                      setName(event.target.value)
                    }}
                  />
                </InputRow>
                <ButtonContainer onClick={() => saveConfig()}>
                  <SaveIcon />
                </ButtonContainer>
              </SaveImageContent>
            )}
            {selection === 'export' && (
              <SaveImageContent>
                <ButtonContainer
                  onClick={() =>
                    navigator.clipboard.writeText(JSON.stringify(layerArr))
                  }
                >
                  <SaveIcon />
                </ButtonContainer>
              </SaveImageContent>
            )}
          </InnerModal>
        </BorderContainer>
      </StyledContainer>
    </Modal>
  )
}

export default SaveModal
