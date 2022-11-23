import create from 'zustand'

const useOptionsStore = create((set, get) => ({
  optionsState: 'main',
  setOptionsState: (input) =>
    set((state) => ({
      optionsState: input,
    })),
  currentLayer: {},
  setCurrentLayer: (layer) =>
    set((state) => ({
      currentLayer: layer,
    })),
}))

export default useOptionsStore
