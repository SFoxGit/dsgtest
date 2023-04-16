import React from 'react'
import useOptionsStore from '../options/utils/options-store'
import RandomLockSwitch from './random-lock-switch'
import DisplaySwitch from './display-switch'
import useLayerStore from '../../utils/store'
import Tooltip from '@mui/material/Tooltip'

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
  ButtonContainer,
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
                  <ButtonContainer>
                    <Tooltip title='Move layer up'>
                      <UpButton onClick={() => moveUp()} />
                    </Tooltip>
                  </ButtonContainer>
                </UpContainer>
              )}
              {selectedLayer < layerArr.length - 1 && (
                <DownContainer>
                  <ButtonContainer>
                    <Tooltip title='Move layer down'>
                      <DownButton onClick={() => moveDown()} />
                    </Tooltip>
                  </ButtonContainer>
                </DownContainer>
              )}
              <DeleteContainer>
                <ButtonContainer>
                  <Tooltip title='Delete layer'>
                    <DeleteButton onClick={() => deleteLayer()} />
                  </Tooltip>
                </ButtonContainer>
              </DeleteContainer>
              <CloseContainer>
                <ButtonContainer>
                  <Tooltip title='Close item options and return to add new layer screen'>
                    <CloseButton onClick={() => setOptionsState('main')} />
                  </Tooltip>
                </ButtonContainer>
              </CloseContainer>
            </StyledContainer>
          )}
        </BorderContainer>
      </OuterContainer>
    </GridArea>
  )
}

export default TabletHeader
