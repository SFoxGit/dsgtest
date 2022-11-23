import React from 'react'
import Button from '@mui/material/Button'
import data from '../../utils/dataV2'
import useLayerStore from '../../utils/store'

const RandomButton = () => {
  const layerArr = useLayerStore((state) => state.layerArr);
  const setLayerArr = useLayerStore((state) => state.setLayerArr)

  const randomizer = () => {
    layerArr.forEach((layer, index) => {
      if (index !== 0 && !layer.isLocked) {
        const assets = Object.keys(data[layer.layerType])
        const randomNumber = Math.floor(Math.random() * assets.length)
        const newAsset = assets[randomNumber]
        const colorOptions = data[layer.layerType][newAsset]
        const randomColor = colorOptions.includes('swarthy.png') ? layerArr[0].color : colorOptions[Math.floor(Math.random() * colorOptions.length)]
        layerArr[index].assetName = newAsset
        layerArr[index].color = randomColor
        setLayerArr([...layerArr])
      }
    })
  }

  return (
    <Button variant='contained' color='success' onClick={() => randomizer()} sx={{ boxShadow: 6 }}>
      RANDOMIZE
    </Button>
  )
}

export default RandomButton
