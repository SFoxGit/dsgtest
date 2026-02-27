import React, { useEffect, useState } from 'react'
import {
  StyledItemArrayContainer,
  BorderContainer,
  StyledContainer,
} from './style'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
import Coin from '../coin'
import useLayerStore from '../../utils/store'

const ItemContainer = () => {
  const layerArr = useLayerStore((state) => state.layerArr)
  const copy = [...layerArr]
  const isDesktop = window.screen.width > 920
  const [copyArr, setCopyArr] = useState([...copy.reverse()])
  useEffect(() => {
    const newCopy = [...layerArr]
    setCopyArr([...newCopy.reverse()])
  }, [layerArr])
  return (
    <StyledItemArrayContainer>
      <BorderContainer>
        <DndProvider backend={isDesktop ? HTML5Backend : TouchBackend}>
          <StyledContainer>
            {copyArr.map((itemObj, index) =>
              index < layerArr.length - 1 && itemObj.assetName ? (
                <Coin
                  key={'ItemComp' + index || 'new'}
                  type={itemObj.layerType}
                  asset={itemObj.assetName}
                  color={itemObj.color}
                  index={itemObj.id}
                />
              ) : null
            )}
          </StyledContainer>
        </DndProvider>
      </BorderContainer>
    </StyledItemArrayContainer>
  )
}

export default ItemContainer
