import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import SkinTone from '../skin-tone'
import Button from '@mui/material/Button'
import Layer from '../layer-modal'
import ItemComponent from '../item'
import { ImageHoldingGrid, StyledItemArrayContainer, StyledFabContainer, StyledPixelContainer } from './styles'
import mergeImages from 'merge-images'
import exportAsImage from '../../utils/exportAsImage'
import Canvas from '../canvas'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import DownloadIcon from '@mui/icons-material/Download'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import RandomButton from '../random-button/random-button'
import OffHand from '../off-hand'
import RandomizerTool from '../../utils/randomizer-tool'

const randomWeapon = RandomizerTool('Off_Hand')
const randomHair = RandomizerTool('Hair')
const randomHat = RandomizerTool('Hats')
const randomUpper = RandomizerTool('Upper')
const randomLower = RandomizerTool('Lower')
const randomFeet = RandomizerTool('Feet')
export default function Interface() {
  const [showLayer, setShowLayer] = useState(false)
  const [pixels, setPixels] = useState(200)
  const [layerArr, setLayerArr] = useState([
    { layerType: 'Skin', assetName: null, color: 'pale.png', isOpen: true, isLocked: false, display: true },
    { layerType: 'Arms', assetName: 'Bare_Arm', color: 'pale.png', isOpen: true, isLocked: true, display: false },
    { layerType: 'Off_Hand', assetName: randomWeapon.asset, color: randomWeapon.color, isOpen: true, isLocked: false, display: false },
    { layerType: 'Sleeves', assetName: 'None', color: 'none', isOpen: true, isLocked: false, display: false },
    { layerType: 'Hair', assetName: randomHair.asset, color: randomHair.color, isOpen: true, isLocked: false, display: true },
    { layerType: 'Hats', assetName: randomHat.asset, color: randomHat.color, isOpen: true, isLocked: false, display: true },
    { layerType: 'Upper', assetName: randomUpper.asset, color: randomUpper.color, isOpen: true, isLocked: false, display: true },
    { layerType: 'Lower', assetName: randomLower.asset, color: randomLower.color, isOpen: true, isLocked: false, display: true },
    { layerType: 'Feet', assetName: randomFeet.asset, color: randomFeet.color, isOpen: true, isLocked: false, display: true },
  ])
  const [imageConverted, setImageConverted] = useState('')
  useEffect(() => {
    const formatData = async () => {
      const newArr = []
      for (const layer of layerArr) {
        if (layer.assetName) {
          const importedImage = await import(`../../assetsV2/${layer.layerType}/${layer.assetName}/${layer.color}`)
          layer.display && newArr.push(importedImage.default)
        } else {
          const importedImage = await import(`../../assetsV2/${layer.layerType}/${layer.color}`)
          newArr.push(importedImage.default)
        }
      }
      mergeImages(newArr).then((res) => setImageConverted(res))
    }
    formatData()
  }, [layerArr])

  return (
    <>
      <Grid container>
        <Grid item container xs={12} md={4} columnSpacing={2} pl={2} pr={{ xs: 0, md: 2 }}>
          <ImageHoldingGrid item container xs={12}>
            <Canvas srcImage={imageConverted} pixels={pixels} />
          </ImageHoldingGrid>
          <SkinTone setLayerArr={setLayerArr} layerArr={layerArr} />
          <OffHand setLayerArr={setLayerArr} layerArr={layerArr} />
          <StyledPixelContainer item container xs={12} justifyContent='space-evenly' alignItems='center'>
            <Grid item container xs={4} mt={2} p={0} justifyContent='center' alignItems='center'>
              <TextField
                label='Pixels'
                type='number'
                color='primary'
                value={pixels}
                onChange={(e) => setPixels(e.target.value)}
                sx={{ input: { fontSize: 14, padding: '5px', textAlign: 'center' } }}
                focused
              />
            </Grid>
            <Grid item container xs={4} mt={2} p={0} justifyContent='center' alignItems='center'>
              <Button variant='contained' onClick={() => exportAsImage('sprite')}>
                <Typography variant='body1'>
                  <DownloadIcon />
                </Typography>
              </Button>
            </Grid>
          </StyledPixelContainer>
          <Grid item container xs={12} justifyContent='center' my={1} height='40px'>
            <RandomButton layerArr={layerArr} setLayerArr={setLayerArr} />
          </Grid>
        </Grid>
        <StyledItemArrayContainer item xs={12} md={8} sx={{ boxShadow: 3 }}>
          {layerArr?.map((itemName, index) =>
            index > 3 ? (
              <ItemComponent
                key={'ItemComp' + index + itemName.layerType + itemName.assetName || 'new'}
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
