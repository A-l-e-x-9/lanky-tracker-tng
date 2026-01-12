import { StateCreator } from 'zustand'
import { AllSlice, WinConSlice, WinConState, donkResetFns } from './common'

export const initialWinCon: WinConState = {
  winCondition: {
    keys: true,
    key8: false,
    key3And8: false,
    kremlingKapture: false,
    takeItToTheFridge: false,
    kRoolChallenge: false,
    killTheWabbit: false,
    goldBananas: false,
    blueprints: false,
    companyCoins: false,
    bananaMedals: false,
    crowns: false,
    fairies: false,
    rainbowCoins: false,
    theBean: false,
    pearls: false,
    bosses: false,
    bonuses: false,
    winConItemCount: 0
  }
}

const winConSlice: StateCreator<AllSlice, [], [], WinConSlice> = (set) => {
  donkResetFns.add(() => set(initialWinCon))
  return {
    ...initialWinCon,
    setWinCondition: (id, val): void => {
      set((state) => {
        // If setting a numeric value (winConItemCount), just set it.
        if (typeof val === 'number') {
          return {
            ...state,
            winCondition: {
              ...state.winCondition,
              [id]: val
            }
          }
        }

        // If we're setting a boolean to true, enforce radio semantics:
        // clear other boolean winCondition flags and set this one to true.
        if (val) {
          const reset: Record<string | number | symbol, boolean | number> = {}
          for (const k of Object.keys(state.winCondition)) {
            if (k === 'winConItemCount') continue
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
