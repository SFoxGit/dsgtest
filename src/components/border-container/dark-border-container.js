import React from 'react'
import { OuterBorder, InnerContainer } from './dark-border-container.style'
const DarkBorder = (props) => {
  return (
    <OuterBorder>
      <InnerContainer>{props.children}</InnerContainer>
    </OuterBorder>
  )
}

export default DarkBorder
