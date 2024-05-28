import { useEffect, useState } from 'react'
import Tooltip from '@mui/material/Tooltip'
import useLayerStore from '../../../utils/store.js'
import data from '../../../utils/dataV2.js'
import SingleColorSelector from './single-color-selector.jsx'
import MultiColorSelector from './multi-color-selector.jsx'
import ItemSelectModal from '../item-select-modal/item-select-modal.jsx'
import BorderContainer from '../../border-container/border-container.jsx'
import ItemSelect from './item-select.jsx'
import ColorSelect from './color-select.jsx'
import { OptionsContainer } from '../options.style.js'
import {
  ItemOptionsContainer,
  AssetContainer,
  AssetBorder,
  AssetPreview,
  AssetImage,
  LeftArrow,
  RightArrow,
  ColorContainer,
  AssetSelectContainer,
  ButtonContainer,
  MobileContainer,
} from './item-options.style.js'

const ItemOptions = () => {
  const [image, setImage] = useState()
  const [modalState, setModalState] = useState(false)
  const [selectionType, setSelectionType] = useState('')
  const { selectedLayer, layerArr, setAsset } = useLayerStore((state) => ({
    selectedLayer: state.selectedLayer,
    layerArr: state.layerArr,
    setAsset: state.setAsset,
  }))
  const currentLayer = layerArr[selectedLayer]
  const { layerType, assetName, secondary } = currentLayer
  const [itemTypeOptions, setItemTypeOptions] = useState(
    Object.keys(data[layerType])
  )
  const [itemType, setItemType] = useState(assetName)
  const currentIndex = itemTypeOptions.indexOf(itemType)
  const isMobile = window.screen.width < 420
  const incrementAsset = () => {
    if (currentIndex === itemTypeOptions.length - 1) {
      setItemType(itemTypeOptions[0])
      setAsset(itemTypeOptions[0])
    } else {
      setItemType(itemTypeOptions[currentIndex + 1])
      setAsset(itemTypeOptions[currentIndex + 1])
    }
  }
  const decrementAsset = () => {
    if (currentIndex === 0) {
      setItemType(itemTypeOptions[itemTypeOptions.length - 1])
      setAsset(itemTypeOptions[itemTypeOptions.length - 1])
    } else {
      setItemType(itemTypeOptions[currentIndex - 1])
      setAsset(itemTypeOptions[currentIndex - 1])
    }
  }

  useEffect(() => {
    setItemType(layerArr[selectedLayer].assetName)
    return () => {
      // Cleanup function to clear data
      setItemType()
    }
  }, [selectedLayer, layerArr])
  useEffect(() => {
    setItemTypeOptions(Object.keys(data[layerType]))
    return () => {
      // Cleanup function to clear data
      setItemTypeOptions()
    }
  }, [layerType])

  useEffect(() => {
    const formatData = async () => {
      const importedImage = await import(
        `../../../assetsV3/${layerType}/${assetName}/preview.png`
      )
      setImage(importedImage.default)
    }
    formatData()
    return () => {
      // Cleanup function to clear data
      setImage()
    }
  }, [layerType, assetName])

  return (
    <OptionsContainer>
      <BorderContainer>
        <MobileContainer>
          <ItemOptionsContainer>
            <AssetContainer>
              <ButtonContainer onClick={() => decrementAsset()}>
                <LeftArrow />
              </ButtonContainer>
              <Tooltip title={assetName.replaceAll('_', ' ')} arrow>
                <AssetBorder
                  onClick={
                    isMobile
                      ? () => setModalState(true)
                      : () => setSelectionType('asset')
                  }
                  isSelected={selectionType === 'asset'}
                >
                  <AssetPreview>
                    {image && <AssetImage importedImage={image} />}
                  </AssetPreview>
                </AssetBorder>
              </Tooltip>
              <ButtonContainer onClick={() => incrementAsset()}>
                <RightArrow />
              </ButtonContainer>
            </AssetContainer>
            {secondary ? (
              <MultiColorSelector
                setSelectionType={setSelectionType}
                selectionType={selectionType}
              />
            ) : (
              <ColorContainer>
                <SingleColorSelector
                  inputWidth={12}
                  setSelectionType={setSelectionType}
                  selectionType={selectionType}
                />
              </ColorContainer>
            )}
            {!isMobile ? (
              <AssetSelectContainer>
                {selectionType === 'asset' && (
                  <ItemSelect
                    options={itemTypeOptions}
                    layerType={layerType}
                    itemType={itemType}
                  />
                )}
                {selectionType === 'colorPrimary' && (
                  <ColorSelect currentLayer={currentLayer} primary={true} />
                )}
                {selectionType === 'colorSecondary' && (
                  <ColorSelect currentLayer={currentLayer} primary={false} />
                )}
                {selectionType === '' && <></>}
              </AssetSelectContainer>
            ) : (
              <ItemSelectModal
                open={modalState}
                onClose={() => setModalState(false)}
                options={itemTypeOptions}
                layerType={layerType}
              />
            )}
          </ItemOptionsContainer>
        </MobileContainer>
      </BorderContainer>
    </OptionsContainer>
  )
}

export default ItemOptions
