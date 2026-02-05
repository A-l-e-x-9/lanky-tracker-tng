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
    setShop: (id, val): void => {
      set((state) => {
        // If setting "Are Cranky and Snide switched in Isles?", which is a checkbox, just set it:
        if (Object.keys(state.shuffledIslesShops)) {
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
        }

        // Else, enforce radio button semantics:
        // clear other boolean winCondition flags and set this one to true.
        else if (val) {
          const reset: Record<string, boolean> = {}
          for (const k of Object.keys(state.shuffledJapesCranky)) {
            reset[k] = false
          }
          for (const k of Object.keys(state.shuffledJapesFunky)) {
            reset[k] = false
          }
          for (const k of Object.keys(state.shuffledJapesSnide)) {
            reset[k] = false
          }
          for (const k of Object.keys(state.shuffledAztecCranky)) {
            reset[k] = false
          }
          for (const k of Object.keys(state.shuffledAztecFunky)) {
            reset[k] = false
          }
          for (const k of Object.keys(state.shuffledAztecCandy)) {
            reset[k] = false
          }
          for (const k of Object.keys(state.shuffledAztecSnide)) {
            reset[k] = false
          }
          for (const k of Object.keys(state.shuffledFactoryCranky)) {
            reset[k] = false
          }
          for (const k of Object.keys(state.shuffledFactoryFunky)) {
            reset[k] = false
          }
          for (const k of Object.keys(state.shuffledFactoryCandy)) {
            reset[k] = false
          }
          for (const k of Object.keys(state.shuffledFactorySnide)) {
            reset[k] = false
          }
          for (const k of Object.keys(state.shuffledGalleonCranky)) {
            reset[k] = false
          }
          for (const k of Object.keys(state.shuffledGalleonFunky)) {
            reset[k] = false
          }
          for (const k of Object.keys(state.shuffledGalleonCandy)) {
            reset[k] = false
          }
          for (const k of Object.keys(state.shuffledGalleonSnide)) {
            reset[k] = false
          }
          for (const k of Object.keys(state.shuffledForestCranky)) {
            reset[k] = false
          }
          for (const k of Object.keys(state.shuffledForestFunky)) {
            reset[k] = false
          }
          for (const k of Object.keys(state.shuffledForestSnide)) {
            reset[k] = false
          }
          for (const k of Object.keys(state.shuffledCavesCranky)) {
            reset[k] = false
          }
          for (const k of Object.keys(state.shuffledCavesFunky)) {
            reset[k] = false
          }
          for (const k of Object.keys(state.shuffledCavesCandy)) {
            reset[k] = false
          }
          for (const k of Object.keys(state.shuffledCavesSnide)) {
            reset[k] = false
          }
          for (const k of Object.keys(state.shuffledCastleCranky)) {
            reset[k] = false
          }
          for (const k of Object.keys(state.shuffledCastleFunky)) {
            reset[k] = false
          }
          for (const k of Object.keys(state.shuffledCastleCandy)) {
            reset[k] = false
          }
          for (const k of Object.keys(state.shuffledCastleSnide)) {
            reset[k] = false
          }
          reset[id] = true
          return {
            ...state,
            shuffledJapesCranky: {
              ...state.shuffledJapesCranky,
              ...reset
            },
            shuffledJapesFunky: {
              ...state.shuffledJapesFunky,
              ...reset
            },
            shuffledJapesSnide: {
              ...state.shuffledJapesSnide,
              ...reset
            },
            shuffledAztecCranky: {
              ...state.shuffledAztecCranky,
              ...reset
            },
            shuffledAztecFunky: {
              ...state.shuffledAztecFunky,
              ...reset
            },
            shuffledAztecCandy: {
              ...state.shuffledAztecCandy,
              ...reset
            },
            shuffledAztecSnide: {
              ...state.shuffledAztecSnide,
              ...reset
            },
            shuffledFactoryCranky: {
              ...state.shuffledFactoryCranky,
              ...reset
            },
            shuffledFactoryFunky: {
              ...state.shuffledFactoryFunky,
              ...reset
            },
            shuffledFactoryCandy: {
              ...state.shuffledFactoryCandy,
              ...reset
            },
            shuffledFactorySnide: {
              ...state.shuffledFactorySnide,
              ...reset
            },
            shuffledGalleonCranky: {
              ...state.shuffledGalleonCranky,
              ...reset
            },
            shuffledGalleonFunky: {
              ...state.shuffledGalleonFunky,
              ...reset
            },
            shuffledGalleonCandy: {
              ...state.shuffledGalleonCandy,
              ...reset
            },
            shuffledGalleonSnide: {
              ...state.shuffledGalleonSnide,
              ...reset
            },
            shuffledForestCranky: {
              ...state.shuffledForestCranky,
              ...reset
            },
            shuffledForestFunky: {
              ...state.shuffledForestFunky,
              ...reset
            },
            shuffledForestSnide: {
              ...state.shuffledForestSnide,
              ...reset
            },
            shuffledCavesCranky: {
              ...state.shuffledCavesCranky,
              ...reset
            },
            shuffledCavesFunky: {
              ...state.shuffledCavesFunky,
              ...reset
            },
            shuffledCavesCandy: {
              ...state.shuffledCavesCandy,
              ...reset
            },
            shuffledCavesSnide: {
              ...state.shuffledCavesSnide,
              ...reset
            },
            shuffledCastleCranky: {
              ...state.shuffledCastleCranky,
              ...reset
            },
            shuffledCastleFunky: {
              ...state.shuffledCastleFunky,
              ...reset
            },
            shuffledCastleCandy: {
              ...state.shuffledCastleCandy,
              ...reset
            },
            shuffledCastleSnide: {
              ...state.shuffledCastleSnide,
              ...reset
            }
          }
        }

        // If val is boolean false, just clear that specific flag.
        return {
          ...state,
          shuffledJapesCranky: {
            ...state.shuffledJapesCranky,
            [id]: false
          },
          shuffledJapesFunky: {
            ...state.shuffledJapesFunky,
            [id]: false
          },
          shuffledJapesSnide: {
            ...state.shuffledJapesSnide,
            [id]: false
          },
          shuffledAztecCranky: {
            ...state.shuffledAztecCranky,
            [id]: false
          },
          shuffledAztecFunky: {
            ...state.shuffledAztecFunky,
            [id]: false
          },
          shuffledAztecCandy: {
            ...state.shuffledAztecCandy,
            [id]: false
          },
          shuffledAztecSnide: {
            ...state.shuffledAztecSnide,
            [id]: false
          },
          shuffledFactoryCranky: {
            ...state.shuffledFactoryCranky,
            [id]: false
          },
          shuffledFactoryFunky: {
            ...state.shuffledFactoryFunky,
            [id]: false
          },
          shuffledFactoryCandy: {
            ...state.shuffledFactoryCandy,
            [id]: false
          },
          shuffledFactorySnide: {
            ...state.shuffledFactorySnide,
            [id]: false
          },
          shuffledGalleonCranky: {
            ...state.shuffledGalleonCranky,
            [id]: false
          },
          shuffledGalleonFunky: {
            ...state.shuffledGalleonFunky,
            [id]: false
          },
          shuffledGalleonCandy: {
            ...state.shuffledGalleonCandy,
            [id]: false
          },
          shuffledGalleonSnide: {
            ...state.shuffledGalleonSnide,
            [id]: false
          },
          shuffledForestCranky: {
            ...state.shuffledForestCranky,
            [id]: false
          },
          shuffledForestFunky: {
            ...state.shuffledForestFunky,
            [id]: false
          },
          shuffledForestSnide: {
            ...state.shuffledForestSnide,
            [id]: false
          },
          shuffledCavesCranky: {
            ...state.shuffledCavesCranky,
            [id]: false
          },
          shuffledCavesFunky: {
            ...state.shuffledCavesFunky,
            [id]: false
          },
          shuffledCavesCandy: {
            ...state.shuffledCavesCandy,
            [id]: false
          },
          shuffledCavesSnide: {
            ...state.shuffledCavesSnide,
            [id]: false
          },
          shuffledCastleCranky: {
            ...state.shuffledCastleCranky,
            [id]: false
          },
          shuffledCastleFunky: {
            ...state.shuffledCastleFunky,
            [id]: false
          },
          shuffledCastleCandy: {
            ...state.shuffledCastleCandy,
            [id]: false
          },
          shuffledCastleSnide: {
            ...state.shuffledCastleSnide,
            [id]: false
          }
        }
      })
    }
  }
}

export default shopSlice
