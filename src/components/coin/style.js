import styled from '@emotion/styled'

const BorderContainer = styled.div`
  width: 46px;
  height: 46px;
  background-color: ${({ isSelected, theme }) => isSelected ? theme.palette.orange.main : theme.palette.secondary.main};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ isDragging }) => (isDragging ? 0 : 1)};
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
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.white.alternate};
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
const StyledAsset = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${(props) => props.importedImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  image-rendering: pixelated;
  z-index: 3;
`

export { BorderContainer, StyledAsset, StyledContainer }
