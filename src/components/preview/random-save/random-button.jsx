import Tooltip from '@mui/material/Tooltip'
import data from '../../../utils/dataV2.js'
import useLayerStore from '../../../utils/store.js'
import RandomizerTool from '../../../utils/randomizer-tool.js'
import DarkBorder from '../../border-container/dark-border-container.jsx'
import { PreviewContainer, RandomIcon } from './random-save.style.js'

const RandomButton = () => {
  const layerArr = useLayerStore((state) => state.layerArr)
  const setLayerArr = useLayerStore((state) => state.setLayerArr)

  const randomizer = () => {
    layerArr.forEach((layer, index) => {
      if (index !== 0 && !layer.isLocked) {
        const newLayer = RandomizerTool(layer.layerType)
        const colorOptions = data[layer.layerType][newLayer.asset]
        const randomColor = colorOptions.includes('swarthy.png')
          ? layerArr[0].color
          : newLayer.color
        layerArr[index].assetName = newLayer.asset
        layerArr[index].color = randomColor
        layerArr[index].secondary = newLayer.secondary
        setLayerArr([...layerArr])
      }
    })
  }

  return (
    <PreviewContainer onClick={() => randomizer()}>
      <DarkBorder>
        <Tooltip title='Randomize all unlocked layers'>
          <RandomIcon />
        </Tooltip>
      </DarkBorder>
    </PreviewContainer>
  )
}

export default RandomButton
