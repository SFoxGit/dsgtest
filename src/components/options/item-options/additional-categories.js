import React from 'react'
import BorderContainer from '../../border-container/border-container'
import RandomizerTool from '../../../utils/randomizer-tool'
import useLayerStore from '../../../utils/store'

import {
  OptionsContainer,
  StyledOptionsContainer,
  Face,
  FacialHair,
  Hair,
  HeadGear,
  Helm,
  Hood,
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
} from './additional-categories.style'

const AdditionalCategories = ({ currentLayer }) => {
  const updateLayer = useLayerStore((state) => state.updateLayer)

  const updateLayers = (layer) => {
    const copyLayer = currentLayer
    const randomObj = RandomizerTool(layer)
    copyLayer.additional.push({
      id: currentLayer.additional.length,
      layerType: layer,
      assetName: randomObj.asset,
      color: randomObj.color,
      isLocked: false,
      display: true,
      secondary: randomObj.secondary,
      additional: [],
    })
    updateLayer(copyLayer)
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

export default AdditionalCategories
