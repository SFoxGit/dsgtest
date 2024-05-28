import Eyes from './eyes'
import Skin from './skin'
import { OuterBorder, InnerContainer, OuterContainer } from './input.style'

const Inputs = () => {
  return (
    <OuterContainer>
      <OuterBorder>
        <InnerContainer>
          <Eyes />
          <Skin />
        </InnerContainer>
      </OuterBorder>
    </OuterContainer>
  )
}

export default Inputs
