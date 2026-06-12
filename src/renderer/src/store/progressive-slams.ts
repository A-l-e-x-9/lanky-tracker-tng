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
  },
  factorySlam: {
    greenSlam: true,
    blueSlam: false,
    redSlam: false
  },
  galleonSlam: {
    greenSlam: true,
    blueSlam: false,
    redSlam: false
  },
  forestSlam: {
    greenSlam: false,
    blueSlam: true,
    redSlam: false
  },
  cavesSlam: {
    greenSlam: false,
    blueSlam: true,
    redSlam: false
  },
  castleSlam: {
    greenSlam: false,
    blueSlam: false,
    redSlam: true
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
    },
    setFactorySlam: (id, val): void => {
      set((state) => {
        const target: Record<string, boolean> = {}
        target[id] = val
        state = {
          ...state,
          factorySlam: {
            ...state.factorySlam,
            ...target
          }
        }
        return state
      })
    },
    setGalleonSlam: (id, val): void => {
      set((state) => {
        const target: Record<string, boolean> = {}
        target[id] = val
        state = {
          ...state,
          galleonSlam: {
            ...state.galleonSlam,
            ...target
          }
        }
        return state
      })
    },
    setForestSlam: (id, val): void => {
      set((state) => {
        const target: Record<string, boolean> = {}
        target[id] = val
        state = {
          ...state,
          forestSlam: {
            ...state.forestSlam,
            ...target
          }
        }
        return state
      })
    },
    setCavesSlam: (id, val): void => {
      set((state) => {
        const target: Record<string, boolean> = {}
        target[id] = val
        state = {
          ...state,
          cavesSlam: {
            ...state.cavesSlam,
            ...target
          }
        }
        return state
      })
    },
    setCastleSlam: (id, val): void => {
      set((state) => {
        const target: Record<string, boolean> = {}
        target[id] = val
        state = {
          ...state,
          castleSlam: {
            ...state.castleSlam,
            ...target
          }
        }
        return state
      })
    }
  }
}

export default slamSlice
