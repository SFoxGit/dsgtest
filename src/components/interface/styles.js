import Grid from '@mui/material/Grid'
import styled from '@emotion/styled'
import logoLarge from '../../userInterface/armory_table_sm.png'

const ImageHoldingGrid = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px !important;
`
const StoneTablet = styled(Grid)`
  height: 549px;
  overflow-y: auto;
  background-image: url(${logoLarge});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  border-radius: 5px;
  padding: 32px 12px 0px 12px !important;
`

export { ImageHoldingGrid, StoneTablet }
