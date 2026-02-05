import { StateCreator } from 'zustand'
import { AllSlice, ShopSlice, ShopState, donkResetFns } from './common'

export const initialShop: ShopState = {
  shuffledShops: {
    islesSwitchUp: false,
    japesCrankyNoSwitch: true,
    japesCrankyFunky: false,
    japesCrankySnide: false,
    japesFunkyCranky: false,
    japesFunkyNoSwitch: true,
    japesFunkySnide: false,
    japesSnideCranky: false,
    japesSnideFunky: false,
    japesSnideNoSwitch: true,
    aztecCrankyNoSwitch: true,
    aztecCrankyFunky: false,
    aztecCrankyCandy: false,
    aztecCrankySnide: false,
    aztecFunkyCranky: false,
    aztecFunkyNoSwitch: true,
    aztecFunkyCandy: false,
    aztecFunkySnide: false,
    aztecCandyCranky: false,
    aztecCandyFunky: false,
    aztecCandyNoSwitch: true,
    aztecCandySnide: false,
    aztecSnideCranky: false,
    aztecSnideFunky: false,
    aztecSnideCandy: false,
    aztecSnideNoSwitch: true,
    factoryCrankyNoSwitch: true,
    factoryCrankyFunky: false,
    factoryCrankyCandy: false,
    factoryCrankySnide: false,
    factoryFunkyCranky: false,
    factoryFunkyNoSwitch: true,
    factoryFunkyCandy: false,
    factoryFunkySnide: false,
    factoryCandyCranky: false,
    factoryCandyFunky: false,
    factoryCandyNoSwitch: true,
    factoryCandySnide: false,
    factorySnideCranky: false,
    factorySnideFunky: false,
    factorySnideCandy: false,
    factorySnideNoSwitch: true,
    galleonCrankyNoSwitch: true,
    galleonCrankyFunky: false,
    galleonCrankyCandy: false,
    galleonCrankySnide: false,
    galleonFunkyCranky: false,
    galleonFunkyNoSwitch: true,
    galleonFunkyCandy: false,
    galleonFunkySnide: false,
    galleonCandyCranky: false,
    galleonCandyFunky: false,
    galleonCandyNoSwitch: true,
    galleonCandySnide: false,
    galleonSnideCranky: false,
    galleonSnideFunky: false,
    galleonSnideCandy: false,
    galleonSnideNoSwitch: true,
    forestCrankyNoSwitch: true,
    forestCrankyFunky: false,
    forestCrankySnide: false,
    forestFunkyCranky: false,
    forestFunkyNoSwitch: true,
    forestFunkySnide: false,
    forestSnideCranky: false,
    forestSnideFunky: false,
    forestSnideNoSwitch: true,
    cavesCrankyNoSwitch: true,
    cavesCrankyFunky: false,
    cavesCrankyCandy: false,
    cavesCrankySnide: false,
    cavesFunkyCranky: false,
    cavesFunkyNoSwitch: true,
    cavesFunkyCandy: false,
    cavesFunkySnide: false,
    cavesCandyCranky: false,
    cavesCandyFunky: false,
    cavesCandyNoSwitch: true,
    cavesCandySnide: false,
    cavesSnideCranky: false,
    cavesSnideFunky: false,
    cavesSnideCandy: false,
    cavesSnideNoSwitch: true,
    castleCrankyNoSwitch: true,
    castleCrankyFunky: false,
    castleCrankyCandy: false,
    castleCrankySnide: false,
    castleFunkyCranky: false,
    castleFunkyNoSwitch: true,
    castleFunkyCandy: false,
    castleFunkySnide: false,
    castleCandyCranky: false,
    castleCandyFunky: false,
    castleCandyNoSwitch: true,
    castleCandySnide: false,
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
        if (Object.keys(state.shuffledShops) === 'islesSwitchUp') {
          const target: Record<string, number | boolean> = {}
          target[id] = val
          state = {
            ...state,
            shuffledShops: {
              ...state.shuffledShops,
              ...target
            }
          }
          return state
        }

        // Else, enforce radio button semantics:
        // clear other boolean winCondition flags and set this one to true.
        if (val) {
          const reset: Record<string, number | boolean> = {}
          for (const k of Object.keys(state.shuffledShops)) {
            if (k === 'islesSwitchUp') continue
            reset[k] = false
          }
          reset[id] = true
          return {
            ...state,
            shuffledShops: {
              ...state.shuffledShops,
              ...reset
            }
          }
        }

        // If val is boolean false, just clear that specific flag.
        return {
          ...state,
          shuffledShops: {
            ...state.shuffledShops,
            [id]: false
          }
        }
      })
    }
  }
}

export default shopSlice
