import styled from '@emotion/styled'
import Close from '../../monochrome/accept.png'
import Delete from '../../monochrome/borderless/delete.png'
import Up from '../../monochrome/borderless/up.png'
import Down from '../../monochrome/borderless/down.png'

const GridArea = styled.div`
  grid-area: 2 / 1 / 3 / 3;
  @media screen and (min-width: 1320px) {
    grid-area: 1 / 3 / 2 / 4;
  }
`
const OuterContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.primary.main};
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

const BorderContainer = styled.div`
  width: calc(100% - 6px);
  height: calc(100% - 6px);
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

const StyledContainer = styled.div`
  width: calc(100% - 5px);
  height: calc(100% - 5px);
  background-color: ${({ theme }) => theme.palette.primary.main};
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
  @media screen and (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media screen and (min-width: 1320px) {
    display: grid;
    grid-template-columns: repeat(2, 2fr) repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
  & > * {
    image-rendering: pixelated;
  }
`
const CloseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: 1 / 6 / 2 / 7;
  @media screen and (max-width: 900px) {
    grid-area: 2 / 4 / 3 / 5;
  }
`
const CloseButton = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${Close});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
`
const DeleteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: 1 / 5 / 2 / 6;
  @media screen and (max-width: 900px) {
    grid-area: 2 / 3 / 3 / 4;
  }
`

const DeleteButton = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${Delete});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
`
const UpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: 1 / 3 / 2 / 4;
  @media screen and (max-width: 900px) {
    grid-area: 2 / 1 / 3 / 2;
  }
`

const UpButton = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${Up});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  @media screen and (max-width: 900px) {
    grid-area: 2 / 1 / 3 / 2;
  }
`
const DownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: 1 / 4 / 2 / 5;
  @media screen and (max-width: 900px) {
    grid-area: 2 / 2 / 3 / 3;
  }
`

const DownButton = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${Down});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
`

const ButtonContainer = styled.div`
  height: 48px;
  width: 48px;
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
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.primary.alternate};
  }
`

export {
  GridArea,
  OuterContainer,
  BorderContainer,
  StyledContainer,
  CloseButton,
  DeleteButton,
  UpButton,
  DownButton,
  CloseContainer,
  DeleteContainer,
  UpContainer,
  DownContainer,
  ButtonContainer
}
