import React, { useEffect, useState } from 'react'
import coinGold from '../../design/coinGold.png'
import { StyledCoin, StyledAsset, StyledContainer } from './style'

const Coin = ({ type, asset, color }) => {
  const [image, setImage] = useState()
  useEffect(() => {
    const formatData = async () => {
      const imageImport = await import(`../../assetsV2/${type}/${asset}/${color}`)
      setImage(imageImport.default)
    }
    formatData()
  }, [type, asset, color])
  console.log(image)
  return (
    <StyledContainer>
      <StyledCoin src={coinGold} alt='gold-coin' />
      {image && <StyledAsset src={image} alt='asset-preview' />}
    </StyledContainer>
  )
}

export default Coin
