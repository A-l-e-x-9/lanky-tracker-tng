import { StateCreator } from 'zustand'
import { AllSlice, ShopSlice, ShopState, donkResetFns } from './common'

export const initialShop: ShopState = {
  shuffledIslesShops: {
    islesSwitchUp: false
  },
  shuffledJapesCranky: {
    japesCrankyNoSwitch: true,
    japesCrankyFunky: false,
    japesCrankySnide: false
  },
  shuffledJapesFunky: {
    japesFunkyCranky: false,
    japesFunkyNoSwitch: true,
    japesFunkySnide: false
  },
  shuffledJapesSnide: {
    japesSnideCranky: false,
    japesSnideFunky: false,
    japesSnideNoSwitch: true
  },
  shuffledAztecCranky: {
    aztecCrankyNoSwitch: true,
    aztecCrankyFunky: false,
    aztecCrankyCandy: false,
    aztecCrankySnide: false
  },
  shuffledAztecFunky: {
    aztecFunkyCranky: false,
    aztecFunkyNoSwitch: true,
    aztecFunkyCandy: false,
    aztecFunkySnide: false
  },
  shuffledAztecCandy: {
    aztecCandyCranky: false,
    aztecCandyFunky: false,
    aztecCandyNoSwitch: true,
    aztecCandySnide: false
  },
  shuffledAztecSnide: {
    aztecSnideCranky: false,
    aztecSnideFunky: false,
    aztecSnideCandy: false,
    aztecSnideNoSwitch: true
  },
  shuffledFactoryCranky: {
    factoryCrankyNoSwitch: true,
    factoryCrankyFunky: false,
    factoryCrankyCandy: false,
    factoryCrankySnide: false
  },
  shuffledFactoryFunky: {
    factoryFunkyCranky: false,
    factoryFunkyNoSwitch: true,
    factoryFunkyCandy: false,
    factoryFunkySnide: false,
  },
  shuffledFactoryCandy: {
    factoryCandyCranky: false,
    factoryCandyFunky: false,
    factoryCandyNoSwitch: true,
    factoryCandySnide: false
  },
  shuffledFactorySnide: {
    factorySnideCranky: false,
    factorySnideFunky: false,
    factorySnideCandy: false,
    factorySnideNoSwitch: true
  },
  shuffledGalleonCranky: {
    galleonCrankyNoSwitch: true,
    galleonCrankyFunky: false,
    galleonCrankyCandy: false,
    galleonCrankySnide: false
  },
  shuffledGalleonFunky: {
    galleonFunkyCranky: false,
    galleonFunkyNoSwitch: true,
    galleonFunkyCandy: false,
    galleonFunkySnide: false
  },
  shuffledGalleonCandy: {
    galleonCandyCranky: false,
    galleonCandyFunky: false,
    galleonCandyNoSwitch: true,
    galleonCandySnide: false
  },
  shuffledGalleonSnide: {
    galleonSnideCranky: false,
    galleonSnideFunky: false,
    galleonSnideCandy: false,
    galleonSnideNoSwitch: true
  },
  shuffledForestCranky: {
    forestCrankyNoSwitch: true,
    forestCrankyFunky: false,
    forestCrankySnide: false
  },
  shuffledForestFunky: {
    forestFunkyCranky: false,
    forestFunkyNoSwitch: true,
    forestFunkySnide: false
  },
  shuffledForestSnide: {
    forestSnideCranky: false,
    forestSnideFunky: false,
    forestSnideNoSwitch: true
  },
  shuffledCavesCranky: {
    cavesCrankyNoSwitch: true,
    cavesCrankyFunky: false,
    cavesCrankyCandy: false,
    cavesCrankySnide: false
  },
  shuffledCavesFunky: {
    cavesFunkyCranky: false,
    cavesFunkyNoSwitch: true,
    cavesFunkyCandy: false,
    cavesFunkySnide: false
  },
  shuffledCavesCandy: {
    cavesCandyCranky: false,
    cavesCandyFunky: false,
    cavesCandyNoSwitch: true,
    cavesCandySnide: false
  },
  shuffledCavesSnide: {
    cavesSnideCranky: false,
    cavesSnideFunky: false,
    cavesSnideCandy: false,
    cavesSnideNoSwitch: true
  },
  shuffledCastleCranky: {
    castleCrankyNoSwitch: true,
    castleCrankyFunky: false,
    castleCrankyCandy: false,
    castleCrankySnide: false
  },
  shuffledCastleFunky: {
    castleFunkyCranky: false,
    castleFunkyNoSwitch: true,
    castleFunkyCandy: false,
    castleFunkySnide: false
  },
  shuffledCastleCandy: {
    castleCandyCranky: false,
    castleCandyFunky: false,
    castleCandyNoSwitch: true,
    castleCandySnide: false
  },
  shuffledCastleSnide: {
    castleSnideCranky: false,
    castleSnideFunky: false,
    castleSnideCandy: false,
    castleSnideNoSwitch: true
  }
}

