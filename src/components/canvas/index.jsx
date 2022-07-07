import React, { useEffect, useRef } from 'react'

const Canvas = ({ srcImage, pixels }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const scaling = pixels / 24
    const test = canvas.width
    const ctx = canvas.getContext('2d')
    canvas.width = test
    const img = new Image()
    img.src = srcImage
    img.onload = () => {
      ctx.imageSmoothingEnabled = false
      ctx.mozImageSmoothingEnabled = false
      ctx.oImageSmoothingEnabled = false
      ctx.webkitImageSmoothingEnabled = false
      ctx.scale(scaling, scaling)
      ctx.drawImage(img, 0, 0)
    }
  }, [srcImage, pixels])
  return <canvas id='canvas' ref={canvasRef} height={pixels} width={pixels}></canvas>
}

export default Canvas
