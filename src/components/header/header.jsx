import Typography from '@mui/material/Typography'
import React from 'react'
import { StyledContainer } from './header.style'
export default function Header() {
  return (
    <StyledContainer>
      <Typography variant='h2'>Dungeon Sprite Generator</Typography>
    </StyledContainer>
  )
}
