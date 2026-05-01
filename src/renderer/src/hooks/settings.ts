import useDonkStore from '@renderer/store'
import { BananaportRange, SlamRange } from '@renderer/store/common'
import { useShallow } from 'zustand/react/shallow'

export const useBalancedRoolPhase = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.balancedRoolPhases))

/**
 * What time is it in Fungi Forest?
 * @returns The current time in Forest.
 */
export const useForestTime = (): BananaportRange =>
  useDonkStore(useShallow((state) => state.settings.forestTime))

/**
 * Does the Galleon tide start at high tide instead of the vanilla low tide?
 * @returns true if the tide starts as high tide.
 */
export const useGalleonTideStartHigh = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.galleonHighTide))

/**
 * Is Switchsanity enabled? It can cause lots of chaos with the logic!
 * @returns true if Switchsanity is enabled.
 */
export const useIsSwitchsanity = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.isSwitchsanity))

/**
 * Are the lobbies open at the start of the game, with keys only being needed for K. Rool?
 * @returns true if the lobbies are already open without needing keys.
 */
export const useOpenLobbies = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.openLobbies))

/**
 * Is the Hard Shooting flag enabled, requiring harder shots without helpful tools?
 * @returns true if harder shot tricks are expected.
 */
export const useHardShooting = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.hardShooting))

/**
 * Does each level's slam requirement get higher the further in the game we are?
 *
 * This depends on Lobby Shuffle: the lobbies in 5 onward require Super, and 7 onward require Super Duper.
 * @returns true if the slam switches get more progressive.
 */
export const useProgressiveSlams = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.progressiveSlams))

/**
 * How many colored bananas are expected for a check within a stage?
 * @returns the number of colored bananas to collect for a check.
 */
export const useCbCount = (): number => useDonkStore(useShallow((state) => state.settings.cbCount))

/**
 * How many banana fairies do we require for the Banana Fairy Island (BFI) check?
 * @returns the number of banana fairies to have for the BFI check.
 */
export const useFairyCount = (): number =>
  useDonkStore(useShallow((state) => state.settings.fairyCount))

/**
 * How many banana medals do we need for the Jetpac check?
 * @returns The number of banana medals for Jetpac.
 */
export const useJetpacCount = (): number =>
  useDonkStore(useShallow((state) => state.settings.jetpacCount))

/**
 * Is each check containing a bonus barrel auto completed for you?
 *
 * Note that Helm's bonus barrels are not subject to this setting.
 * @returns true if bonus barrels are automatically completed.
 */
export const useAutoBonus = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.autoBonus))

/**
 * What is the status of the bananaports at the beginning of the game?
 * @returns the bananaport setting value.
 */
export const useBananaport = (): BananaportRange =>
  useDonkStore(useShallow((state) => state.settings.bananaportOpen))

/**
 * Can we warp using all of the bananaports immediately upon entering a level?
 * @returns true if we can warp all over within the levels immediately.
 */
export const useBananaportAll = (): boolean => useBananaport() == 2

/**
 * Where do we start Helm?
 * @returns The starting position of Helm.
 */
export const useHelmStartPosition = (): BananaportRange =>
  useDonkStore(useShallow((state) => state.settings.helmAccess))

/**
 * Are the melon crates shuffled in this seed?
 * @returns true if the melon crates are shuffled.
 */
export const useShuffleCrates = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.shuffleCrates))

/**
 * Are the shop items in the rando pool?
 * @returns true if the shops are in the pool.
 */
export const usePoolShops = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.poolShops))

/**
 * Are minecarts and races in the rando pool?
 * @returns true if so
 */
export const usePoolToughBananas = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.poolToughBananas))

/*Are enemy gauntlets and minibosses in the rando pool?
  @returns true if so*/
export const usePoolMiniboss = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.poolMiniboss))

/**
 * Are the miscellaneous items in the rando pool?
 * @returns true if the misc. items are in the pool.
 */
export const usePoolMisc = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.poolMisc))

export const usePoolPearls = (): boolean => {
  const beanAndPearlsInRotation = usePoolMisc()
  const pearlWinCon = useDonkStore(useShallow((state) => state.winCondition.pearls))
  return pearlWinCon && !beanAndPearlsInRotation
}

export const useBean = (): boolean => {
  const beanAndPearlsInRotation = usePoolMisc()
  const beanWinCon = useDonkStore(useShallow((state) => state.winCondition.theBean))
  return beanWinCon && !beanAndPearlsInRotation
}

/**
 * Are the blueprints the Kasplats hold in the rando pool?
 * @returns true if the blueprints are in the pool.
 */
export const usePoolBlueprints = (): boolean => {
  const kasplatsInRotation = useDonkStore(useShallow((state) => state.settings.poolBlueprints))
  const blueprintWinCon = useDonkStore(useShallow((state) => state.winCondition.blueprints))
  const isKRoolChallenge = useDonkStore(useShallow((state) => state.winCondition.kRoolChallenge))
  return kasplatsInRotation || ((blueprintWinCon || isKRoolChallenge) && !kasplatsInRotation)
}

/**
 * Are the banana fairies in the rando pool?
 * @returns true if the fairies are in the pool OR if they're not, but the win condition is to get fairies.
 */
export const usePoolFairies = (): boolean => {
  const fairiesInRotation = useDonkStore(useShallow((state) => state.settings.poolFairies))
  const fairyWinCon = useDonkStore(useShallow((state) => state.winCondition.fairies))
  return fairiesInRotation || (fairyWinCon && !fairiesInRotation)
}

