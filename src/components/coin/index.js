import React, { useEffect, useState, useRef } from "react";
import coinGold from "../../design/coinGold.png";
import { StyledCoin, StyledAsset, StyledContainer } from "./style";
import { useDrag, useDrop } from "react-dnd";
import useLayerStore from "../../utils/store";
// import ItemModal from "../item-modal/ItemModal";

const Coin = ({ type, asset, color, index }) => {
  const moveLayer = useLayerStore((state) => state.moveLayer);
  // const [showItemModal, setShowItemModal] = useState(false);

  const [{ isDragging }, dragRef] = useDrag({
    type: "item",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const [, dropRef] = useDrop({
    accept: "item",
    hover: (item, monitor) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top;

      // if dragging down, continue only when hover is smaller than middle Y
      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;
      // if dragging up, continue only when hover is bigger than middle Y
      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;

      moveLayer(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const ref = useRef(null);
  const dragDropRef = dragRef(dropRef(ref));
  const opacity = isDragging ? 0 : 1;
  const [image, setImage] = useState();
  useEffect(() => {
    const formatData = async () => {
      const imageImport = await import(
        `../../assetsV3/${type}/${asset}/preview.png`
      );
      setImage(imageImport.default);
    };
    formatData();
  }, [type, asset, color]);

  return (
    <>
      <StyledContainer ref={dragDropRef} style={{ opacity }}>
        <StyledCoin src={coinGold} alt="gold-coin" />
        {image && <StyledAsset src={image} alt="asset-preview" />}
      </StyledContainer>
      {/* <ItemModal
        showItemModal={showItemModal}
        setShowItemModal={setShowItemModal}
      /> */}
    </>
  );
};

export default Coin;
