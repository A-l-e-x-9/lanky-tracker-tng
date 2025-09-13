import { StateCreator } from 'zustand'
import { AllSlice, bLockerSlice bLockerState, donkResetFns } from './common'

export const initialBLocker: bLockerState = {
  bLocker: {
    bLocker1: 1,
    bLocker2: 5,
    bLocker3: 15,
    bLocker4: 30,
    bLocker5: 50,
    bLocker6: 65,
    bLocker7: 80,
    bLocker8: 100
  }
}

const (typeof bLockerSlice): StateCreator<AllSlice, [], [], bLockerSlice> = (set) => {
  donkResetFns.add(() => set(initialBLocker))
  return {
    ...initialBLocker,
    setBLocker: (id, val): void => {
      set((state) => {
        const target: Record<string, number> = {}
        target[id] = val
        state = {
          ...state,
          bLocker: {
            ...state.bLocker,
            ...target
          }
        }
        return state
      })
    }
  }
}

export default bLockerSlice
