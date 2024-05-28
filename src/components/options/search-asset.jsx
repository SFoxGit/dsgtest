import { useEffect, useState } from 'react'
import Tooltip from '@mui/material/Tooltip'
import useLayerStore from '../../utils/store'
import BorderContainer from '../border-container/border-container'
import data from '../../utils/dataV2'
import {
  StyledAssetContainer,
  AssetImage,
} from './item-select-modal/individual-asset.style'

const SearchAsset = ({ asset, layerType }) => {
  const addLayer = useLayerStore((state) => state.addLayer)
  const [image, setImage] = useState()
  const [background, setBackground] = useState('white')
  const title = asset.replaceAll('_', ' ')
  const colorOptions = data[layerType][asset]
  const onClickAsset = () => {
    if (colorOptions[colorOptions.length - 1].substring(0, 7) === 'seconda') {
      const primaryColorOptions = colorOptions.filter(
        (colorElement) => colorElement.substring(0, 7) === 'primary'
      )
      const secondaryColorOptions = colorOptions.filter(
        (colorElement) => colorElement.substring(0, 7) === 'seconda'
      )
      const randomPrimaryColor =
        primaryColorOptions[
          Math.floor(Math.random() * primaryColorOptions.length)
        ]
      const randomSecondaryColor =
        secondaryColorOptions[
          Math.floor(Math.random() * secondaryColorOptions.length)
        ]
      addLayer({
        layerType: layerType,
        assetName: asset,
        color: randomPrimaryColor,
        isLocked: false,
        display: true,
        secondary: randomSecondaryColor,
      })
    } else {
      const randomColor =
        colorOptions[Math.floor(Math.random() * colorOptions.length)]
      addLayer({
        layerType: layerType,
        assetName: asset,
        color: randomColor,
        isLocked: false,
        display: true,
        secondary: false,
      })
    }
  }
  useEffect(() => {
    const formatData = async () => {
      const importedImage = await import(
        `../../assetsV3/${layerType}/${asset}/preview.png`
      )
      setImage(importedImage.default)
    }
    formatData()
    return () => {
      // Cleanup function to clear data
      setImage()
    }
  }, [asset, layerType])

  return (
    <StyledAssetContainer
      onClick={() => onClickAsset()}
      onMouseEnter={() => setBackground('#bccccc')}
      onMouseLeave={() => setBackground('white')}
    >
      <BorderContainer outer={false} inner={background}>
        <Tooltip title={title} arrow>
          <div>
            <AssetImage importedImage={image} />
          </div>
        </Tooltip>
      </BorderContainer>
    </StyledAssetContainer>
  )
}

export default SearchAsset
