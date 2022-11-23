import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import mergeImages from 'merge-images'
// import exportAsImage from "../../utils/exportAsImage";
import Canvas from '../canvas'
import RandomButton from '../random-button/random-button'
import { ImageHoldingGrid, StoneTablet } from './styles'
import ItemContainer from '../item-container/ItemContainer'
import useLayerStore from '../../utils/store'
import OptionsMenu from '../options/index'

export default function Interface() {
  const [pixels, setPixels] = useState(200)
  const [imageConverted, setImageConverted] = useState('')
  const layerArr = useLayerStore((state) => state.layerArr)

  useEffect(() => {
    const formatData = async () => {
      const newArr = []
      for (const layer of layerArr) {
        if (layer.assetName) {
          const importedImage = await import(
            `../../assetsV3/${layer.layerType}/${layer.assetName}/${layer.color}`
          )
          layer.display && newArr.push(importedImage.default)
        } else {
          const importedImage = await import(
            `../../assetsV3/${layer.layerType}/${layer.color}`
          )
          newArr.push(importedImage.default)
        }
      }
      mergeImages(newArr).then((res) => setImageConverted(res))
    }
    formatData()
  }, [layerArr])

  return (
    <>
      <Grid container>
        <Grid
          item
          container
          xs={12}
          md={2}
          columnSpacing={2}
          pl={2}
          pr={{ xs: 0, md: 2 }}
        >
          <ImageHoldingGrid item container xs={12}>
            <Canvas srcImage={imageConverted} pixels={pixels} />
          </ImageHoldingGrid>
          <Grid
            item
            container
            xs={12}
            justifyContent='center'
            my={1}
            height='40px'
          >
            <RandomButton layerArr={layerArr} />
          </Grid>
        </Grid>
        <ItemContainer layerArr={layerArr} />
        <StoneTablet  xs={12} md={8}>
          <OptionsMenu />
        </StoneTablet>
      </Grid>
    </>
  )
}
