import React, { useEffect, useState, useRef } from 'react'
import { BorderContainer, StyledAsset, StyledContainer } from './inner-asset.style'
import { useDrag, useDrop } from 'react-dnd'
import useLayerStore from '../../../utils/store'

const InnerAsset = ({ type, asset, color, index, itemObj, layer, setAdditionalIndex }) => {
  const updateLayer = useLayerStore((state) => state.updateLayer)

  const [{ isDragging }, dragRef] = useDrag({
    type: 'item',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const [, dropRef] = useDrop({
    accept: 'item',
    hover: (item, monitor) => {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) {
        return
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top

      // if dragging down, continue only when hover is smaller than middle Y
      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return
      // if dragging up, continue only when hover is bigger than middle Y
      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return
      const copyArr = layer
      const element = copyArr.additional[dragIndex]
      copyArr.additional.splice(dragIndex, 1)
      copyArr.additional.splice(hoverIndex, 0, element)
      updateLayer(copyArr)
      item.index = hoverIndex
    },
  })

  const ref = useRef(null)
  const dragDropRef = dragRef(dropRef(ref))
  // const opacity = isDragging ? 0 : 1
  const [image, setImage] = useState()
  useEffect(() => {
    const formatData = async () => {
      const imageImport = await import(
        `../../../assetsV3/${type}/${asset}/preview.png`
      )
      setImage(imageImport.default)
    }
    formatData()
  }, [type, asset, color])

  return (
    <BorderContainer ref={dragDropRef} isDragging={isDragging} onClick={() => setAdditionalIndex(index)}>
      <StyledContainer>
        {image && <StyledAsset src={image} alt='asset-preview' />}
      </StyledContainer>
    </BorderContainer>
  )
}

export default InnerAsset