import { StateCreator } from 'zustand'
import { AllSlice, WinConSlice, WinConState, donkResetFns } from './common'

export const initialWinCon: WinConState = {
  winCondition: {
    key3And8: false,
    kRoolChallenge: false,
    kontracts: true
  }
}

const winConSlice: StateCreator<AllSlice, [], [], WinConSlice> = (set) => {
  donkResetFns.add(() => set(initialWinCon))
  return {
    ...initialWinCon,
    setWinCondition: (id, val): void => {
      set((state) => {
        // If we're setting a boolean to true, enforce radio semantics:
        // clear other boolean winCondition flags and set this one to true.
        if (val) {
          const reset: Record<string, boolean> = {}
          for (const k of Object.keys(state.winCondition)) {
            reset[k] = false
          }
          reset[id] = true
          return {
            ...state,
            winCondition: {
              ...state.winCondition,
              ...reset
            }
          }
        }

        // If val is boolean false, just clear that specific flag.
        return {
          ...state,
          winCondition: {
            ...state.winCondition,
            [id]: false
          }
        }
      })
    }
  }
}

export default winConSlice
