import { useEffect, useRef, useState } from 'react'
import mergeImages from 'merge-images'
import useLayerStore from '../../utils/store'

const CanvasComponent = ({ pixels }) => {
  const canvasRef = useRef(null)
  const [imageConverted, setImageConverted] = useState('')
  const layerArr = useLayerStore((state) => state.layerArr)
  
  useEffect(() => {
    const formatData = async () => {
      const newArr = []
      for (const layer of layerArr) {
        // SkinTone has different pathing
        if (
          layer.layerType === 'Skins' ||
          layer.assetName === null ||
          layer.id === 0
        ) {
          const importedImage = await import(
            `../../assetsV3/${layer.layerType}/${layer.color.substring(
              0,
              layer.color.length - 4
            )}.png`
          )
          newArr.push(importedImage.default)
        } else {
          // Check to see if item has primary/secondary options
          if (!layer.secondary) {
            const importedImage2 = await import(
              `../../assetsV3/${layer.layerType}/${
                layer.assetName
              }/${layer.color.substring(0, layer.color.length - 4)}.png`
            )
            layer.display && newArr.push(importedImage2.default)
          } else {
            const importedImage3 = await import(
              `../../assetsV3/${layer.layerType}/${
                layer.assetName
              }/${layer.color.substring(0, layer.color.length - 4)}.png`
            )
            const importedSecondImage = await import(
              `../../assetsV3/${layer.layerType}/${
                layer.assetName
              }/${layer.secondary.substring(0, layer.secondary.length - 4)}.png`
            )
            if (layer.display) {
              newArr.push(importedImage3.default)
              newArr.push(importedSecondImage.default)
            }
          }
        }
      }
      mergeImages(newArr).then((res) => setImageConverted(res))
    }
    formatData()
    return () => {
      // Cleanup function to clear data
      setImageConverted('')
    }
  }, [layerArr])

  useEffect(() => {
    if (imageConverted) {
      const canvas = canvasRef.current
      const scaling = pixels / 35
      const test = canvas.width
      const ctx = canvas.getContext('2d')
      canvas.width = test
      const img = new Image()
      img.src = imageConverted
      img.onload = () => {
        ctx.imageSmoothingEnabled = false
        ctx.mozImageSmoothingEnabled = false
        ctx.oImageSmoothingEnabled = false
        ctx.webkitImageSmoothingEnabled = false
        ctx.scale(scaling, scaling)
        ctx.drawImage(img, 0, 0)
      }
    }
  }, [imageConverted, pixels])
  return (
    <canvas id='canvas' ref={canvasRef} height={pixels} width={pixels}></canvas>
  )
}

export default CanvasComponent
