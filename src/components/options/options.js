import React from 'react'
// import useOptionsStore from './utils/options-store'
import RandomizerTool from '../../utils/randomizer-tool'
import useLayerStore from '../../utils/store'
import BorderContainer from '../border-container/border-container'
import data from '../../utils/dataV2'
import {
  OptionsContainer,
  StyledOptionsContainer,
  Face,
  FacialHair,
  Hair,
  HeadGear,
  Helm,
  Hood,
  BackHand,
  UpperBody,
  Armor,
  ForeHand,
  Robe,
  LowerBody,
  Back,
  Dress,
  Accessories,
  Feet,
  Body,
  Additional,
} from './options.style'

const Options = () => {
  // const setOptionsState = useOptionsStore((state) => state.setOptionsState)
  const addLayer = useLayerStore((state) => state.addLayer)
  const layerArr = useLayerStore((state) => state.layerArr)

  const updateLayers = (layer) => {
    const randomObj = RandomizerTool(layer)
    addLayer({
      layerType: layer,
      assetName: randomObj.asset,
      color: randomObj.color,
      isLocked: false,
      display: true,
      secondary: randomObj.secondary,
      additional: [],
    })
  }

  const addWeapon = () => {
    const randomWeapon = RandomizerTool('Back_Hand')
    const colorOptions = data.Sleeves.Short_Sleeve
    const randomColor =
      colorOptions[Math.floor(Math.random() * colorOptions.length)]
    addLayer({
      layerType: 'Back_Hand',
      assetName: randomWeapon.asset,
      color: randomWeapon.color,
      isLocked: false,
      display: true,
      secondary: randomWeapon.secondary,
      additional: [],
    })
    addLayer({
      id: 0,
      layerType: 'Sleeves',
      assetName: 'Bare_Arm',
      color: layerArr[0].color,
      isLocked: true,
      display: true,
      secondary: false,
      additional: [],
    })
    addLayer({
      id: 1,
      layerType: 'Sleeves',
      assetName: 'Short_Sleeve',
      color: randomColor,
      isLocked: false,
      display: true,
      secondary: false,
      additional: [],
    })
  }

  return (
    <OptionsContainer>
      <BorderContainer>
        <StyledOptionsContainer>
          <Face>
            <button onClick={() => updateLayers('Face')} />
          </Face>

          <FacialHair>
            <button onClick={() => updateLayers('Facial_Hair')} />
          </FacialHair>

          <Hair>
            <button onClick={() => updateLayers('Hair')} />
          </Hair>

          <HeadGear>
            <button onClick={() => updateLayers('Headgear')} />
          </HeadGear>

          <Helm>
            <button onClick={() => updateLayers('Helm')} />
          </Helm>

          <Hood>
            <button onClick={() => updateLayers('Hood')} />
          </Hood>

          <BackHand>
            <button onClick={() => addWeapon()} />
          </BackHand>

          <UpperBody>
            <button onClick={() => updateLayers('Upper_Body')} />
          </UpperBody>

          <Armor>
            <button onClick={() => updateLayers('Armor')} />
          </Armor>

          <ForeHand>
            <button onClick={() => updateLayers('Forehand')} />
          </ForeHand>

          <Robe>
            <button onClick={() => updateLayers('Robe')} />
          </Robe>

          <LowerBody>
            <button onClick={() => updateLayers('Lower_Body')} />
          </LowerBody>

          <Back>
            <button onClick={() => updateLayers('Back')} />
          </Back>

          <Dress>
            <button onClick={() => updateLayers('Dress')} />
          </Dress>

          <Accessories>
            <button onClick={() => updateLayers('Accessories')} />
          </Accessories>

          <Feet>
            <button onClick={() => updateLayers('Feet')} />
          </Feet>

          <Body>
            <button onClick={() => updateLayers('Body')} />
          </Body>

          <Additional>
            <button onClick={() => updateLayers('Additional_Pieces')} />
          </Additional>
        </StyledOptionsContainer>
      </BorderContainer>
    </OptionsContainer>
  )
}

export default Options
