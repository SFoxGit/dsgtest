import styled from '@emotion/styled'
import Left from '../../../monochrome/borderless/left.png'
import Right from '../../../monochrome/borderless/right.png'

const OuterBorder = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  display: flex;
  justify-content: center;
  align-items: center;
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

const InnerContainer = styled.div`
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  background-color: ${({ theme }) => theme.palette.background.default};
  display: flex;
  justify-content: center;
  align-items: center;
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
  & > * {
    margin: 4px;
  }
`
const TextContainer = styled.div`
  color: ${({ theme }) => theme.palette.white.main};
  display: flex;
  flex-direction: column;
  align-items: center;
`
const LeftArrow = styled.div`
  height: 36px;
  width: 36px;
  background-image: url(${Left});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
`
const RightArrow = styled.div`
  height: 36px;
  width: 36px;
  background-image: url(${Right});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
`
const ColorPreview = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.hex};
`
const PreviewContainer = styled.div`
  height: 48px;
  width: 48px;
`
const EyesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  & > * {
    margin-right: 8px;
  }
`
export {
  OuterBorder,
  InnerContainer,
  TextContainer,
  LeftArrow,
  RightArrow,
  ColorPreview,
  PreviewContainer,
  EyesContainer
}
