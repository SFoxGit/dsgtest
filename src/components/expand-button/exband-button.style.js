import DoubleRight from '../../monochrome/borderless/double_right.png'
import DoubleLeft from '../../monochrome/borderless/double_left.png'
import styled from '@emotion/styled'

const ArrowsIcon = styled.div`
  width: 75px;
  height: 45px;
  background-image: url(${({ open }) => (open ? DoubleLeft : DoubleRight)});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  image-rendering: pixelated;
`
const StickyPosition = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  height: 100vh;
  display: flex;
  flex-direction: row;
`
const StyledArrowContainer = styled.div`
  margin: 2px;
  border: 2px solid white;
  border-radius: 4px;
  padding: 4px;
  height: 53px;
`

export { ArrowsIcon, StickyPosition, StyledArrowContainer }
