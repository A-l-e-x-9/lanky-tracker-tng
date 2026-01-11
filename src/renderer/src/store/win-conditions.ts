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
        const target: Record<string, boolean | number> = {}
        target[id] = val
        state = {
          ...state,
          winCondition: {
            ...state.winCondition,
            ...target
          }
        }
        return state
      })
    }
  }
}

export default winConSlice
