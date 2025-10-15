import { StateCreator } from 'zustand'
import { AllSlice, GlitchSlice, GlitchState, donkResetFns } from './common'

export const initialGlitches: GlitchState = {
  glitchLogic: {
    bLockerSkip: false,
    generalSkip: false,
    ledgeClip: false,
    moonKick: false,
    moonTail: false,
    swimThruVertWalls: false,
    phaseWalk: false,
    skewYou: false,
    spawnSnag: false,
    swimThruShores: false,
    tagBarrelStorage: false,
    bypassTNS: false,
    phaseFall: false
  }
}

const glitchSlice: StateCreator<AllSlice, [], [], GlitchSlice> = (set) => {
  donkResetFns.add(() => set(initialGlitches))
  return {
    ...initialGlitches,
    setGlitch: (id, val): void => {
      set((state) => {
        const target: Record<string, boolean> = {}
        target[id] = val
        state = {
          ...state,
          glitchLogic: {
            ...state.glitchLogic,
            ...target
          }
        }
        return state
      })
    }
  }
}

export default glitchSlice
