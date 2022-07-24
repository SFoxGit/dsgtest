import create from 'zustand'
import RandomizerTool from './randomizer-tool'

const randomWeapon = RandomizerTool('Off_Hand')
// const randomHair = RandomizerTool('Hair')
const randomHat = RandomizerTool('Hats')
const randomUpper = RandomizerTool('Upper')
const randomLower = RandomizerTool('Lower')
const randomFeet = RandomizerTool('Feet')

const useStore = create((set) => ({
  layerArr: [
    { id: 0, layerType: 'Skin', assetName: null, color: 'pale.png', isOpen: true, isLocked: false, display: true },
    { id: 1, layerType: 'Arms', assetName: 'Bare_Arm', color: 'pale.png', isOpen: true, isLocked: true, display: false },
    { id: 2, layerType: 'Off_Hand', assetName: randomWeapon.asset, color: randomWeapon.color, isOpen: true, isLocked: false, display: false },
    { id: 3, layerType: 'Sleeves', assetName: 'None', color: 'none', isOpen: true, isLocked: false, display: false },
    { id: 4, layerType: 'Hats', assetName: randomHat.asset, color: randomHat.color, isOpen: true, isLocked: false, display: true },
    { id: 5, layerType: 'Upper', assetName: randomUpper.asset, color: randomUpper.color, isOpen: true, isLocked: false, display: true },
    { id: 6, layerType: 'Lower', assetName: randomLower.asset, color: randomLower.color, isOpen: true, isLocked: false, display: true },
    { id: 7, layerType: 'Feet', assetName: randomFeet.asset, color: randomFeet.color, isOpen: true, isLocked: false, display: true },
  ],
  addLayer: (layer) =>
    set((state) => ({
      layerArr: [...state.layerArr, layer],
    })),

  removeLayer: (id) =>
    set((state) => ({
      layerArr: state.layerArr.filter((layer) => layer.id !== id),
    })),

  moveLayer: (index, to) =>
    set((state) => ({
      layerArr: state.layerArr
        .map((item) => {
          if (item.id === index) {
            return {
              id: to,
              ...item,
            }
          } else if (item.id === to) {
            return {
              id: index,
              ...item,
            }
          } else {
            return item
          }
        })
        .sort((a, b) => a.id - b.id),
    })),

  updateLayer: (layer) =>
    set((state) => ({
      layerArr: state.layerArr.map((item) => {
        if (item.id === layer.id) {
          return layer
        } else {
          return item
        }
      }),
    })),
}))

export default useStore
