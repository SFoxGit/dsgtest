import React from 'react'
import { StyledItemArrayContainer } from './style'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Coin from '../coin'
import useLayerStore from '../../utils/store'
import useOptionsStore from '../options/utils/options-store'

const ItemContainer = ({ setShowLayerModal }) => {
  const layerArr = useLayerStore((state) => state.layerArr)
  const setCurrentLayer = useOptionsStore((state) => state.setCurrentLayer)

  return (
    <DndProvider backend={HTML5Backend}>
      <StyledItemArrayContainer item xs={2} md={1} sx={{ boxShadow: 3 }}>
        {layerArr?.map((itemObj, index) =>
          index > 3 ? (
            <Coin
              key={'ItemComp' + index || 'new'}
              type={itemObj.layerType}
              asset={itemObj.assetName}
              color={itemObj.color}
              index={index}
              onClick={() => setCurrentLayer(itemObj)}
            />
          ) : null
        )}
      </StyledItemArrayContainer>
    </DndProvider>
  )
}

export default ItemContainer
