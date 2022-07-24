import Grid from '@mui/material/Grid'
import styled from '@emotion/styled'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import Select from '@mui/material/Select'
import InputBase from '@mui/material/InputBase'

const StyledBoxContainer = styled(Paper)`
  border: 1px solid;
  border-radius: 5px;
  background-color: white;
  opacity: 0.92;
`

const StyledDivider = styled(Divider)`
  border: 1px solid ${(props) => props.theme.palette.muted.main};
  width: 100%;
`

const StyledSelect = styled(Select)`
  .MuiInputBase-input {
    padding: 8px 16px;
  }
`

const StyledIconContainer = styled(Grid)`
  & > * {
    display: flex;
    justify-content: center;
  }
`

const StyledFormControl = styled(InputBase)`
  border: 1px solid ${(props) => props.theme.palette.primary.main};
  border-radius: 4px;
  padding: 2px 6px;
  & > .MuiInputBase-input {
    display: flex;
    align-items: center;
    justify-content: center;
  };
  & > .MuiInputBase-formControl {
    display: flex;
    align-items: center;
  }
`

export { StyledBoxContainer, StyledDivider, StyledSelect, StyledIconContainer, StyledFormControl }
