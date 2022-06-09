import React from 'react'
import { Divider, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import { StyledSkinTone, StyledContainer } from './styles/skin.tone.style'

export default function SkinTone({ setLayerArr, layerArr }) {
  const skinArr = [
    { name: 'Pale', hex: '#F0D4B8', file: 'pale.png' },
    { name: 'Tan', hex: '#F0C480', file: 'tan.png' },
    { name: 'Bronze', hex: '#D8A068', file: 'bronze.png' },
    { name: 'Brown', hex: '#805430', file: 'brown.png' },
    { name: 'Yellow', hex: '#F8E880', file: 'gold_shift.png' },
    { name: 'Gold', hex: '#F06018', file: 'gold.png' },
    { name: 'Light Blue', hex: '#B0C4E0', file: 'lightblue.png' },
    { name: 'Violet', hex: '#706CA8', file: 'purple.png' },
    { name: 'Grey', hex: '#B0B0B0', file: 'grey.png' },
    { name: 'Green', hex: '#98C848', file: 'green.png' },
    { name: 'Light Green', hex: '#33b167', file: 'green_shift.png' },
    { name: 'Night', hex: '#41536f', file: 'night.png' },
    { name: 'Red', hex: '#7b4930', file: 'red.png' },
    { name: 'Light Red', hex: '#a93f2a', file: 'red_shift.png' },
  ]

  const onClick = (element) => {
    layerArr[0] = { layerType: 'skin', type: null, color: element }
    setLayerArr([...layerArr])
  }
  return (
    <StyledContainer>
      <Typography>Skin Tone</Typography>
      <Divider />
      <Grid container spacing={2}>
        {skinArr.map((element, index) => (
          <Grid item xs={2.4} key={index}>
            <StyledSkinTone color={element.hex} onClick={() => onClick(element.file)} />
          </Grid>
        ))}
      </Grid>
    </StyledContainer>
  )
}
