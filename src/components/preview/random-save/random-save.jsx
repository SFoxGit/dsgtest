import DarkBorder from '../../border-container/dark-border-container'
import RandomButton from './random-button'
import SaveButton from './save'
import ClearAll from './clear-all'
import LoadButton from './load'
import {
  OuterContainer,
  InnerContainer,
  MobileContainer,
  StyledText,
} from './random-save.style'

const RandomSaveContainer = () => {
  const isMobile = window.screen.width < 920

  return (
    <OuterContainer>
      <DarkBorder>
        <InnerContainer>
          <MobileContainer>
            <ClearAll />
            {isMobile && <StyledText>CLEAR ALL</StyledText>}
          </MobileContainer>
          <MobileContainer>
            <RandomButton />
            {isMobile && <StyledText>RANDOMIZE</StyledText>}
          </MobileContainer>
          <MobileContainer>
            <SaveButton />
            {isMobile && <StyledText>SAVE</StyledText>}
          </MobileContainer>
          <MobileContainer>
            <LoadButton />
            {isMobile && <StyledText>LOAD</StyledText>}
          </MobileContainer>
        </InnerContainer>
      </DarkBorder>
    </OuterContainer>
  )
}

export default RandomSaveContainer
