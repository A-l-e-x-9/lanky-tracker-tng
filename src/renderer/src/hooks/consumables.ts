import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'
import { useDkMedalInLogic as islesDK } from '@renderer/hooks/isles/medals/dk'
import { useDiddyMedalInLogic as islesDiddy } from '@renderer/hooks/isles/medals/diddy'
import { useLankyMedalInLogic as islesLanky } from '@renderer/hooks/isles/medals/lanky'
import { useTinyMedalInLogic as islesTiny } from '@renderer/hooks/isles/medals/tiny'
import { useChunkyMedalInLogic as islesChunky } from '@renderer/hooks/isles/medals/chunky'
import { useDkMedalInLogic as japesDK } from '@renderer/hooks/japes/medals/dk'
import { useDiddyMedalInLogic as japesDiddy } from '@renderer/hooks/japes/medals/diddy'
import { useLankyMedalInLogic as japesLanky } from '@renderer/hooks/japes/medals/lanky'
import { useTinyMedalInLogic as japesTiny } from '@renderer/hooks/japes/medals/tiny'
import { useChunkyMedalInLogic as japesChunky } from '@renderer/hooks/japes/medals/chunky'
import { useDkMedalInLogic as aztecDK } from '@renderer/hooks/aztec/medals/dk'
import { useDiddyMedalInLogic as aztecDiddy } from '@renderer/hooks/aztec/medals/diddy'
import { useLankyMedalInLogic as aztecLanky } from '@renderer/hooks/aztec/medals/lanky'
import { useTinyMedalInLogic as aztecTiny } from '@renderer/hooks/aztec/medals/tiny'
import { useChunkyMedalInLogic as aztecChunky } from '@renderer/hooks/aztec/medals/chunky'
import { useDkMedalInLogic as factoryDK } from '@renderer/hooks/factory/medals/dk'
import { useDiddyMedalInLogic as factoryDiddy } from '@renderer/hooks/factory/medals/diddy'
import { useLankyMedalInLogic as factoryLanky } from '@renderer/hooks/factory/medals/lanky'
import { useTinyMedalInLogic as factoryTiny } from '@renderer/hooks/factory/medals/tiny'
import { useChunkyMedalInLogic as factoryChunky } from '@renderer/hooks/factory/medals/chunky'
import { useDkMedalInLogic as galleonDK } from '@renderer/hooks/galleon/medals/dk'
import { useDiddyMedalInLogic as galleonDiddy } from '@renderer/hooks/galleon/medals/diddy'
import { useLankyMedalInLogic as galleonLanky } from '@renderer/hooks/galleon/medals/lanky'
import { useTinyMedalInLogic as galleonTiny } from '@renderer/hooks/galleon/medals/tiny'
import { useChunkyMedalInLogic as galleonChunky } from '@renderer/hooks/galleon/medals/chunky'
import { useDkMedalInLogic as forestDK } from '@renderer/hooks/forest/medals/dk'
import { useDiddyMedalInLogic as forestDiddy } from '@renderer/hooks/forest/medals/diddy'
import { useLankyMedalInLogic as forestLanky } from '@renderer/hooks/forest/medals/lanky'
import { useTinyMedalInLogic as forestTiny } from '@renderer/hooks/forest/medals/tiny'
import { useChunkyMedalInLogic as forestChunky } from '@renderer/hooks/forest/medals/chunky'
import { useDkMedalInLogic as cavesDK } from '@renderer/hooks/caves/medals/dk'
import { useDiddyMedalInLogic as cavesDiddy } from '@renderer/hooks/caves/medals/diddy'
import { useLankyMedalInLogic as cavesLanky } from '@renderer/hooks/caves/medals/lanky'
import { useTinyMedalInLogic as cavesTiny } from '@renderer/hooks/caves/medals/tiny'
import { useChunkyMedalInLogic as cavesChunky } from '@renderer/hooks/caves/medals/chunky'
import { useDkMedalInLogic as castleDK } from '@renderer/hooks/castle/medals/dk'
import { useDiddyMedalInLogic as castleDiddy } from '@renderer/hooks/castle/medals/diddy'
import { useLankyMedalInLogic as castleLanky } from '@renderer/hooks/castle/medals/lanky'
import { useTinyMedalInLogic as castleTiny } from '@renderer/hooks/castle/medals/tiny'
import { useChunkyMedalInLogic as castleChunky } from '@renderer/hooks/castle/medals/chunky'
import { useCastleTree } from '@renderer/hooks/castle'

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
return Number(didCheck[10]) + Number(didCheck[12]) + Number(didCheck[23]) + Number(didCheck[32]) + Number(didCheck[43]) + Number(didCheck[1021]) + Number(didCheck[1022]) + Number(didCheck[1031]) + Number(didCheck[1042]) + Number(didCheck[2002]) + Number(didCheck[2021]) + Number(didCheck[2022]) + Number(didCheck[2042]) + Number(didCheck[2043]) + Number(didCheck[3010]) + Number(didCheck[3012]) + Number(didCheck[3020]) + Number(didCheck[3033]) + Number(didCheck[3042]) + Number(didCheck[4004]) + Number(didCheck[4011]) + Number(didCheck[4013]) + Number(didCheck[4021]) + Number(didCheck[4031]) + Number(didCheck[4032]) + Number(didCheck[4043]) + Number(didCheck[5001]) + Number(didCheck[5004]) + Number(didCheck[5010]) + Number(didCheck[5011]) + Number(didCheck[5021]) + Number(didCheck[5030]) + Number(didCheck[6001]) + Number(didCheck[6010]) + Number(didCheck[6030]) + Number(didCheck[6043]) + Number(didCheck[7010]) + Number(didCheck[7011]) + Number(didCheck[7020]) + Number(didCheck[7023]) + Number(didCheck[7033]) + Number(didCheck[7040]) + Number(didCheck[7043])
}

