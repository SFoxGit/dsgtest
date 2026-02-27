import create from 'zustand'

const useOptionsStore = create((set, get) => ({
  optionsState: 'main',
  setOptionsState: (input) =>
    set((state) => ({
      optionsState: input,
    })),
}))

export default useOptionsStore
