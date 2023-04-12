import styled from '@emotion/styled'

const OuterContainer = styled.div`
  width: calc(100% - 16px);
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: space-evenly;
`
const PreviewContainer = styled.div`
  height: 64px;
  width: 64px;
`

export { OuterContainer, InnerContainer, PreviewContainer }
