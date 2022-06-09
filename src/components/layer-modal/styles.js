import { styled } from '@mui/styles'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'

const StyledBox = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  padding: 16,
})

const StyledFormControl = styled(FormControl)({
  margin: '24px 0px'
})

export {StyledBox, StyledFormControl}
