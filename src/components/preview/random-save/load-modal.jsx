import { useState } from 'react'
import Modal from '@mui/material/Modal'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import BorderContainer from '../../border-container/border-container'
import useLayerStore from '../../../utils/store'
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
  LoadItemButton,
  LoadImageContent,
  DeleteButton,
  AcceptButton,
  AcceptDeleteContainer,
} from './save-modal-style'

const LoadModal = ({ open, onClose }) => {
  const { setLayerArr } = useLayerStore((state) => ({
    setLayerArr: state.setLayerArr,
  }))
  const savedSprites = JSON.parse(localStorage.getItem('Sprites')) || {}
  const [importString, setImportString] = useState('')
  const [selection, setSelection] = useState('print')
  const [currentSprites, setCurrentSprites] = useState(savedSprites)
  const [spriteNames, setSpriteNames] = useState(
    Object.keys(currentSprites) || []
  )
  const handleImport = () => {
    setLayerArr(JSON.parse(importString))
  }
  const loadConfig = (name) => {
    setLayerArr(currentSprites[name])
  }
  const deleteSprite = (name) => {
    const newSpritesArray = currentSprites
    delete newSpritesArray[name]
    localStorage.setItem('Sprites', JSON.stringify(newSpritesArray))
    setCurrentSprites(newSpritesArray)
    setSpriteNames(Object.keys(currentSprites))
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
                <ToggleButton value='upload'>Load Config</ToggleButton>
                <ToggleButton value='import'>Import</ToggleButton>
                <ToggleButton value='premade'>Premades</ToggleButton>
              </ToggleButtonGroup>
            </SelectStateRow>
            {/* Upload From Local Storage */}
            {selection === 'upload' && (
              <LoadImageContent>
                {spriteNames.length > 0 &&
                  spriteNames.map((name, index) => (
                    <LoadItemButton key={'config' + index}>
                      <TextContainer className='font-face-gm'>
                        {name}
                      </TextContainer>
                      <AcceptDeleteContainer>
                        <DeleteButton onClick={() => deleteSprite(name)} />
                        <AcceptButton onClick={() => loadConfig(name)} />
                      </AcceptDeleteContainer>
                    </LoadItemButton>
                  ))}
              </LoadImageContent>
            )}
            {/* Import Config From String */}
            {selection === 'import' && (
              <SaveImageContent>
                <InputRow>
                  <TextContainer className='font-face-gm'>Code:</TextContainer>
                  <StyledTextField
                    id='name-controlled'
                    value={importString}
                    placeholder='Paste Code Here'
                    onChange={(event) => {
                      setImportString(event.target.value)
                    }}
                  />
                </InputRow>
                <ButtonContainer onClick={() => handleImport()}>
                  <SaveIcon />
                </ButtonContainer>
              </SaveImageContent>
            )}
            {/* Premade Configs */}
            {selection === 'premade' && (
              <SaveImageContent>
                <InputRow>COMING SOON</InputRow>
              </SaveImageContent>
            )}
          </InnerModal>
        </BorderContainer>
      </StyledContainer>
    </Modal>
  )
}

export default LoadModal
