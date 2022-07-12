import data from './dataV2'

const RandomizerTool = (itemType) => {
  const assets = Object.keys(data[itemType])
  const randomNumber = Math.floor(Math.random() * assets.length)
  const newAsset = assets[randomNumber]
  const colorOptions = data[itemType][newAsset]
  const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)]
  return({asset: newAsset, color: randomColor})
}

export default RandomizerTool