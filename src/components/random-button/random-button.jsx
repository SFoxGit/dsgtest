import React from 'react'
import Button from '@mui/material/Button'
import newData from '../../utils/newData'

const RandomButton = ({ layerArr, setLayerArr }) => {
  const randomizer = () => {
    layerArr.forEach((layer, index) => {
      if (index !== 0) {
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

  return <Button onClick={() => randomizer()}>RANDOMIZE ME</Button>
}

export default RandomButton
