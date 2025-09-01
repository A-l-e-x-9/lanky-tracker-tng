import { StateCreator } from 'zustand'
import { AllSlice, Boss, BossState, donkResetFns } from './common'

export const initialBoss: BossState = {
  boss1: '',
  boss2: '',
  boss3: '',
  boss4: '',
  boss5: '',
  boss6: '',
  boss7: '',
  state1: false,
  state2: false,
  state3: false,
  state4: false,
  state5: false,
  state6: false,
  state7: false
}

interface BossSlice {
  boss1: Boss
  boss2: Boss
  boss3: Boss
  boss4: Boss
  boss5: Boss
  boss6: Boss
  boss7: Boss
  state1: boolean
  state2: boolean
  state3: boolean
  state4: boolean
  state5: boolean
  state6: boolean
  state7: boolean
  setBoss: (index: number, name: string) => void
  setLogicState: (index: number, isSet: boolean) => void
}

const bossSlice: StateCreator<AllSlice, [], [], BossSlice> = (set) => {
  donkResetFns.add(() => set(initialBoss))
  return {
    ...initialBoss,
    setBoss: (index, name) =>
      set((state) => {
        const newKey: Record<number, string> = {}
        newKey['boss' + index] = name
        state = {
          ...state,
          ...newKey
        }
        return state
      }),
    setLogicState: (index, isSet) =>
      set((state) => {
        const newKey: Record<number, boolean> = {}
        newKey['key' + index] = isSet
        state = {
          ...state,
          ...newKey
        }
        return state
      })
  }
  }
}

export default bossSlice
