import styled from '@emotion/styled'

const StyledCoin = styled.img`
  position: absolute;
  width: 60px;
  height: 60px;
  z-index: 2;
`

const StyledAsset = styled.img`
  position: absolute;
  top: 15px;
  left: 15px;
  object-fit: fill;
  width: 30px;
  height: 30px;
  z-index: 3;
`

const StyledContainer = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
`

export { StyledCoin, StyledAsset, StyledContainer }
