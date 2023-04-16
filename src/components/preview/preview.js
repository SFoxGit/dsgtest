import React from 'react'
// import RandomButton from '../random-button/random-button'
import ConnectWithUs from './connect/connect'
import RandomSaveContainer from './random-save'
import {
  OuterBorder,
  InnerContainer,
  PreviewContainer,
  InnerBorder,
  CanvasOutline,
  CanvasBackground,
  LogoImage,
} from './preview.style'
import Canvas from '../canvas'
import Inputs from './inputs/inputs'
const Preview = () => {
  const isDesktop = window.screen.width > 920

  return (
    <PreviewContainer>
      <OuterBorder>
        <InnerBorder>
          <InnerContainer>
            <LogoImage />
            <CanvasOutline>
              <CanvasBackground>
                <Canvas pixels={200} />
              </CanvasBackground>
            </CanvasOutline>
            <Inputs />
            {isDesktop && (
              <>
                <RandomSaveContainer />
                <ConnectWithUs />
              </>
            )}
          </InnerContainer>
        </InnerBorder>
      </OuterBorder>
    </PreviewContainer>
  )
}

export default Preview
