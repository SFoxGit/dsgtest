import React, { useEffect, useState } from 'react'
import useLayerStore from '../../../utils/store'
import data from '../../../utils/dataV2'
import SingleColorSelector from './single-color-selector'
import MultiColorSelector from './multi-color-selector'
import ItemSelectModal from '../item-select-modal/item-select-modal'
import BorderContainer from '../../border-container/border-container'
import ItemSelect from './item-select'
import ColorSelect from './color-select'
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
} from './item-options.style'
import { OptionsContainer } from '../options.style'

const ItemOptions = () => {
  const [image, setImage] = useState()
  const [modalState, setModalState] = useState(false)
  const [selectionType, setSelectionType] = useState('')
  const { selectedLayer, layerArr, setAsset } = useLayerStore((state) => ({
    selectedLayer: state.selectedLayer,
    layerArr: state.layerArr,
    setAsset: state.setAsset,
  }))
  const [currentLayer, setCurrentLayer] = useState(layerArr[selectedLayer])
  const { layerType, assetName, color, secondary } = currentLayer
  const [itemTypeOptions, setItemTypeOptions] = useState(
    Object.keys(data[layerType])
  )
  const [itemType, setItemType] = useState(assetName)
  const [primaryColor, setPrimaryColor] = useState(color)
  const currentIndex = itemTypeOptions.indexOf(itemType)
  const dataColors = data[layerType][itemType]
  const [displayMulti, setDisplayMulti] = useState(secondary)
  const primaryColorOptions = dataColors.filter(
    (colorElement) => colorElement.substring(0, 7) === 'primary'
  )
  const splitPrimary = primaryColorOptions.map((colorOption) => {
    const optionSplit = colorOption.split('_')
    return optionSplit[1]
  })
  const colorChecked =
    dataColors[0].substring(0, 7) === 'primary' ? splitPrimary : dataColors
  const [colorOptions, setColorOptions] = useState(colorChecked)
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
    setCurrentLayer(layerArr[selectedLayer])
    setItemType(layerArr[selectedLayer].assetName)
    setPrimaryColor(layerArr[selectedLayer].color)
    setDisplayMulti(layerArr[selectedLayer].secondary)
  }, [selectedLayer, layerArr])
  useEffect(() => {
    setItemTypeOptions(Object.keys(data[layerType]))
  }, [layerType])

  useEffect(() => {
    if (colorOptions?.length && primaryColor === (null || '')) {
      setPrimaryColor(colorOptions[0])
    }
  }, [setPrimaryColor, colorOptions, primaryColor])
  // Preview Asset
  useEffect(() => {
    const formatData = async () => {
      const importedImage = await import(
        `../../../assetsV3/${layerType}/${assetName}/preview.png`
      )
      setImage(importedImage.default)
    }
    formatData()
  }, [layerType, assetName])

  return (
    <OptionsContainer>
      <BorderContainer>
        <ItemOptionsContainer>
          <AssetContainer>
            <ButtonContainer onClick={() => decrementAsset()} >
              <LeftArrow />
            </ButtonContainer>
            <AssetBorder onClick={isMobile ? () => setModalState(true) : () => setSelectionType('asset')}>
              <AssetPreview>
                {image && <AssetImage importedImage={image} />}
              </AssetPreview>
            </AssetBorder>
            <ButtonContainer onClick={() => incrementAsset()} >
              <RightArrow />
            </ButtonContainer>
          </AssetContainer>
          {displayMulti ? (
            <MultiColorSelector
              primaryColor={primaryColor}
              setPrimaryColor={setPrimaryColor}
              setSelectionType={setSelectionType}
            />
          ) : (
            <ColorContainer>
              <SingleColorSelector
                colorOptions={colorOptions}
                primaryColor={primaryColor}
                setPrimaryColor={setPrimaryColor}
                inputWidth={12}
                setSelectionType={setSelectionType}
              />
            </ColorContainer>
          )}
          {!isMobile ? (
            <AssetSelectContainer>
              {selectionType === 'asset' && (
                <ItemSelect options={itemTypeOptions} layerType={layerType} />
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
      </BorderContainer>
    </OptionsContainer>
  )
}

export default ItemOptions
