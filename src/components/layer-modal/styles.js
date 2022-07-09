import styled from '@emotion/styled'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'

const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: white;
  border: 2px solid #000;
  box-shadow: 24px;
  padding: 16px;
  @media (max-width: 420px) {
    width: 100%;
    text-align: center;
    & > * {
      justify-content: space-evenly !important;
    }
  } ;
`

const StyledFormControl = styled(FormControl)({
  margin: '24px 0px',
})

export { StyledBox, StyledFormControl }
