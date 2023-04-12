import React from 'react'
import useOptionsStore from '../options/utils/options-store'
import RandomLockSwitch from './random-lock-switch'
import DisplaySwitch from './display-switch'
import useLayerStore from '../../utils/store'

import {
  GridArea,
  OuterContainer,
  BorderContainer,
  StyledContainer,
  CloseButton,
  DeleteButton,
  UpButton,
  DownButton,
  CloseContainer,
  DeleteContainer,
  UpContainer,
  DownContainer,
} from './tablet-header.style'

const TabletHeader = () => {
  // Close, Hide, Randomize, Delete, MoveUp, MoveDown
  const setOptionsState = useOptionsStore((state) => state.setOptionsState)
  const optionsState = useOptionsStore((state) => state.optionsState)
  const { removeLayer, selectedLayer, moveLayer, setSelectedLayer, layerArr } =
    useLayerStore((state) => ({
      removeLayer: state.removeLayer,
      selectedLayer: state.selectedLayer,
      moveLayer: state.moveLayer,
      setSelectedLayer: state.setSelectedLayer,
      layerArr: state.layerArr,
    }))

  const deleteLayer = () => {
    setOptionsState('main')
    removeLayer()
  }
  const moveUp = () => {
    moveLayer(selectedLayer, selectedLayer - 1)
    setSelectedLayer(selectedLayer - 1)
  }
  const moveDown = () => {
    moveLayer(selectedLayer, selectedLayer + 1)
    setSelectedLayer(selectedLayer + 1)
  }
  return (
    <GridArea>
      <OuterContainer>
        <BorderContainer>
          {optionsState === 'main' ? (
            <StyledContainer />
          ) : (
            <StyledContainer>
              <DisplaySwitch />
              <RandomLockSwitch />
              {selectedLayer > 1 && (
                <UpContainer>
                  <UpButton onClick={() => moveUp()} />
                </UpContainer>
              )}
              {selectedLayer < layerArr.length - 1 && (
                <DownContainer>
                  <DownButton onClick={() => moveDown()} />
                </DownContainer>
              )}
              <DeleteContainer>
                <DeleteButton onClick={() => deleteLayer()} />
              </DeleteContainer>
              <CloseContainer>
                <CloseButton onClick={() => setOptionsState('main')} />
              </CloseContainer>
            </StyledContainer>
          )}
        </BorderContainer>
      </OuterContainer>
    </GridArea>
  )
}

export default TabletHeader