const shopSlice: StateCreator<AllSlice, [], [], ShopSlice> = (set) => {
  donkResetFns.add(() => set(initialShop))
  return {
    ...initialShop,
    setIslesShops: (id, val): void => {
      set((state) => {
        const target: Record<string, boolean> = {}
        target[id] = val
        state = {
          ...state,
          shuffledIslesShops: {
            ...state.shuffledIslesShops,
            ...target
          }
        }
        return state
      })
    },
    setJapesCranky: (id): void => {
      set((state) => {
        const reset: Record<string, boolean> = {}
        for (const k of Object.keys(state.shuffledJapesCranky)) {
          reset[k] = false
        }
        reset[id] = true
        return {
          ...state,
          shuffledJapesCranky: {
            ...state.shuffledJapesCranky,
            ...reset
          }
        }
        return {
          ...state,
          shuffledJapesCranky: {
            ...state.shuffledJapesCranky,
            [id]: false
          }
        }
      })
    },
    setJapesFunky: (id): void => {
      set((state) => {
        const reset: Record<string, boolean> = {}
        for (const k of Object.keys(state.shuffledJapesFunky)) {
          reset[k] = false
        }
        reset[id] = true
        return {
          ...state,
          shuffledJapesFunky: {
            ...state.shuffledJapesFunky,
            ...reset
          }
        }
        return {
          ...state,
          shuffledJapesFunky: {
            ...state.shuffledJapesFunky,
            [id]: false
          }
        }
      })
    },
    setJapesSnide: (id): void => {
      set((state) => {
        const reset: Record<string, boolean> = {}
        for (const k of Object.keys(state.shuffledJapesSnide)) {
          reset[k] = false
        }
        reset[id] = true
        return {
          ...state,
          shuffledJapesSnide: {
            ...state.shuffledJapesSnide,
            ...reset
          }
        }
        return {
          ...state,
          shuffledJapesSnide: {
            ...state.shuffledJapesSnide,
            [id]: false
          }
        }
      })
    },
    setAztecCranky: (id): void => {
      set((state) => {
        const reset: Record<string, boolean> = {}
        for (const k of Object.keys(state.shuffledAztecCranky)) {
          reset[k] = false
        }
        reset[id] = true
        return {
          ...state,
          shuffledAztecCranky: {
            ...state.shuffledAztecCranky,
            ...reset
          }
        }
        return {
          ...state,
          shuffledAztecCranky: {
            ...state.shuffledAztecCranky,
            [id]: false
          }
        }
      })
    },
    setAztecFunky: (id): void => {
      set((state) => {
        const reset: Record<string, boolean> = {}
        for (const k of Object.keys(state.shuffledAztecFunky)) {
          reset[k] = false
        }
        reset[id] = true
        return {
          ...state,
          shuffledAztecFunky: {
            ...state.shuffledAztecFunky,
            ...reset
          }
        }
        return {
          ...state,
          shuffledAztecFunky: {
            ...state.shuffledAztecFunky,
            [id]: false
          }
        }
      })
    },
    setAztecCandy: (id): void => {
      set((state) => {
        const reset: Record<string, boolean> = {}
        for (const k of Object.keys(state.shuffledAztecCandy)) {
          reset[k] = false
        }
        reset[id] = true
        return {
          ...state,
          shuffledAztecCandy: {
            ...state.shuffledAztecCandy,
            ...reset
          }
        }
        return {
          ...state,
          shuffledAztecCandy: {
            ...state.shuffledAztecCandy,
            [id]: false
          }
        }
      })
    },
    setAztecSnide: (id): void => {
      set((state) => {
        const reset: Record<string, boolean> = {}
        for (const k of Object.keys(state.shuffledAztecSnide)) {
          reset[k] = false
        }
        reset[id] = true
        return {
          ...state,
          shuffledAztecSnide: {
            ...state.shuffledAztecSnide,
            ...reset
          }
        }
        return {
          ...state,
          shuffledAztecSnide: {
            ...state.shuffledAztecSnide,
            [id]: false
          }
        }
      })
    },
    setFactoryCranky: (id): void => {
      set((state) => {
        const reset: Record<string, boolean> = {}
        for (const k of Object.keys(state.shuffledFactoryCranky)) {
          reset[k] = false
        }
        reset[id] = true
        return {
          ...state,
          shuffledFactoryCranky: {
            ...state.shuffledFactoryCranky,
            ...reset
          }
        }
        return {
          ...state,
          shuffledFactoryCranky: {
            ...state.shuffledFactoryCranky,
            [id]: false
          }
        }
      })
    },
    setFactoryFunky: (id): void => {
      set((state) => {
        const reset: Record<string, boolean> = {}
        for (const k of Object.keys(state.shuffledFactoryFunky)) {
          reset[k] = false
        }
        reset[id] = true
        return {
          ...state,
          shuffledFactoryFunky: {
            ...state.shuffledFactoryFunky,
            ...reset
          }
        }
        return {
          ...state,
          shuffledFactoryFunky: {
            ...state.shuffledFactoryFunky,
            [id]: false
          }
        }
      })
    },
    setFactoryCandy: (id): void => {
      set((state) => {
        const reset: Record<string, boolean> = {}
        for (const k of Object.keys(state.shuffledFactoryCandy)) {
          reset[k] = false
        }
        reset[id] = true
        return {
          ...state,
          shuffledFactoryCandy: {
            ...state.shuffledFactoryCandy,
            ...reset
          }
        }
        return {
          ...state,
          shuffledFactoryCandy: {
            ...state.shuffledFactoryCandy,
            [id]: false
          }
        }
      })
    },
    setFactorySnide: (id): void => {
      set((state) => {
        const reset: Record<string, boolean> = {}
        for (const k of Object.keys(state.shuffledFactorySnide)) {
          reset[k] = false
        }
        reset[id] = true
        return {
          ...state,
          shuffledFactorySnide: {
            ...state.shuffledFactorySnide,
            ...reset
          }
        }
        return {
          ...state,
          shuffledFactorySnide: {
            ...state.shuffledFactorySnide,
            [id]: false
          }
        }
      })
    },
    setGalleonCranky: (id): void => {
      set((state) => {
        const reset: Record<string, boolean> = {}
        for (const k of Object.keys(state.shuffledGalleonCranky)) {
          reset[k] = false
        }
        reset[id] = true
        return {
          ...state,
          shuffledGalleonCranky: {
            ...state.shuffledGalleonCranky,
            ...reset
          }
        }
        return {
          ...state,
          shuffledGalleonCranky: {
            ...state.shuffledGalleonCranky,
            [id]: false
          }
        }
      })
    },
    setGalleonFunky: (id): void => {
      set((state) => {
        const reset: Record<string, boolean> = {}
        for (const k of Object.keys(state.shuffledGalleonFunky)) {
          reset[k] = false
        }
        reset[id] = true
        return {
          ...state,
          shuffledGalleonFunky: {
            ...state.shuffledGalleonFunky,
            ...reset
          }
        }
        return {
          ...state,
          shuffledGalleonFunky: {
            ...state.shuffledGalleonFunky,
            [id]: false
          }
        }
      })
    },
    setGalleonCandy: (id): void => {
      set((state) => {
        const reset: Record<string, boolean> = {}
        for (const k of Object.keys(state.shuffledGalleonCandy)) {
          reset[k] = false
        }
        reset[id] = true
        return {
          ...state,
          shuffledGalleonCandy: {
            ...state.shuffledGalleonCandy,
            ...reset
          }
        }
        return {
          ...state,
          shuffledGalleonCandy: {
            ...state.shuffledGalleonCandy,
            [id]: false
          }
        }
      })
    },
    setGalleonSnide: (id): void => {
      set((state) => {
        const reset: Record<string, boolean> = {}
        for (const k of Object.keys(state.shuffledGalleonSnide)) {
          reset[k] = false
        }
        reset[id] = true
        return {
          ...state,
          shuffledGalleonSnide: {
            ...state.shuffledGalleonSnide,
            ...reset
          }
        }
        return {
          ...state,
          shuffledGalleonSnide: {
            ...state.shuffledGalleonSnide,
            [id]: false
          }
        }
      })
    }
  }
}

export default shopSlice
