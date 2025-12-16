import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'

/**
 * How many banana medals do we actually have?
 * @returns our current banana medal count.
 */
export const useCurrentBananaMedalCount = (): number =>
  useDonkStore(useShallow((state) => state.consumables.bananaMedals))

/**
 * How many mermaid pearls do we actually have?
 * @returns our current pearl count.
 */
export const useCurrentPearlCount = (): number =>
  useDonkStore(useShallow((state) => state.consumables.pearls))

/**
 * How many banana fairies do we actually have?
 * @returns our current fairy count.
 */
export const useCurrentFairyCount = (): number =>
  useDonkStore(useShallow((state) => state.consumables.fairies))

/**
 * Do we have the one and only memetic bean?
 * @returns true if we have the bean.
 */
export const useBean = (): boolean => useDonkStore(useShallow((state) => state.consumables.bean))

export const useCurrentGBCount = (): number =>
  useDonkStore(useShallow((state) => state.consumables.goldBananas))

export const useCurrentBlueprintCount = (): number =>
  useDonkStore(useShallow((state) => (state.consumables.dkBp + state.consumables.diddyBp + state.consumables.lankyBp + state.consumables.tinyBp + state.consumables.chunkyBp)))
  
export const useCurrentCoCoinCount = (): number =>
  useDonkStore(useShallow((state) => (Number(state.consumables.nintendoCoin) + Number(state.consumables.rareCoin))))

export const useCurrentKeyCount = (): number =>
  useDonkStore(useShallow((state) => (state.setKey.key1 + state.setKey.key2 + state.setKey.key3 + state.setKey.key4 + state.setKey.key5 + state.setKey.key6 + state.setKey.key7 + state.setKey.key8)))

export const useCurrentCrownCount = (): number =>
  useDonkStore(useShallow((state) => state.consumables.crowns))

export const useCurrentRainbowCoinCount = (): number =>
  useDonkStore(useShallow((state) => state.consumables.rainbowCoins))
