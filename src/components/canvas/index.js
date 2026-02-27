import React, { useEffect, useRef, useState } from 'react'
import mergeImages from 'merge-images'
import useLayerStore from '../../utils/store'

const Canvas = ({ pixels }) => {
  const canvasRef = useRef(null)
  const [imageConverted, setImageConverted] = useState('')
  const layerArr = useLayerStore((state) => state.layerArr)

  useEffect(() => {
    const formatData = async () => {
      const newArr = []
      for (const layer of layerArr) {
        // SkinTone has different pathing
        if (layer.layerType === 'Skins' || layer.assetName === null || layer.id === 0) {
          const importedImage = await import(
            `../../assetsV3/${layer.layerType}/${layer.color}`
            )
            newArr.push(importedImage.default)
          } else {
          // Check to see if item has primary/secondary options
          if (!layer.secondary) {
            const importedImage = await import(
              `../../assetsV3/${layer.layerType}/${layer.assetName}/${layer.color}`
            )
            layer.display && newArr.push(importedImage.default)
          } else {
            const importedImage = await import(
              `../../assetsV3/${layer.layerType}/${layer.assetName}/${layer.color}`
            )
            const importedSecondImage = await import(
              `../../assetsV3/${layer.layerType}/${layer.assetName}/${layer.secondary}`
            )
            if (layer.display) {
              newArr.push(importedImage.default)
              newArr.push(importedSecondImage.default)
            }
          }
        }
        if (layer.additional?.length > 0) {
          for (const additionalLayer of layer.additional) {
            if (!additionalLayer.secondary) {
              const importedImage = await import(
                `../../assetsV3/${additionalLayer.layerType}/${additionalLayer.assetName}/${additionalLayer.color}`
              )
              additionalLayer.display && newArr.push(importedImage.default)
            } else {
              const importedImage = await import(
                `../../assetsV3/${additionalLayer.layerType}/${additionalLayer.assetName}/${additionalLayer.color}`
              )
              const importedSecondImage = await import(
                `../../assetsV3/${additionalLayer.layerType}/${additionalLayer.assetName}/${additionalLayer.secondary}`
              )
              if (additionalLayer.display) {
                newArr.push(importedImage.default)
                newArr.push(importedSecondImage.default)
              }
            }
          }
        }
      }
      mergeImages(newArr).then((res) => setImageConverted(res))
    }
    formatData()
  }, [layerArr])

  useEffect(() => {
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
  }, [imageConverted, pixels])
  return (
    <canvas id='canvas' ref={canvasRef} height={pixels} width={pixels}></canvas>
  )
}

export default Canvas
