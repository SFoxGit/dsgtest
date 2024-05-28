import { create } from 'zustand'

const useOptionsStore = create((set) => ({
  optionsState: 'main',
  setOptionsState: (input) =>
    set(() => ({
      optionsState: input,
    })),
}))

export default useOptionsStore
