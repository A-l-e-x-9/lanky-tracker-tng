import { create, StateCreator } from 'zustand'
import { persist } from 'zustand/middleware'

import { AllSlice } from './common'

import barrierSlice from './barriers'
import bLockerSlice from './b-locker'
import bossSlice from './boss'
import coreSlice from './checks'
import consumablesSlice from './consumables'
import { endingSlice, roolSlice } from './ending'
import fastCheckSlice from './fast-checks'
import hintSlice from './hints'
import levelSlice from './level'
import moveSlice from './moves'
import settingSlice from './settings'
import switchSlice from './switchsanities'
import uiSlice from './ui'
import winConSlice from './win-conditions'
import shopSlice from './shuffled-shops'

const initializer: StateCreator<AllSlice, [['zustand/persist', unknown]], []> = (...d) => ({
  ...coreSlice(...d),
  ...settingSlice(...d),
  ...levelSlice(...d),
  ...bLockerSlice(...d),
  ...hintSlice(...d),
  ...moveSlice(...d),
  ...bossSlice(...d),
  ...consumablesSlice(...d),
  ...switchSlice(...d),
  ...barrierSlice(...d),
  ...fastCheckSlice(...d),
  ...endingSlice(...d),
  ...roolSlice(...d),
  ...uiSlice(...d),
  ...winConSlice(...d),
  ...shopSlice(...d)
})

/**
 * Access the Donk store to both view and manage state.
 */
const useDonkStore = create<AllSlice>()(
  persist(initializer, {
    name: 'donk-storage' /*,
    onRehydrateStorage: (state) => {
      console.log('hydration starts')

      // optional
      return (state, error): void => {
        if (error) {
          console.log('an error happened during hydration', error)
        } else {
          console.log('hydration finished')
        }
      }
    }
    */
  })
)

export default useDonkStore
