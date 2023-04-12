import React from 'react'
import Eyes from './eyes'
import Skin from './skin'
import { OuterBorder, InnerContainer } from './input.style'

const Inputs = () => {
  return (
    <OuterBorder>
      <InnerContainer>
        <Eyes />
        <Skin />
      </InnerContainer>
    </OuterBorder>
  )
}

export default Inputs
