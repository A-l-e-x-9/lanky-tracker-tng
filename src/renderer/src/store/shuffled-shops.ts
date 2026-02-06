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
    }
  }
}


export default shopSlice
