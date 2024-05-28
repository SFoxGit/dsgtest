import ConnectWithUs from './connect/connect.jsx'
import RandomSaveContainer from './random-save/random-save.jsx'
import CanvasComponent from '../canvas/canvas.jsx'
import Inputs from './inputs/inputs.jsx'
import {
  OuterBorder,
  InnerContainer,
  PreviewContainer,
  InnerBorder,
  CanvasOutline,
  CanvasBackground,
  LogoImage,
} from './preview.style.js'

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
                <CanvasComponent pixels={200} />
              </CanvasBackground>
            </CanvasOutline>
            {isDesktop && (
              <>
                <Inputs />
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
