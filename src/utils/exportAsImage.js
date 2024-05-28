const downloadImage = (blob, fileName) => {
  const fakeLink = window.document.createElement('a')
  fakeLink.style = 'display:none;'
  fakeLink.download = fileName

  fakeLink.href = blob
  fakeLink.rel = 'noreferrer'
  
  document.body.appendChild(fakeLink)
  fakeLink.click()
  document.body.removeChild(fakeLink)

  fakeLink.remove()
}
const exportAsImage = async (imageFileName) => {
  const image = document.getElementById('canvas').toDataURL("image/png")
  downloadImage(image, imageFileName)
}

export default exportAsImage
