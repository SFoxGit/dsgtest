import React from 'react'
import {
  StyledItemArrayContainer,
  BorderContainer,
  StyledContainer,
} from './style'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Coin from '../coin'
import useLayerStore from '../../utils/store'

const ItemContainer = () => {
  const layerArr = useLayerStore((state) => state.layerArr)
  return (
    <StyledItemArrayContainer>
      <BorderContainer>
        <DndProvider backend={HTML5Backend}>
          <StyledContainer>
            {layerArr?.map((itemObj, index) =>
              index > 0 ? (
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
