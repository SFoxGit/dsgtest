import create from "zustand";
import RandomizerTool from "./randomizer-tool";

const randomWeapon = RandomizerTool("Back_Hand");
// const randomHair = RandomizerTool('Hair')
const randomHat = RandomizerTool("Hair");
const randomUpper = RandomizerTool("Upper_Body");
const randomLower = RandomizerTool("Lower_Body");
const randomFeet = RandomizerTool("Feet");

const useLayerStore = create((set, get) => ({
  layerArr: [
    {
      id: 0,
      layerType: "Skins",
      assetName: null,
      color: "pale.png",
      isOpen: true,
      isLocked: false,
      display: true,
    },
    {
      id: 1,
      layerType: "Sleeves",
      assetName: "Bare_Arm",
      color: "pale.png",
      isOpen: true,
      isLocked: true,
      display: false,
    },
    {
      id: 2,
      layerType: "Back_Hand",
      assetName: randomWeapon.asset,
      color: randomWeapon.color,
      isOpen: true,
      isLocked: false,
      display: false,
    },
    {
      id: 3,
      layerType: "Sleeves",
      assetName: "Short_Sleeve",
      color: "Gold.png",
      isOpen: true,
      isLocked: false,
      display: false,
    },
    {
      id: 4,
      layerType: "Hair",
      assetName: randomHat.asset,
      color: randomHat.color,
      isOpen: true,
      isLocked: false,
      display: true,
    },
    {
      id: 5,
      layerType: "Upper_Body",
      assetName: randomUpper.asset,
      color: randomUpper.color,
      isOpen: true,
      isLocked: false,
      display: true,
    },
    {
      id: 6,
      layerType: "Lower_Body",
      assetName: randomLower.asset,
      color: randomLower.color,
      isOpen: true,
      isLocked: false,
      display: true,
    },
    {
      id: 7,
      layerType: "Feet",
      assetName: randomFeet.asset,
      color: randomFeet.color,
      isOpen: true,
      isLocked: false,
      display: true,
    },
  ],
  addLayer: (layer) =>
    set((state) => ({
      layerArr: [...state.layerArr, layer],
    })),

  removeLayer: (id) =>
    set((state) => ({
      layerArr: state.layerArr.filter((layer) => layer.id !== id),
    })),

  moveLayer: (index, to) => {
    const copyArr = get().layerArr;
    const element = copyArr[index];
    copyArr.splice(index, 1);
    copyArr.splice(to, 0, element);
    set((state) => ({
      layerArr: [...copyArr],
    }));
  },

  updateLayer: (layer) =>
    set((state) => ({
      layerArr: state.layerArr.map((item) => {
        if (item.id === layer.id) {
          return layer;
        } else {
          return item;
        }
      }),
    })),

  setLayerArr: (layerArr) =>
    set((state) => ({
      layerArr: layerArr,
    })),
}));

export default useLayerStore;
