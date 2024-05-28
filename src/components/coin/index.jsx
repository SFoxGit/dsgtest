import { useEffect, useState, useRef } from 'react'
import { BorderContainer, StyledAsset, StyledContainer } from './style'
import { useDrag, useDrop } from 'react-dnd'
import useLayerStore from '../../utils/store'
import useOptionsStore from '../options/utils/options-store'

const Coin = ({ type, asset, color, index }) => {
  const moveLayer = useLayerStore((state) => state.moveLayer)
  const setSelectedLayer = useLayerStore((state) => state.setSelectedLayer)
  const selectedLayer = useLayerStore((state) => state.selectedLayer)
  const setOptionsState = useOptionsStore((state) => state.setOptionsState)
  const optionsState = useOptionsStore((state) => state.optionsState)
  const handleCoinClick = () => {
    setOptionsState('main')
    setSelectedLayer(index)
    setOptionsState('item')
  }

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
      moveLayer(dragIndex, hoverIndex)
      item.index = hoverIndex
      setSelectedLayer(hoverIndex)
    },
  })

  const ref = useRef(null)
  const dragDropRef = dragRef(dropRef(ref))
  // const opacity = isDragging ? 0 : 1
  const [image, setImage] = useState()
  useEffect(() => {
    const formatData = async () => {
      const imageImport = await import(
        `../../assetsV3/${type}/${asset}/preview.png`
      )
      setImage(imageImport.default)
    }
    formatData()
    return () => {
      // Cleanup function to clear data
      setImage()
    }
  }, [type, asset, color])

  return (
    <BorderContainer
      ref={dragDropRef}
      onClick={() => handleCoinClick()}
      isDragging={isDragging}
      isSelected={selectedLayer === index && optionsState === 'item'}
    >
      <StyledContainer>
        {image && <StyledAsset importedImage={image} alt='asset-preview' />}
      </StyledContainer>
    </BorderContainer>
  )
}

export default Coin
