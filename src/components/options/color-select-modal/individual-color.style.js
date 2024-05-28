import styled from '@emotion/styled'
import Hidden from '../../../monochrome/borderless/hidden.png'

const StyledColorContainer = styled.div`
  width: 48px;
  height: 48px;
  margin: 4px;
  image-rendering: pixelated;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`
const ColorImage = styled.div`
  width: 32px;
  height: 32px;
  ${(props) => props.hex ? 'background-color: ' + props.hex :  `background-image: url(${Hidden})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  clip-path: polygon(
    0px 6px,
    3px 6px,
    3px 3px,
    6px 3px,
    6px 0px,
    calc(100% - 6px) 0px,
    calc(100% - 6px) 3px,
    calc(100% - 3px) 3px,
    calc(100% - 3px) 6px,
    100% 6px,
    100% calc(100% - 6px),
    calc(100% - 3px) calc(100% - 6px),
    calc(100% - 3px) calc(100% - 3px),
    calc(100% - 6px) calc(100% - 3px),
    calc(100% - 6px) 100%,
    6px 100%,
    6px calc(100% - 3px),
    3px calc(100% - 3px),
    3px calc(100% - 6px),
    0px calc(100% - 6px)
  );
`

export { StyledColorContainer, ColorImage }
