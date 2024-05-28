import Modal from '@mui/material/Modal'
import IndividualAsset from './individual-asset'
import BorderContainer from '../../border-container/border-container'
import {
  StyledContainer,
  InnerModal,
  CloseRow,
  CloseButton,
  AssetContainer
} from './item-select-modal.style'

const ItemSelectModal = ({ open, onClose, options, layerType }) => {
  return (
    <Modal open={open} onClose={onClose} hideBackdrop disableAutoFocus>
      <StyledContainer>
        <BorderContainer>
          <InnerModal>
            <CloseRow>
              <CloseButton onClick={onClose} />
            </CloseRow>
            <AssetContainer>
              {options.map((asset, index) => (
                <IndividualAsset
                  key={'asset#' + index}
                  asset={asset}
                  layerType={layerType}
                />
              ))}
            </AssetContainer>
          </InnerModal>
        </BorderContainer>
      </StyledContainer>
    </Modal>
  )
}

export default ItemSelectModal
