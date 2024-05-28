import styled from '@emotion/styled'
const OuterContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 1320px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 1320px) {
    margin-top: 16px;
    grid-area: 4 / 1 / 5 / 3;
    width: calc(100% - 32px);
    padding: 8px 16px;
  }
`
const OuterBorder = styled.div`
  width: calc(100% - 16px);
  height: 120px;
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
  @media screen and (max-width: 1320px) {
    width: 100%;
  }
`

const InnerContainer = styled.div`
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  background-color: ${({ theme }) => theme.palette.background.default};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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
export { OuterBorder, InnerContainer, OuterContainer }