export const useKremKaptureEnemyCount = (): number => {
const [didCheck] = useDonkStore(useShallow((state) => [state.checks]))
return Number(didCheck[9000]) + Number(didCheck[9001]) + Number(didCheck[9002]) + Number(didCheck[9003]) + Number(didCheck[9004]) + Number(didCheck[9005]) + Number(didCheck[9006]) + Number(didCheck[9007]) + Number(didCheck[9008]) + Number(didCheck[9009]) + Number(didCheck[9010]) + Number(didCheck[9011]) + Number(didCheck[9012]) + Number(didCheck[9013]) + Number(didCheck[9014]) + Number(didCheck[9015]) + Number(didCheck[9016]) + Number(didCheck[9017]) + Number(didCheck[9018]) + Number(didCheck[9019]) + Number(didCheck[9020]) + Number(didCheck[9021]) + Number(didCheck[9022]) + Number(didCheck[9023]) + Number(didCheck[9024]) + Number(didCheck[9025]) + Number(didCheck[9026]) + Number(didCheck[9027]) + Number(didCheck[9028]) + Number(didCheck[9029]) + Number(didCheck[9030]) + Number(didCheck[9031]) + Number(didCheck[9032]) + Number(didCheck[9033]) + Number(didCheck[9034]) + Number(didCheck[9035]) + Number(didCheck[9036]) + Number(didCheck[9037]) + Number(didCheck[9038]) + Number(didCheck[9039]) + Number(didCheck[9040]) + Number(didCheck[9041]) //What a pain in the ass. There's GOT to be a better way to do the above three!!! >_<;
}

export const useCurrentBlastCount = (): number => {
const [didCheck] = useDonkStore(useShallow((state) => [state.checks]))
const canEnterTree = useCastleTree()
return Number(didCheck[1004]) + Number(didCheck[2001]) + Number(didCheck[3003]) + Number(didCheck[4002]) + Number(didCheck[5001]) + Number(didCheck[6001]) + Number(canEnterTree) //Kind of a flawed way to check if you did the Blast courses, because: you don't need to get the Llama's GB, what will you do if you don't have Fast Arcade on for Factory, you don't need to actually visit the Seal after freeing him, and "useCastleTree" has a DK Portal check, so if you got lucky and got a Portal in the Tree, "canEnterTree" will return 1 (the Tree has eight checks counting Dropsanity and Balloons, so I couldn't tie Castle's Blast course to just one). Will likely need the GitHub AI assistant's help to refine this...
}
export const useCurrentCBCount = (): number => {
  const islesCBs = islesDK() + islesDiddy() + islesLanky() + islesTiny() + islesChunky()
  const japesCBs = japesDK() + japesDiddy() + japesLanky() + japesTiny() + japesChunky()
  const aztecCBs = aztecDK() + aztecDiddy() + aztecLanky() + aztecTiny() + aztecChunky()
  const factoryCBs = factoryDK() + factoryDiddy() + factoryLanky() + factoryTiny() + factoryChunky()
  const galleonCBs = galleonDK() + galleonDiddy() + galleonLanky() + galleonTiny() + galleonChunky()
  const forestCBs = forestDK() + forestDiddy() + forestLanky() + forestTiny() + forestChunky()
  const cavesCBs = cavesDK() + cavesDiddy() + cavesLanky() + cavesTiny() + cavesChunky()
  const castleCBs = castleDK() + castleDiddy() + castleLanky() + castleTiny() + castleChunky()
  return islesCBs + japesCBs + aztecCBs + factoryCBs + galleonCBs + forestCBs + cavesCBs + castleCBs
}