/**
 * Is Dropsanity turned on? That is, can enemy drops contain checks?
 * @returns true if drops from enemies are enabled.
 */
export const usePoolDrops = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.poolDrops))

/**
 * Do we shuffle where each colored banana, banana bunch, and banana balloon is located?
 * @returns true if we do shuffle the colored banana locations.
 */
export const useShuffleColoredBananas = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.shuffleColoredBananas))

/**
 * Are the boss keys in the rando pool?
 * @returns true if the keys are in the pool.
 */
export const usePoolKeys = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.poolKeys))

/**
 * Are the melon crates in the rando pool?
 * @returns true if the crates are in the pool.
 */
export const usePoolCrates = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.poolCrates))

/**
 * Are the rainbow coins shuffled in the pool, or always kept in dirt spots?
 * @returns true if the rainbow coins are shuffled in the pool.
 */
export const usePoolRainbowCoins = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.poolRainbowCoins))

/**
 * Are the battle crowns in the rando pool?
 * @returns true if the crowns are in the pool.
 */
export const usePoolCrowns = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.poolCrowns))

/**
 * Are the banana medals in the rando pool?
 * @returns true if...
  * banana medals are in the pool
  * banana medals are NOT in the pool, but your seed's win condition involves the Banana Medals
  * banana medals are NOT in the pool, but your seed's win condition involves the bosses; this will be a very crude way of determining if you can get enough Colored Bananas to overcome the Troff 'n' Scoff portals. Intended to be a temporary measure until Alex can properly implement Troff 'n' Scoff checks.
 */
export const usePoolBananaMedals = (): boolean => {
  const medalsInRotation = useDonkStore(useShallow((state) => state.settings.poolBananaMedals))
  const medalWinCon = useDonkStore(useShallow((state) => state.winCondition.bananaMedals))
  const bossWinCon = useDonkStore(useShallow((state) => state.winCondition.bosses))
  const kRoolsChallenge = useDonkStore(useShallow((state) => state.winCondition.kRoolChallenge))
  return medalsInRotation || ((medalWinCon || bossWinCon || kRoolsChallenge) && !medalsInRotation)
}

/**
 * Are the company coins in the rando pool?
 * @returns true if the company coins are in the pool.
 */
export const usePoolCompanyCoins = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.poolCompanyCoins))

/**
 * Are the dirt locations shuffled around in this seed?
 * @returns true if the dirt locations are shuffled this seed.
 */
export const useShuffleDirt = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.shuffleDirt))

/**
 * Are the fairy locations shuffled around in this seed?
 * @returns true if the fairy locations are shuffled this seed.
 */
export const useShuffleFairies = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.shuffleFairies))

/*Are Chunky's boulders in the pool?*/
export const usePoolBoulders = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.poolBoulders))
  
/*What about Wrinkly Kong's doors?*/
export const usePoolWrinkly = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.poolWrinkly))

/**
 * Are the Kasplat locations shuffled around in this seed?
 * @returns true if the Kasplat locations are shuffled this seed.
 */
export const useShuffleKasplats = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.shuffleKasplats))

export const useShuffledArenas = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.shuffleArenas))

export const useShuffledShops = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.shuffleShops))

export const useChunkySlamLevel = (): SlamRange =>
  useDonkStore(useShallow((state) => state.settings.chunkySlamLevel))
  
export const useIslesBananaMedals = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.poolIslesMedals))

export const usePoolKongs = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.poolKongs))

export const usePoolGoldBananas = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.poolGoldBananas))

export const useBetaLankyPhase = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.betaLankyPhase))
  
export const useAngryCaves = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.angyKosha))
  
export const useHelmItem1 = (): number =>
  useDonkStore(useShallow((state) => state.settings.helmItem1))

export const useHelmItem2 = (): number =>
  useDonkStore(useShallow((state) => state.settings.helmItem2))

export const useKRoolItem = (): number => {
const currentWinCon = useDonkStore(useShallow((state) => state.winCondition))
if (currentWinCon.bossKeys) {
  return 1
} else if (currentWinCon.key8) {
  return 2
} else if (currentWinCon.key3And8) {
  return 3
} else if (currentWinCon.kremlingKapture) {
  return 4
} else if (currentWinCon.takeItToTheFridge) {
  return 5
} else if (currentWinCon.kRoolChallenge) {
  return 6
} else if (currentWinCon.killTheWabbit) {
  return 7
} else if (currentWinCon.goldBananas) {
  return 8
} else if (currentWinCon.blueprints) {
  return 9
} else if (currentWinCon.companyCoins) {
  return 10
} else if (currentWinCon.bananaMedals) {
  return 11
} else if (currentWinCon.crowns) {
  return 12
} else if (currentWinCon.fairies) {
  return 13
} else if (currentWinCon.rainbowCoins) {
  return 14
} else if (currentWinCon.theBean) {
  return 15
} else if (currentWinCon.pearls) {
  return 16
} else if (currentWinCon.bosses) {
  return 17
} else if (currentWinCon.bonuses) {
  return 18
} else {
  return 0
}
}
  
export const useHelmItemNum1 = (): number =>
  useDonkStore(useShallow((state) => state.settings.helmItemNum1))

export const useHelmItemNum2 = (): number =>
  useDonkStore(useShallow((state) => state.settings.helmItemNum2))

export const useKRoolItemNum = (): number =>
  useDonkStore(useShallow((state) => state.winCondition.winConItemCount))
