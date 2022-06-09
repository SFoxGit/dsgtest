import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import SkinTone from '../skin-tone'
import Button from '@mui/material/Button'
import Layer from '../layer-modal'
import ItemComponent from '../item'
import { ImageHoldingGrid } from './styles'
import mergeImages from 'merge-images'

export default function Interface() {
  const [showLayer, setShowLayer] = useState(false)
  // const [baseLayer, setBaseLayer] = useState('pale.png')
  const [layerArr, setLayerArr] = useState([{ layerType: 'skin', type: null, color: 'pale.png' }])
  const [imageConverted, setImageConverted] = useState('')
  useEffect(() => {
    const newArr = []
    layerArr.forEach((layer) => {
      const imageLocation = layer.type ? './assets/' + layer.layerType + '/' + layer.type + '_' + layer.color : './assets/' + layer.layerType + '/' + layer.color
      newArr.push(imageLocation)
    })
    mergeImages(newArr).then((res) => setImageConverted(res))
  }, [layerArr])

  return (
    <>
      <Grid container spacing={2}>
        <ImageHoldingGrid item xs={4}>
          <img src={imageConverted} alt='skin' height={200} width={200} style={{ imageRendering: 'pixelated' }} />
          {/* {layerArr?.length &&
            layerArr.map((layer, index) =>
              layer.color ? (
                <img
                  key={'image-layer' + index}
                  src={layer.type ? './assets/' + layer.layerType + '/' + layer.type + '_' + layer.color : './assets/' + layer.layerType + '/' + layer.color}
                  alt={'image' + index}
                  height={200}
                  width={200}
                  style={{ position: 'absolute', zIndex: index + 1, imageRendering: 'pixelated' }}
                />
              ) : null
            )} */}
          <SkinTone setLayerArr={setLayerArr} layerArr={layerArr} />
        </ImageHoldingGrid>
        <Grid item xs={8}>
          {layerArr?.map((itemName, index) =>
            index !== 0 ? <ItemComponent key={'ItemComp' + index} itemObj={itemName} setLayerArr={setLayerArr} layerArr={layerArr} layerIndex={index} /> : null
          )}
        </Grid>
        <Grid item xs={12}>
          <a href={imageConverted} download>
            Download
          </a>
          <Button onClick={() => setShowLayer(true)}>Add Layer</Button>
        </Grid>
      </Grid>
      <Layer showLayer={showLayer} setShowLayer={setShowLayer} layerArr={layerArr} setLayerArr={setLayerArr} />
    </>
  )
}
