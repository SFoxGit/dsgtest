import { useEffect, useState } from 'react'
import Tooltip from '@mui/material/Tooltip'
import useLayerStore from '../../../utils/store'
import BorderContainer from '../../border-container/border-container'
import { StyledAssetContainer, AssetImage } from './individual-asset.style'

const IndividualAsset = ({ asset, isSelected }) => {
  const setAsset = useLayerStore((state) => state.setAsset)
  const layerArr = useLayerStore((state) => state.layerArr)
  const selectedLayer = useLayerStore((state) => state.selectedLayer)
  const [image, setImage] = useState()
  const [background, setBackground] = useState('white')
  const title = asset.replaceAll('_', ' ')
  const onClickAsset = () => {
    setAsset(asset)
  }
  useEffect(() => {
    const formatData = async () => {
      const importedImage = await import(
        `../../../assetsV3/${layerArr[selectedLayer].layerType}/${asset}/preview.png`
      )
      setImage(importedImage.default)
    }
    formatData()
    return () => {
      // Cleanup function to clear data
      setImage()
    }
  }, [asset, layerArr, selectedLayer])

  return (
    <StyledAssetContainer
      onClick={() => onClickAsset()}
      onMouseEnter={() => setBackground('#bccccc')}
      onMouseLeave={() => setBackground('white')}
    >
      <BorderContainer
        outer={isSelected ? '#c45508' : false}
        inner={background}
      >
        <Tooltip title={title} arrow>
          <div>
            <AssetImage importedImage={image} />
          </div>
        </Tooltip>
      </BorderContainer>
    </StyledAssetContainer>
  )
}

export default IndividualAsset
