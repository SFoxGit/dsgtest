import data from './dataV2.js'

const RandomizerTool = (itemType) => {
  console.log(data)
  const assets = Object.keys(data[itemType])
  const randomNumber = Math.floor(Math.random() * assets.length)
  const newAsset = assets[randomNumber]
  const colorOptions = data[itemType][newAsset]
  if (colorOptions[colorOptions.length - 1].substring(0, 7) === 'seconda') {
    const primaryColorOptions = colorOptions.filter(
      (colorElement) => colorElement.substring(0, 7) === 'primary'
    )
    const secondaryColorOptions = colorOptions.filter(
      (colorElement) => colorElement.substring(0, 7) === 'seconda'
    )
    const randomPrimaryColor =
      primaryColorOptions[
        Math.floor(Math.random() * primaryColorOptions.length)
      ]
    const randomSecondaryColor =
      secondaryColorOptions[
        Math.floor(Math.random() * secondaryColorOptions.length)
      ]
    return {
      asset: newAsset,
      color: randomPrimaryColor,
      secondary: randomSecondaryColor,
    }
  }
  const randomColor =
    colorOptions[Math.floor(Math.random() * colorOptions.length)]
  return { asset: newAsset, color: randomColor, secondary: false }
}

export default RandomizerTool
