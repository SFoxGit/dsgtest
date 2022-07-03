// import html2canvas from 'html2canvas'

const downloadImage = (blob, fileName) => {
  const fakeLink = window.document.createElement('a')
  fakeLink.style = 'display:none;'
  fakeLink.download = fileName

  fakeLink.href = blob

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

// const testFunction = () => {
//   var sourceimage = document.querySelector('img')
//   var canvas = document.querySelector('canvas')
//   var out = document.querySelector('textarea')
//   var output = document.querySelector('output')
//   var jpg = document.querySelector('#jpg')
//   var quality = document.querySelector('#quality')
//   var context = canvas.getContext('2d')
//   canvas.style.display = 'none'
//   function toURL(ev) {
//     var t = ev.target
//     if (t.tagName === 'IMG') {
//       canvas.height = t.offsetHeight
//       canvas.width = t.offsetWidth
//       context.drawImage(t, 0, 0, t.offsetWidth, t.offsetHeight)
//       var url = jpg.checked ? canvas.toDataURL('image/jpeg', +quality.value) : canvas.toDataURL('image/png')
//       out.value = url
//       var img = document.createElement('img')
//       img.setAttribute('src', url)
//       output.innerHTML = url.length + ' bytes '
//       output.appendChild(img)
//     }
//   }
// }
