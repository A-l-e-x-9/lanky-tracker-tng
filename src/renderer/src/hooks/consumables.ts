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
  useDonkStore(useShallow((state) => (Number(state.key1) + Number(state.key2) + Number(state.key3) + Number(state.key4) + Number(state.key5) + Number(state.key6) + Number(state.key7) + Number(state.key8))))

export const useCurrentCrownCount = (): number =>
  useDonkStore(useShallow((state) => state.consumables.crowns))

export const useCurrentRainbowCoinCount = (): number =>
  useDonkStore(useShallow((state) => state.consumables.rainbowCoins))

export const useCurrentBossCount = (): number => {
const [didCheck] = useDonkStore(useShallow((state) => [state.checks]))
return Number(didCheck[1105]) + Number(didCheck[2105]) + Number(didCheck[3105]) + Number(didCheck[4105]) + Number(didCheck[5105]) + Number(didCheck[6105]) + Number(didCheck[7105])
}

export const useCurrentBonusCount = (): number => {
const [didCheck] = useDonkStore(useShallow((state) => [state.checks]))
return Number(didCheck[10] + Number(didCheck[12]) + Number(didCheck[23]) + Number(didCheck[32]) + Number(didCheck[43]) + Number(didCheck[1021]) + Number(didCheck[1022]) + Number(didCheck[1031]) + Number(didCheck[1042]) + Number(didCheck[2002]) + Number(didCheck[2021]) + Number(didCheck[2022]) + Number(didCheck[2042]) + Number(didCheck[2043]) + Number(didCheck[3010]) + Number(didCheck[3012]) + Number(didCheck[3020]) + Number(didCheck[3033]) + Number(didCheck[3042]) + Number(didCheck[4004]) + Number(didCheck[4011]) + Number(didCheck[4013]) + Number(didCheck[4021]) + Number(didCheck[4031]) + Number(didCheck[4032]) + Number(didCheck[4043]) + Number(didCheck[5001]) + Number(didCheck[5004]) + Number(didCheck[5010]) + Number(didCheck[5011]) + Number(didCheck[5021]) + Number(didCheck[5030]) + Number(didCheck[6001]) + Number(didCheck[6010]) + Number(didCheck[6030]) + Number(didCheck[6043]) + Number(didCheck[7010]) + Number(didCheck[7011]) + Number(didCheck[7020]) + Number(didCheck[7023]) + Number(didCheck[7033]) + Number(didCheck[7040]) + Number(didCheck[7043])
}
