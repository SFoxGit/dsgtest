import React from 'react'
import { OuterContainer, InnerContainer, MobileContainer } from './index.style'
import DarkBorder from '../../border-container/dark-border-container'
import RandomButton from './random-button'
import SaveButton from './save'
import ClearAll from './clear-all'
import Typography from '@mui/material/Typography'
import styled from '@emotion/styled'
import LoadButton from './load'

const StyledText = styled(Typography)`
  color: ${({ theme }) => theme.palette.white.main};
  font-family: font-face-gm;
`
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
