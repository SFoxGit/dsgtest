import React from 'react'
import DarkBorder from '../../border-container/dark-border-container'
import Tooltip from '@mui/material/Tooltip'

import {
  ConnectContainer,
  IconsContainer,
  TextDiv,
  About,
  Patreon,
  Discord,
  Email,
  ButtonContainer,
} from './connect.style'
const ConnectWithUs = () => {
  return (
    <ConnectContainer>
      <TextDiv className='font-face-gm'>Connect With Us:</TextDiv>
      <IconsContainer>
        <ButtonContainer>
          <DarkBorder>
            <Tooltip title='Introduction and usage agreement'>
              <About />
            </Tooltip>
          </DarkBorder>
        </ButtonContainer>
        <ButtonContainer
          onClick={() =>
            window.open('https://www.patreon.com/dungeonsprite', '_blank')
          }
        >
          <DarkBorder>
            <Tooltip title='Join our Patreon!'>
              <Patreon />
            </Tooltip>
          </DarkBorder>
        </ButtonContainer>
        <ButtonContainer
          onClick={() => window.open('https://discord.gg/vxgakWk478', '_blank')}
        >
          <DarkBorder>
            <Tooltip title='Join our Discord!'>
              <Discord />
            </Tooltip>
          </DarkBorder>
        </ButtonContainer>
        <ButtonContainer
          onClick={() =>
            window.open('mailto:Dungeonspriter@gmail.com', '_blank')
          }
        >
          <DarkBorder>
            <Tooltip title='Email us!'>
              <Email />
            </Tooltip>
          </DarkBorder>
        </ButtonContainer>
      </IconsContainer>
    </ConnectContainer>
  )
}

export default ConnectWithUs
