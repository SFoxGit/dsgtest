import Modal from '@mui/material/Modal'
import IndividualColor from './individual-color'
import BorderContainer from '../../border-container/border-container'
import {
  StyledContainer,
  InnerModal,
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
