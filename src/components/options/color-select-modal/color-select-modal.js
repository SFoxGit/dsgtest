import React from 'react'
import Modal from '@mui/material/Modal'
import {
  StyledContainer,
  InnerModal,
} from '../item-select-modal/item-select-modal.style'
import IndividualColor from './individual-color'
import BorderContainer from '../../border-container/border-container'
import {
  CloseRow,
  CloseButton,
} from '../item-select-modal/item-select-modal.style'

const ColorSelectModal = ({ open, onClose, options, primary }) => {
  return (
    <Modal open={open} onClose={onClose} hideBackdrop disableAutoFocus>
      <StyledContainer>
        <BorderContainer>
          <InnerModal>
            <CloseRow>
              <CloseButton onClick={onClose} />
            </CloseRow>
            {options.map((colorOption, index) => (
              <IndividualColor
                key={'color#' + index}
                color={colorOption}
                primary={primary}
              />
            ))}
          </InnerModal>
        </BorderContainer>
      </StyledContainer>
    </Modal>
  )
}

export default ColorSelectModal
