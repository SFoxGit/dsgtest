import React from 'react'
import DarkBorder from '../../border-container/dark-border-container'
import {
  ConnectContainer,
  IconsContainer,
  TextDiv,
  About,
  Patreon,
  Discord,
  Email,
} from './connect.style'
const ConnectWithUs = () => {
  return (
    <ConnectContainer>
      <TextDiv className='font-face-gm'>Connect With Us:</TextDiv>
      <IconsContainer>
        <DarkBorder>
          <About />
        </DarkBorder>
        <DarkBorder>
          <Patreon />
        </DarkBorder>
        <DarkBorder>
          <Discord />
        </DarkBorder>
        <DarkBorder>
          <Email />
        </DarkBorder>
      </IconsContainer>
    </ConnectContainer>
  )
}

export default ConnectWithUs
