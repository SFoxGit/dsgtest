import React, { useEffect, useState } from 'react'
import { StyledAssetContainer, AssetImage } from './individual-asset.style'
import useLayerStore from '../../../utils/store'
import BorderContainer from '../../border-container/border-container'
import Tooltip from '@mui/material/Tooltip'

const IndividualAsset = ({ asset, layerType }) => {
  const setAsset = useLayerStore((state) => state.setAsset)
  const [image, setImage] = useState()
  const [background, setBackground] = useState('white')

  const onClickAsset = () => {
    setAsset(asset)
  }
  useEffect(() => {
    const formatData = async () => {
      const importedImage = await import(
        `../../../assetsV3/${layerType}/${asset}/preview.png`
      )
      setImage(importedImage.default)
    }
    formatData()
  }, [layerType, asset])

  return (
    <StyledAssetContainer
      onClick={() => onClickAsset()}
      onMouseEnter={() => setBackground('#bccccc')}
      onMouseLeave={() => setBackground('white')}
    >
      <BorderContainer inner={background}>
        <Tooltip title={asset} arrow>
          <div>
            <AssetImage importedImage={image} />
          </div>
        </Tooltip>
      </BorderContainer>
    </StyledAssetContainer>
  )
}

export default IndividualAsset
