import Tooltip from '@mui/material/Tooltip'
import Grid from '@mui/material/Grid'
import useOptionsStore from './utils/options-store.jsx'
import RandomizerTool from '../../utils/randomizer-tool.js'
import useLayerStore from '../../utils/store.js'
import BorderContainer from '../border-container/border-container.jsx'
import data from '../../utils/dataV2.js'
import {
  OptionsContainer,
  StyledOptionsContainer,
  Face,
  Hair,
  HeadGear,
  BackHand,
  UpperBody,
  ForeHand,
  Robe,
  LowerBody,
  Back,
  Accessories,
  Feet,
  Body,
  StyledGridItem,
  StyledButtonContainer,
} from './options.style.js'

const Options = () => {
  const addLayer = useLayerStore((state) => state.addLayer)
  const layerArr = useLayerStore((state) => state.layerArr)
  const setOptionsState = useOptionsStore((state) => state.setOptionsState)
  const setSelectedLayer = useLayerStore((state) => state.setSelectedLayer)

  const updateLayers = (layer) => {
    const randomObj = RandomizerTool(layer)
    addLayer({
      layerType: layer,
      assetName: randomObj.asset,
      color: randomObj.color,
      isLocked: false,
      display: true,
      secondary: randomObj.secondary,
    })
    setSelectedLayer(layerArr.length)
    setOptionsState('item')
  }

  const addWeapon = () => {
    const randomWeapon = RandomizerTool('Back_Hand')
    const colorOptions = data.Sleeves.Short_Sleeve
    const secondaryColorOptions = colorOptions.filter(
      (colorElement) => colorElement.substring(0, 7) === 'seconda'
    )
    const randomColor =
      secondaryColorOptions[
        Math.floor(Math.random() * secondaryColorOptions.length)
      ]
    addLayer({
      layerType: 'Back_Hand',
      assetName: randomWeapon.asset,
      color: randomWeapon.color,
      isLocked: false,
      display: true,
      secondary: randomWeapon.secondary,
    })
    addLayer({
      layerType: 'Sleeves',
      assetName: 'Short_Sleeve',
      color: layerArr[0].color,
      isLocked: false,
      display: true,
      secondary: randomColor,
    })
    setSelectedLayer(layerArr.length)
    setOptionsState('item')
  }

  return (
    <OptionsContainer>
      <BorderContainer>
        <StyledOptionsContainer container spacing={2} alignItems='flex-start'>
          <Grid item xs={4} sm={4} md={3}>
            <StyledGridItem>
              <Tooltip title='Face' arrow>
                <StyledButtonContainer>
                  <Face onClick={() => updateLayers('Face')} />
                </StyledButtonContainer>
              </Tooltip>
            </StyledGridItem>
          </Grid>
          <Grid item xs={4} sm={4} md={3}>
            <StyledGridItem>
              <Tooltip title='Hair' arrow>
                <StyledButtonContainer>
                  <Hair onClick={() => updateLayers('Hair')} />
                </StyledButtonContainer>
              </Tooltip>
            </StyledGridItem>
          </Grid>
          <Grid item xs={4} sm={4} md={3}>
            <StyledGridItem>
              <Tooltip title='Headgear' arrow>
                <StyledButtonContainer>
                  <HeadGear onClick={() => updateLayers('Headgear')} />
                </StyledButtonContainer>
              </Tooltip>
            </StyledGridItem>
          </Grid>
          <Grid item xs={4} sm={4} md={3}>
            <StyledGridItem>
              <Tooltip title='Accessories' arrow>
                <StyledButtonContainer>
                  <Accessories onClick={() => updateLayers('Accessories')} />
                </StyledButtonContainer>
              </Tooltip>
            </StyledGridItem>
          </Grid>
          {/* Row 2 */}
          <Grid item xs={4} sm={4} md={3}>
            <StyledGridItem>
              <Tooltip title='Upper Body' arrow>
                <StyledButtonContainer>
                  <UpperBody onClick={() => updateLayers('Upper_Body')} />
                </StyledButtonContainer>
              </Tooltip>
            </StyledGridItem>
          </Grid>
          <Grid item xs={4} sm={4} md={3}>
            <StyledGridItem>
              <Tooltip title='Robe' arrow>
                <StyledButtonContainer>
                  <Robe onClick={() => updateLayers('Robe')} />
                </StyledButtonContainer>
              </Tooltip>
            </StyledGridItem>
          </Grid>
          <Grid item xs={4} sm={4} md={3}>
            <StyledGridItem>
              <Tooltip title='Back' arrow>
                <StyledButtonContainer>
                  <Back onClick={() => updateLayers('Back')} />
                </StyledButtonContainer>
              </Tooltip>
            </StyledGridItem>
          </Grid>
          <Grid item xs={4} sm={4} md={3}>
            <StyledGridItem>
              <Tooltip title='Physique' arrow>
                <StyledButtonContainer>
                  <Body onClick={() => updateLayers('Physique')} />
                </StyledButtonContainer>
              </Tooltip>
            </StyledGridItem>
          </Grid>
          {/* row 3 */}
          <Grid item xs={4} sm={4} md={3}>
            <StyledGridItem>
              <Tooltip title='Lower Body' arrow>
                <StyledButtonContainer>
                  <LowerBody onClick={() => updateLayers('Lower_Body')} />
                </StyledButtonContainer>
              </Tooltip>
            </StyledGridItem>
          </Grid>
          <Grid item xs={4} sm={4} md={3}>
            <StyledGridItem>
              <Tooltip title='Backhand' arrow>
                <StyledButtonContainer>
                  <BackHand onClick={() => addWeapon()} />
                </StyledButtonContainer>
              </Tooltip>
            </StyledGridItem>
          </Grid>
          <Grid item xs={4} sm={4} md={3}>
            <StyledGridItem>
              <Tooltip title='Forehand' arrow>
                <StyledButtonContainer>
                  <ForeHand onClick={() => updateLayers('Forehand')} />
                </StyledButtonContainer>
              </Tooltip>
            </StyledGridItem>
          </Grid>
          <Grid item xs={4} sm={4} md={3}>
            <StyledGridItem>
              <Tooltip title='Feet' arrow>
                <StyledButtonContainer>
                  <Feet onClick={() => updateLayers('Feet')} />
                </StyledButtonContainer>
              </Tooltip>
            </StyledGridItem>
          </Grid>
        </StyledOptionsContainer>
      </BorderContainer>
    </OptionsContainer>
  )
}

export default Options
