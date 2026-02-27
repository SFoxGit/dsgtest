import create from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import RandomizerTool from './randomizer-tool'
import data from './dataV2.js'
import SkinColors from './skinColors'
// const randomWeapon = RandomizerTool('Back_Hand')
// const randomHair = RandomizerTool('Hair')
const randomHat = RandomizerTool('Hair')
const randomUpper = RandomizerTool('Upper_Body')
const randomLower = RandomizerTool('Lower_Body')
const randomFeet = RandomizerTool('Feet')
const randomNumber = Math.floor(Math.random() * SkinColors.length)
const newAsset = SkinColors[randomNumber]

const useLayerStore = create(
  persist(
    (set, get) => ({
      layerArr: [
        {
          id: 0,
          layerType: 'Skins',
          assetName: null,
          color: newAsset.fileName,
          isLocked: false,
          display: true,
          secondary: false,
        },
        {
          id: 1,
          layerType: 'Feet',
          assetName: randomFeet.asset,
          color: randomFeet.color,
          isLocked: false,
          display: true,
          secondary: randomFeet.secondary,
        },
        {
          id: 2,
          layerType: 'Lower_Body',
          assetName: randomLower.asset,
          color: randomLower.color,
          isLocked: false,
          display: true,
          secondary: randomLower.secondary,
        },
        {
          id: 3,
          layerType: 'Hair',
          assetName: randomHat.asset,
          color: randomHat.color,
          isLocked: false,
          display: true,
          secondary: randomHat.secondary,
        },
        {
          id: 4,
          layerType: 'Upper_Body',
          assetName: randomUpper.asset,
          color: randomUpper.color,
          isLocked: false,
          display: true,
          secondary: randomUpper.secondary,
        },
      ],
      addLayer: (layer) => {
        const copyArr = get().layerArr
        layer.id = copyArr.length
        set((state) => ({
          layerArr: [...state.layerArr, layer],
        }))
      },

      moveLayer: (index, to) => {
        const copyArr = get().layerArr
        const element = copyArr[index]
        copyArr.splice(index, 1)
        copyArr.splice(to, 0, element)
        set(() => ({
          layerArr: copyArr.map((item, index) => {
            item.id = index
            return item
          }),
        }))
      },

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

      setLayerArr: (layerArr) =>
        set((state) => ({
          layerArr: layerArr,
        })),
      selectedLayer: null,
      setSelectedLayer: (num) =>
        set(() => ({
          selectedLayer: num,
        })),
      removeLayer: () => {
        const selected = get().selectedLayer
        const copyArr = get().layerArr
        const filterArr = copyArr.filter((item) => item.id !== selected)
        set(() => ({
          layerArr: filterArr.map((item) => {
            if (item.id < selected) {
              return item
            } else {
              item.id += -1
              return item
            }
          }),
        }))
      },
      incrementAsset: () => {
        const copyArr = get().layerArr
        const currentLayer = get().selectedLayer
        const layerObject = copyArr[currentLayer]
        const assetOptions = Object.keys(data[layerObject.layerType])
        const assetIndex = assetOptions.indexOf(currentLayer.assetName)
        const newAsset = assetOptions[assetIndex + 1]
        set((state) => ({
          layerArr: state.layerArr.map((item) => {
            if (item.id === layerObject.id) {
              layerObject.assetName = newAsset
              return layerObject
            } else {
              return item
            }
          }),
        }))
      },
      setAsset: (asset) => {
        const copyArr = get().layerArr
        const selectedLayer = get().selectedLayer
        copyArr[selectedLayer].assetName = asset
        const itemType = copyArr[selectedLayer].layerType
        const colorOptions = data[itemType][asset]
        // check if new asset is a skin tone type
        if (colorOptions.includes('primary_Swarthy.png')) {
          copyArr[selectedLayer].color = copyArr[0].color
        }
        // check if current primary color is in next color options
        if (!colorOptions.includes(copyArr[selectedLayer].color)) {
          const primaryColorOptions = colorOptions.filter(
            (colorElement) => colorElement.substring(0, 7) === 'primary'
          )
          copyArr[selectedLayer].color =
            primaryColorOptions[
              Math.floor(Math.random() * primaryColorOptions.length)
            ]
        }
        const secondaryColorOptions = colorOptions.filter(
          (colorElement) => colorElement.substring(0, 7) === 'seconda'
        )
        if (secondaryColorOptions.length) {
          if (
            !secondaryColorOptions.includes(copyArr[selectedLayer].secondary)
          ) {
            const randomSecondaryColor =
              secondaryColorOptions[
                Math.floor(Math.random() * secondaryColorOptions.length)
              ]
            copyArr[selectedLayer].secondary = randomSecondaryColor
          }
        } else {
          copyArr[selectedLayer].secondary = false
        }
        set((state) => ({
          layerArr: [...copyArr],
        }))
      },
      setColor: (color) => {
        const copyArr = get().layerArr
        const selectedLayer = get().selectedLayer
        copyArr[selectedLayer].color = color
        set((state) => ({
          layerArr: [...copyArr],
        }))
      },
      setSecondary: (color) => {
        const copyArr = get().layerArr
        const selectedLayer = get().selectedLayer
        copyArr[selectedLayer].secondary = color
        set((state) => ({
          layerArr: [...copyArr],
        }))
      },
      pixels: 200,
      setPixels: (input) => {
        set(() => ({
          pixels: input,
        }))
      },
      name: '',
      setName: (input) => {
        set(() => ({
          name: input,
        }))
      },
      searchInput: '',
      setSearchInput: (input) => {
        set(() => ({
          searchInput: input,
        }))
      },
    }),
    {
      name: 'dungeon-sprite-last',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)

export default useLayerStore
