import React from 'react'
import { OuterContainer, InnerContainer } from './index.style'
import DarkBorder from '../../border-container/dark-border-container'
import RandomButton from './random-button'
import SaveButton from './save'
const RandomSaveContainer = () => {
  return (
    <OuterContainer>
      <DarkBorder>
        <InnerContainer>
          <RandomButton />
          <SaveButton />
        </InnerContainer>
      </DarkBorder>
    </OuterContainer>
  )
}

export default RandomSaveContainer
