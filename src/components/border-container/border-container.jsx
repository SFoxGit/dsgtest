import {
  OuterContainer,
  StyledBorder,
  InnerContainer,
} from './border-container.style'

const BorderContainer = (props) => {
  return (
    <OuterContainer>
      <StyledBorder outer={props.outer}>
        <InnerContainer inner={props.inner}>{props.children}</InnerContainer>
      </StyledBorder>
    </OuterContainer>
  )
}

export default BorderContainer
