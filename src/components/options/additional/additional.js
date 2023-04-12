import React, { useEffect, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import useLayerStore from '../../../utils/store'
import BorderContainer from '../../border-container/border-container'
import InnerAsset from './inner-asset'
import { StyledContainer, InnerContainer } from './additional.style'
const Additional = ({setAdditionalIndex}) => {
  const { selectedLayer, layerArr } = useLayerStore((state) => ({
    selectedLayer: state.selectedLayer,
    layerArr: state.layerArr,
  }))
  const [layer, setLayer] = useState()

  useEffect(() => {
    setLayer(layerArr[selectedLayer])
  }, [layerArr, selectedLayer])
  return (
    <StyledContainer>
      <BorderContainer>
        <DndProvider backend={HTML5Backend}>
          <InnerContainer>
            {layer?.additional.map((itemObj, index) => (
              <InnerAsset
                key={itemObj.assetName + index || 'new'}
                type={itemObj.layerType}
                asset={itemObj.assetName}
                color={itemObj.color}
                itemObj={itemObj}
                layer={layer}
                index={index}
                setAdditionalIndex={setAdditionalIndex}
              />
            ))}
          </InnerContainer>
        </DndProvider>
      </BorderContainer>
    </StyledContainer>
  )
}

export default Additional
