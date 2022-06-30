import React, { useEffect, useState, useRef } from 'react'
import Grid from '@mui/material/Grid'
import SkinTone from '../skin-tone'
import Button from '@mui/material/Button'
import Layer from '../layer-modal'
import ItemComponent from '../item'
import { ImageHoldingGrid, StyledImage, StyledDownloadButton, StyledDownloadContainer, StyledItemArrayContainer } from './styles'
import mergeImages from 'merge-images'
import { exportComponentAsPNG } from 'react-component-export-image'
export default function Interface() {
  const [showLayer, setShowLayer] = useState(false)
  const [layerArr, setLayerArr] = useState([{ layerType: 'skin', type: null, color: 'pale.png' }])
  const [imageConverted, setImageConverted] = useState('')
  const ComponentToPrint = React.forwardRef((props, ref) => <StyledImage ref={ref} src={imageConverted} alt='skin' />)
  const componentRef = useRef()
  useEffect(() => {
    const newArr = []
    layerArr.forEach((layer) => {
      const imageLocation = layer.type ? './assets/' + layer.layerType + '/' + layer.type + '/' + layer.color : './assets/' + layer.layerType + '/' + layer.color
      newArr.push(imageLocation)
    })
    mergeImages(newArr).then((res) => setImageConverted(res))
  }, [layerArr])

  return (
    <>
      <Grid container spacing={2}>
        <Grid item container xs={4}>
          <ImageHoldingGrid item xs={12}>
            <ComponentToPrint ref={componentRef} />
          </ImageHoldingGrid>
          <SkinTone setLayerArr={setLayerArr} layerArr={layerArr} />
        </Grid>
        <StyledItemArrayContainer item xs={8}>
          {layerArr?.map((itemName, index) =>
            index !== 0 ? (
              <ItemComponent
                key={'ItemComp' + index + itemName.layerType + itemName.type || 'new'}
                itemObj={itemName}
                setLayerArr={setLayerArr}
                layerArr={layerArr}
                layerIndex={index}
              />
            ) : null
          )}
        </StyledItemArrayContainer>
        <StyledDownloadContainer item xs={12}>
          <StyledDownloadButton href={imageConverted} download>
            <Button variant='outlined'>Download</Button>
          </StyledDownloadButton>
          <Button variant='outlined' onClick={() => exportComponentAsPNG(componentRef)}>
            Download 200px
          </Button>
          <Button variant='outlined' onClick={() => setShowLayer(true)}>
            Add Layer
          </Button>
        </StyledDownloadContainer>
      </Grid>
      <Layer showLayer={showLayer} setShowLayer={setShowLayer} layerArr={layerArr} setLayerArr={setLayerArr} />
    </>
  )
}
