import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import SkinTone from '../skin-tone'
import Button from '@mui/material/Button'
import Layer from '../layer-modal'
import ItemComponent from '../item'
import { ImageHoldingGrid, StyledDownloadContainer, StyledItemArrayContainer } from './styles'
import mergeImages from 'merge-images'
// import { exportComponentAsPNG } from 'react-component-export-image'
import exportAsImage from '../../utils/exportAsImage'
import Canvas from '../canvas'

export default function Interface() {
  const [showLayer, setShowLayer] = useState(false)
  const [layerArr, setLayerArr] = useState([
    { layerType: 'Skin', type: null, color: 'pale.png', isOpen: true },
    { layerType: 'Hair', type: 'Academic', color: 'black.png', isOpen: true },
    { layerType: 'Hat', type: 'Fez', color: 'red.png', isOpen: true },
    { layerType: 'Upper', type: 'Adept_Tunic', color: 'black.png', isOpen: true },
    { layerType: 'Lower', type: 'Adept_Robe', color: 'black.png', isOpen: true },
    { layerType: 'Feet', type: 'Arcane_Slippers', color: 'black.png', isOpen: true },
  ])
  const [imageConverted, setImageConverted] = useState('')
  // const exportRef = useRef()
  // const ComponentToPrint = React.forwardRef((props, ref) => <StyledImage ref={ref} src={imageConverted} alt='skin' />)
  // const componentRef = useRef()
  useEffect(() => {
    const formatData = async () => {
      const newArr = []
      for (const layer of layerArr) {
        if (layer.type) {
          const importedImage = await import(`../../assets/${layer.layerType}/${layer.type}/${layer.color}`)
          newArr.push(importedImage.default)
        } else {
          const importedImage = await import(`../../assets/${layer.layerType}/${layer.color}`)
          newArr.push(importedImage.default)
        }
      }
      mergeImages(newArr).then((res) => setImageConverted(res))
    }
    formatData()
  }, [layerArr])

  return (
    <>
      <Grid container spacing={2}>
        <Grid item container xs={12} md={4} columnSpacing={2}>
          <ImageHoldingGrid item xs={12}>
            {/* <ComponentToPrint ref={componentRef} /> */}
            {/* <StyledImage ref={exportRef} src={imageConverted} alt='skin' /> */}
            <Canvas srcImage={imageConverted} />
          </ImageHoldingGrid>
          <SkinTone setLayerArr={setLayerArr} layerArr={layerArr} />
        </Grid>
        <StyledItemArrayContainer item xs={12} md={8}>
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
        <StyledDownloadContainer item container xs={12}>
          <Grid item xs={0} sm={3} />
          <Grid item xs={4} sm={2}>
            <Button variant='contained' color='primary' href={imageConverted} download>
              Download
            </Button>
          </Grid>
          <Grid item xs={4} sm={2}>
            <Button variant='contained' onClick={() => exportAsImage('test')}>
              Download 200px
            </Button>
          </Grid>
          <Grid item xs={4} sm={2}>
            <Button variant='contained' color='primary' onClick={() => setShowLayer(true)}>
              Add Layer
            </Button>
          </Grid>
          <Grid item xs={0} sm={3} />
        </StyledDownloadContainer>
      </Grid>
      <Layer showLayer={showLayer} setShowLayer={setShowLayer} layerArr={layerArr} setLayerArr={setLayerArr} />
    </>
  )
}
