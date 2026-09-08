import { StateCreator } from 'zustand'
import { AllSlice, WrinklyDoorSlice, WrinklyDoorState, donkResetFns } from './common'

export const initialDoorCounts: WrinklyDoorState = {
  wrinklyDoors: {
    jungleJapes: 0,
    angryAztec: 0,
    franticFactory: 0,
    gloomyGalleon: 0,
    fungiForest: 0,
    crystalCaves: 0,
    creepyCastle: 0
  }
}

const wrinklyDoorSlice: StateCreator<AllSlice, [], [], WrinklyDoorSlice> = (set) => {
  donkResetFns.add(() => set(initialDoorCounts))
  return {
    ...initialDoorCounts,
    setWrinklyDoorCount: (id, val): void => {
      set((state) => {
        const target: Record<string, number> = {}
        target[id] = val
        state = {
          ...state,
          wrinklyDoors: {
            ...state.wrinklyDoors,
            ...target
          }
        }
        return state
      })
    }
  }
}

export default wrinklyDoorSlice
