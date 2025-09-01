import { StateCreator } from 'zustand'
import { AllSlice, Boss, BossState, donkResetFns } from './common'

export const initialBoss: BossState = {
  boss1: 'state1',
  boss2: 'state2',
  boss3: 'state3',
  boss4: 'state4',
  boss5: 'state5',
  boss6: 'state6',
  boss7: 'state7'
}

interface BossSlice {
  boss1: Boss
  boss2: Boss
  boss3: Boss
  boss4: Boss
  boss5: Boss
  boss6: Boss
  boss7: Boss
  setBoss: (index: number, name: string) => void
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
      })
  }
}

export default bossSlice
