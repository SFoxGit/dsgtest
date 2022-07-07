import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import SkinTone from '../skin-tone'
import Button from '@mui/material/Button'
import Layer from '../layer-modal'
import ItemComponent from '../item'
import { ImageHoldingGrid, StyledItemArrayContainer, StyledFabContainer } from './styles'
import mergeImages from 'merge-images'
import exportAsImage from '../../utils/exportAsImage'
import Canvas from '../canvas'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import DownloadIcon from '@mui/icons-material/Download'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import RandomButton from '../random-button/random-button'

export default function Interface() {
  const [showLayer, setShowLayer] = useState(false)
  const [pixels, setPixels] = useState(200)
  const [layerArr, setLayerArr] = useState([
    { layerType: 'Skin', type: null, color: 'pale.png', isOpen: true, isLocked: false },
    { layerType: 'Hair', type: 'Academic', color: 'black.png', isOpen: true, isLocked: false },
    { layerType: 'Hat', type: 'Fez', color: 'red.png', isOpen: true, isLocked: false },
    { layerType: 'Upper', type: 'Adept_Tunic', color: 'black.png', isOpen: true, isLocked: false },
    { layerType: 'Lower', type: 'Adept_Robe', color: 'black.png', isOpen: true, isLocked: false },
    { layerType: 'Feet', type: 'Arcane_Slippers', color: 'black.png', isOpen: true, isLocked: false },
  ])
  const [imageConverted, setImageConverted] = useState('')
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
      <Grid container spacing={2} m={-1}>
        <Grid item container xs={12} md={4} columnSpacing={2}>
          <ImageHoldingGrid item container xs={12} p={0}>
            <Canvas srcImage={imageConverted} pixels={pixels} />
          </ImageHoldingGrid>
          <Grid item container xs={6} mt={2} p={0} justifyContent='center' alignItems='center'>
            <TextField label='Pixels' type='number' color='primary' value={pixels} onChange={(e) => setPixels(e.target.value)} focused />
          </Grid>
          <Grid item container xs={6} mt={2} p={0} justifyContent='center' alignItems='center'>
            <Button variant='contained' onClick={() => exportAsImage('sprite')}>
              <Typography variant='body1'>
                <DownloadIcon />
              </Typography>
            </Button>
          </Grid>
          <SkinTone setLayerArr={setLayerArr} layerArr={layerArr} />
          <RandomButton layerArr={layerArr} setLayerArr={setLayerArr} />
        </Grid>
        <StyledItemArrayContainer item xs={12} md={8} sx={{ boxShadow: 3 }}>
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
          <StyledFabContainer>
            <Fab color='secondary' aria-label='add' onClick={() => setShowLayer(true)}>
              <AddIcon />
            </Fab>
          </StyledFabContainer>
        </StyledItemArrayContainer>
      </Grid>
      <Layer showLayer={showLayer} setShowLayer={setShowLayer} layerArr={layerArr} setLayerArr={setLayerArr} />
    </>
  )
}
