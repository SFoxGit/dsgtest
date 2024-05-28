import { PreviewContainer, ClearIcon } from './random-save.style'
import DarkBorder from '../../border-container/dark-border-container'
import Tooltip from '@mui/material/Tooltip'
import useLayerStore from '../../../utils/store'
import useOptionsStore from '../../options/utils/options-store'

const ClearAll = () => {
  const layerArr = useLayerStore((state) => state.layerArr)
  const setLayerArr = useLayerStore((state) => state.setLayerArr)
  const setOptionsState = useOptionsStore((state) => state.setOptionsState)
  const handleClick = () => {
    setOptionsState('main')
    setLayerArr([layerArr[0]])
  }
  return (
    <PreviewContainer onClick={() => handleClick()}>
      <DarkBorder>
        <Tooltip title='Clear all assets'>
          <ClearIcon />
        </Tooltip>
      </DarkBorder>
    </PreviewContainer>
  )
}

export default ClearAll
