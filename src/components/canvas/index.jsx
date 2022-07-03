import React, { useEffect, useRef } from 'react'

const Canvas = ({ srcImage }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
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
      ctx.scale(8.33, 8.33)
      ctx.drawImage(img, 0, 0)
    }
  }, [srcImage])
  return <canvas id='canvas' ref={canvasRef} height='200' width='200'></canvas>
}

export default Canvas
