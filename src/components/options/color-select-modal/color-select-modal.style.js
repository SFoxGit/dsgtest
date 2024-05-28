import styled from '@emotion/styled'
import modal from '../../../userInterface/modal.png'

const StyledContainer = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url(${modal});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
`

export { StyledContainer }
