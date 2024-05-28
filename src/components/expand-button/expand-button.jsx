import { useState } from 'react'
import CoinModal from './coin-modal/coin-modal'
import {
  ArrowsIcon,
  StickyPosition,
  StyledArrowContainer,
} from './exband-button.style'

const ExpandButton = () => {
  const [open, setOpen] = useState(false)
  return (
    <StickyPosition>
      {open && <CoinModal />}
      <StyledArrowContainer>
        <ArrowsIcon open={open} onClick={() => setOpen(!open)} />
      </StyledArrowContainer>
    </StickyPosition>
  )
}

export default ExpandButton
