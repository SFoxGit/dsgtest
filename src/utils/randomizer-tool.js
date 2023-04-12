import data from './dataV2'

const RandomizerTool = (itemType) => {
  const assets = Object.keys(data[itemType])
  const randomNumber = Math.floor(Math.random() * assets.length)
  const newAsset = assets[randomNumber]
  const colorOptions = data[itemType][newAsset]
  if (colorOptions[0].substring(0, 7) === 'primary') {
    const primaryColorOptions = colorOptions.filter(
      (colorElement) => colorElement.substring(0, 7) === 'primary'
    )
    const secondaryColorOptions = colorOptions.filter(
      (colorElement) => colorElement.substring(0, 7) === 'seconda'
    )
    const splitPrimary = primaryColorOptions.map((colorOption) => {
      const optionSplit = colorOption.split('_')
      return optionSplit[1]
    })
    const splitSecondary = secondaryColorOptions.map((colorOption) => {
      const optionSplit = colorOption.split('_')
      return optionSplit[1]
    })
    const randomPrimaryColor =
      splitPrimary[Math.floor(Math.random() * splitPrimary.length)]
    const randomSecondaryColor =
      splitSecondary[Math.floor(Math.random() * splitSecondary.length)]
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
