import { StateCreator } from 'zustand'
import { AllSlice, SettingSlice, SettingState, donkResetFns } from './common'

export const initialSettings: SettingState = {
  settings: {
    isSwitchsanity: false,
    cbCount: 75,
    shuffleColoredBananas: false,
    progressiveSlams: true,
    helmAccess: 0,
    jetpacCount: 15,
    fairyCount: 20,
    bananaportOpen: 0,
    forestTime: 0,
    galleonHighTide: false,
    shuffleShops: false,
    poolGoldBananas: true,
    poolShops: true,
    poolMisc: true,
    poolKeys: true,
    poolKongs: true,
    shuffleDirt: false,
    poolRainbowCoins: true,
    poolCrowns: true,
    poolBananaMedals: true,
    poolIslesMedals: true,
    shuffleArenas: false,
    poolToughBananas: true,
    poolMiniboss: true,
    poolBlueprints: true,
    shuffleKasplats: false,
    poolFairies: true,
    poolCrates: true,
    shuffleCrates: false,
    shuffleFairies: false,
    autoBonus: false,
    poolCompanyCoins: true,
    poolDrops: true,
    shuffleEnemies: true,
    hardShooting: false,
    openLobbies: false,
    freeTrade: 2,
    balancedRoolPhases: true,
    chunkySlamLevel: 0,
    poolWrinkly: true,
    poolBoulders: true
  }
}

const settingSlice: StateCreator<AllSlice, [], [], SettingSlice> = (set) => {
  donkResetFns.add(() => set(initialSettings))
  return {
    ...initialSettings,
    setSetting: (id, val): void => {
      set((state) => {
        const target: Record<string, boolean | number> = {}
        target[id] = val
        state = {
          ...state,
          settings: {
            ...state.settings,
            ...target
          }
        }
        return state
      })
    }
  }
}

export default settingSlice
