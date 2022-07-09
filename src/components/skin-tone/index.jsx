import React, { useState } from 'react'
import { Divider, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { StyledSkinTone, StyledContainer } from './skin.tone.style'
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined'
import UnfoldLessOutlinedIcon from '@mui/icons-material/UnfoldLessOutlined'

export default function SkinTone({ setLayerArr, layerArr }) {
  const [showSkinTone, setShowSkinTone] = useState(true)
  const isMobile = window.matchMedia('(max-width: 420px)').matches
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
      <Grid container>
        <Grid item container xs={9} alignItems='center'>
          <Typography variant='h4' color='primary'>
            Skin Tone
          </Typography>
        </Grid>
        <Grid item xs={3}>
          {isMobile && <Button onClick={() => setShowSkinTone(!showSkinTone)}>{showSkinTone ? <UnfoldLessOutlinedIcon /> : <ExpandCircleDownOutlinedIcon />}</Button>}
        </Grid>
      </Grid>
      {showSkinTone && <Divider />}
      {showSkinTone && (
        <Grid container spacing={2} mt={0}>
          {skinArr.map((element, index) => (
            <Grid item xs={3} key={index}>
              <StyledSkinTone color={element.hex} onClick={() => onClick(element.file)} />
            </Grid>
          ))}
        </Grid>
      )}
    </StyledContainer>
  )
}
