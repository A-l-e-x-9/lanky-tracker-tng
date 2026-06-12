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
    setJapesSlam: (id): void => {
      set((state) => {
        const reset: Record<string, boolean> = {}
        for (const k of Object.keys(state.japesSlam)) {
          reset[k] = false
        }
        reset[id] = true
        return {
          ...state,
          japesSlam: {
            ...state.japesSlam,
            ...reset
          }
        }
        return {
          ...state,
          japesSlam: {
            ...state.japesSlam,
            [id]: false
          }
        }
      })
    },
    setAztecSlam: (id): void => {
      set((state) => {
        const reset: Record<string, boolean> = {}
        for (const k of Object.keys(state.aztecSlam)) {
          reset[k] = false
        }
        reset[id] = true
        return {
          ...state,
          aztecSlam: {
            ...state.aztecSlam,
            ...reset
          }
        }
        return {
          ...state,
          aztecSlam: {
            ...state.aztecSlam,
            [id]: false
          }
        }
      })
    },
    setFactorySlam: (id): void => {
      set((state) => {
        const reset: Record<string, boolean> = {}
        for (const k of Object.keys(state.factorySlam)) {
          reset[k] = false
        }
        reset[id] = true
        return {
          ...state,
          factorySlam: {
            ...state.factorySlam,
            ...reset
          }
        }
        return {
          ...state,
          factorySlam: {
            ...state.factorySlam,
            [id]: false
          }
        }
      })
    },
    setGalleonSlam: (id): void => {
      set((state) => {
        const reset: Record<string, boolean> = {}
        for (const k of Object.keys(state.galleonSlam)) {
          reset[k] = false
        }
        reset[id] = true
        return {
          ...state,
          galleonSlam: {
            ...state.galleonSlam,
            ...reset
          }
        }
        return {
          ...state,
          galleonSlam: {
            ...state.galleonSlam,
            [id]: false
          }
        }
      })
    },
    setForestSlam: (id): void => {
      set((state) => {
        const reset: Record<string, boolean> = {}
        for (const k of Object.keys(state.forestSlam)) {
          reset[k] = false
        }
        reset[id] = true
        return {
          ...state,
          forestSlam: {
            ...state.forestSlam,
            ...reset
          }
        }
        return {
          ...state,
          forestSlam: {
            ...state.forestSlam,
            [id]: false
          }
        }
      })
    },
    setCavesSlam: (id): void => {
      set((state) => {
        const reset: Record<string, boolean> = {}
        for (const k of Object.keys(state.cavesSlam)) {
          reset[k] = false
        }
        reset[id] = true
        return {
          ...state,
          cavesSlam: {
            ...state.cavesSlam,
            ...reset
          }
        }
        return {
          ...state,
          cavesSlam: {
            ...state.cavesSlam,
            [id]: false
          }
        }
      })
    },
    setCastleSlam: (id): void => {
      set((state) => {
        const reset: Record<string, boolean> = {}
        for (const k of Object.keys(state.castleSlam)) {
          reset[k] = false
        }
        reset[id] = true
        return {
          ...state,
          castleSlam: {
            ...state.castleSlam,
            ...reset
          }
        }
        return {
          ...state,
          castleSlam: {
            ...state.castleSlam,
            [id]: false
          }
        }
      })
    }
  }
}

export default slamSlice
