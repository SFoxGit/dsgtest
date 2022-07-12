// import { Container } from '@mui/material'
import styled from '@emotion/styled'
import Paper from '@mui/material/Paper'

const StyledContainer = styled(Paper)`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  ${(props) => !props.expand && 'height: 36px'}
`

export { StyledContainer }
