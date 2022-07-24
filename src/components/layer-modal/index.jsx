import React, { useState } from 'react'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import { StyledBox, StyledFormControl } from './styles'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import data from '../../utils/dataV2'

export default function Layer({ showLayer, setShowLayer, layerArr, setLayerArr }) {
  const [layer, setLayer] = useState('Accessories')

  const updateLayers = () => {
    const assets = Object.keys(data[layer])
    const randomNumber = Math.floor(Math.random() * assets.length)
    const newAsset = assets[randomNumber]
    const colorOptions = data[layer][newAsset]
    const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)]

    setLayerArr([...layerArr, { layerType: layer, assetName: newAsset, color: randomColor, isOpen: true, isLocked: false, display: true}])
    setShowLayer(false)
  }
  return (
    <Modal open={showLayer} onClose={() => setShowLayer(false)} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
      <StyledBox>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          What do you want to add?
        </Typography>
        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
          Select the type of layer you want to add
        </Typography>
        <StyledFormControl fullWidth>
          <Select value={layer} onChange={(e) => setLayer(e.target.value)} inputProps={{ 'aria-label': 'Without label' }}>
            <MenuItem value='Accessories'>Accessories</MenuItem>
            <MenuItem value='Hair'>Hair</MenuItem>
            <MenuItem value='Hats'>Hats</MenuItem>
            <MenuItem value='Face'>Face</MenuItem>
            <MenuItem value='Outfits'>Outfits</MenuItem>
            <MenuItem value='Upper'>Upper</MenuItem>
            <MenuItem value='Lower'>Lower</MenuItem>
            <MenuItem value='Feet'>Feet</MenuItem>
          </Select>
        </StyledFormControl>
        <Grid container direction='row' justifyContent='flex-end' alignItems='center' spacing={3}>
          <Grid item>
            <Button onClick={() => setShowLayer(false)} color='error' variant='outlined'>
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={() => updateLayers()} variant='outlined'>
              Add Layer
            </Button>
          </Grid>
        </Grid>
      </StyledBox>
    </Modal>
  )
}
