import styled from '@emotion/styled'
import AboutLogo from '../../../monochrome/borderless/about.png'
import PatreonLogo from '../../../monochrome/borderless/patreon.png'
import DiscordLogo from '../../../monochrome/borderless/discord.png'
import EmailLogo from '../../../monochrome/borderless/email.png'

const ConnectContainer = styled.div`
  width: calc(100% - 40px);
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`
const IconsContainer = styled.div`
  width: calc(100% - 120px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  & > * {
    height: 48px !important;
    width: 48px !important;
  }
`
const TextDiv = styled.div`
  width: 120px;
  color: ${({ theme }) => theme.palette.white.main};
  display: flex;
  flex-direction: column;
  align-items: center;
`
const About = styled.div`
  height: 36px;
  width: 36px;
  background-image: url(${AboutLogo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
`
const Patreon = styled.div`
  height: 36px;
  width: 36px;
  background-image: url(${PatreonLogo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
`
const Discord = styled.div`
  height: 36px;
  width: 36px;
  background-image: url(${DiscordLogo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
`
const Email = styled.div`
  height: 36px;
  width: 36px;
  background-image: url(${EmailLogo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
`

export {
  ConnectContainer,
  IconsContainer,
  TextDiv,
  About,
  Patreon,
  Discord,
  Email,
}
