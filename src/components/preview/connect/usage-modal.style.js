import styled from '@emotion/styled'
import Typography from '@mui/material/Typography'

const StyledText = styled(Typography)`
  font-family: 'JoystixMonospace';
  margin-bottom: 4px;
`
const StyledBodyContent = styled.div`
  width: 100%;
  height: calc(100% - 44px);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: space-between;
`
const CloseRow = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

export { StyledText, StyledBodyContent, CloseRow }
