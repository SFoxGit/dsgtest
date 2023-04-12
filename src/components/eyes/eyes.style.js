import styled from '@emotion/styled'
import iconEye from '../../design/iconEye.png'
import arrowLeft from '../../design/arrowLeft.png'
import arrowRight from '../../design/arrowRight.png'

const EyeIcon = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${iconEye});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
`
const LeftArrow = styled.div`
  height: 32px;
  width: 32px;
  background-image: url(${arrowLeft});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
`
const RightArrow = styled.div`
  height: 32px;
  width: 32px;
  background-image: url(${arrowRight});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
`

const StyledContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export { EyeIcon, LeftArrow, RightArrow, StyledContainer }
