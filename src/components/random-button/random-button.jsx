import React from 'react'
import Button from '@mui/material/Button'
import newData from '../../utils/newData'

const RandomButton = ({ layerArr, setLayerArr }) => {
  const randomizer = () => {
    layerArr.forEach((layer, index) => {
      if (index !== 0 && !layer.isLocked) {
        const assets = Object.keys(newData[layer.layerType])
        const randomNumber = Math.floor(Math.random() * assets.length)
        const newAsset = assets[randomNumber]
        const colorOptions = newData[layer.layerType][newAsset]
        const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)]
        layerArr[index].type = newAsset
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
