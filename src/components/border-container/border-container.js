import React from 'react'
import {
  OuterContainer,
  StyledBorder,
  InnerContainer,
} from './border-container.style'

const BorderContainer = (props) => {
  return (
    <OuterContainer>
      <StyledBorder>
        <InnerContainer inner={props.inner}>{props.children}</InnerContainer>
      </StyledBorder>
    </OuterContainer>
  )
}

export default BorderContainer
