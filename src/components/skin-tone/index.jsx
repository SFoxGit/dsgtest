import React, { useState } from 'react'
import { Divider, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { StyledSkinTone, StyledContainer } from './skin.tone.style'
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined'
import UnfoldLessOutlinedIcon from '@mui/icons-material/UnfoldLessOutlined'
import Tooltip from '@mui/material/Tooltip'

export default function SkinTone({ setLayerArr, layerArr }) {
  const [showSkinTone, setShowSkinTone] = useState(true)
  // const isMobile = window.matchMedia('(max-width: 420px)').matches
  const skinArr = [
    { name: 'Porcelain', hex: '#F9F5F7', file: 'porcelain.png' },
    { name: 'Pale', hex: '#F0D4B8', file: 'pale.png' },
    { name: 'Caucasian', hex: '#F0D4B8', file: 'caucasian.png' },
    { name: 'Tan', hex: '#F0C480', file: 'tan.png' },
    { name: 'Bronze', hex: '#D8A068', file: 'bronze.png' },
    { name: 'Honey', hex: '#AC903C', file: 'honey.png' },
    { name: 'Olive', hex: '#A0804D', file: 'olive.png' },
    { name: 'Swarthy', hex: '#976D2E', file: 'swarthy.png' },
    { name: 'Brick', hex: '#8F6D4C', file: 'brick.png' },
    { name: 'Dust', hex: '#77755C', file: 'dust.png' },
    { name: 'Brown', hex: '#805430', file: 'brown.png' },
    { name: 'Chocolate', hex: '#543023', file: 'chocolate.png' },
    { name: 'Black', hex: '#3D3D3D', file: 'black.png' },
    { name: 'Blue', hex: '#b0c4e0', file: 'blue.png' },
    { name: 'Purple', hex: '#706CA8', file: 'purple.png' },
    { name: 'Night', hex: '#41536f', file: 'night.png' },
    { name: 'Gold', hex: '#e4e96d', file: 'gold.png' },
    { name: 'Grey', hex: '#B0B0B0', file: 'grey.png' },
    { name: 'Green', hex: '#33b168', file: 'green.png' },
    { name: 'Red', hex: '#a93f2a', file: 'red.png' },
  ]

  const onClick = (element) => {
    layerArr[0].color = element
    layerArr[1].color = element
    setLayerArr([...layerArr])
  }
  return (
    <StyledContainer expand={showSkinTone}>
      <Grid container>
        <Grid item container xs={9} alignItems='center'>
          <Typography variant='h5' color='primary'>
            Skin Tone
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Button onClick={() => setShowSkinTone(!showSkinTone)}>{showSkinTone ? <UnfoldLessOutlinedIcon /> : <ExpandCircleDownOutlinedIcon />}</Button>
        </Grid>
      </Grid>
      {showSkinTone && (
        <>
          <Divider />
          <Grid container spacing={2} mt={0} columns={5}>
            {skinArr.map((element, index) => (
              <Grid item xs={1} key={index}>
                <Tooltip title={element.name} placement='top'>
                  <StyledSkinTone color={element.hex} onClick={() => onClick(element.file)} />
                </Tooltip>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </StyledContainer>
  )
}
