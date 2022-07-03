import React from 'react'
import { Divider, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import { StyledSkinTone, StyledContainer } from './styles/skin.tone.style'

export default function SkinTone({ setLayerArr, layerArr }) {
  const skinArr = [
    { name: 'Pale', hex: '#F0D4B8', file: 'pale.png' },
    { name: 'Tan', hex: '#F0C480', file: 'Tan.png' },
    { name: 'Bronze', hex: '#D8A068', file: 'bronze.png' },
    { name: 'Brown', hex: '#805430', file: 'brown.png' },
    { name: 'Gold', hex: '#e4e96d', file: 'gold.png' },
    { name: 'Violet', hex: '#706CA8', file: 'purple.png' },
    { name: 'Grey', hex: '#B0B0B0', file: 'grey.png' },
    { name: 'Green', hex: '#33b168', file: 'green.png' },
    { name: 'Blue', hex: '#b0c4e0', file: 'blue.png' },
    { name: 'Night', hex: '#41536f', file: 'night.png' },
    { name: 'Red', hex: '#a93f2a', file: 'red.png' },
  ]

  const onClick = (element) => {
    layerArr[0] = { layerType: 'Skin', type: null, color: element }
    setLayerArr([...layerArr])
  }
  return (
    <StyledContainer>
      <Typography variant='h4'>Skin Tone</Typography>
      <Divider />
      <Grid container spacing={2}>
        {skinArr.map((element, index) => (
          <Grid item xs={3} key={index}>
            <StyledSkinTone color={element.hex} onClick={() => onClick(element.file)} />
          </Grid>
        ))}
      </Grid>
    </StyledContainer>
  )
}
