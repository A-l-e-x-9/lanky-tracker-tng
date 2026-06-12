import { StateCreator } from 'zustand'
import { AllSlice, SlamSlice, SlamState, donkResetFns } from './common'

export const initialSlam: SlamState = {
  japesSlam: {
    greenSlam: true,
    blueSlam: false,
    redSlam: false
  },
  aztecSlam: {
    greenSlam: true,
    blueSlam: false,
    redSlam: false
  }
}

const slamSlice: StateCreator<AllSlice, [], [], SlamSlice> = (set) => {
  donkResetFns.add(() => set(initialSlam))
  return {
    ...initialSlam,
    setJapesSlam: (id, val): void => {
      set((state) => {
        const target: Record<string, boolean> = {}
        target[id] = val
        state = {
          ...state,
          japesSlam: {
            ...state.japesSlam,
            ...target
          }
        }
        return state
      })
    },
    setAztecSlam: (id, val): void => {
      set((state) => {
        const target: Record<string, boolean> = {}
        target[id] = val
        state = {
          ...state,
          aztecSlam: {
            ...state.aztecSlam,
            ...target
          }
        }
        return state
      })
    }
  }
}

export default slamSlice
