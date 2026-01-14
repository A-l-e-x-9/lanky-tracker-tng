import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'
import {
  useSingleHelmCheck,
  useSingleHelmNum,
  useSingleRoolCheck,
  useSingleRoolNum
} from '../endings'
import { useIslesHelmEntry, usePlayLevel, useSlamLevel } from '../isles'
import {
  useAllKongs,
  useAllMusic,
  useAnyMusic,
  useGrab,
  useMini,
  usePineapple,
  usePunch,
  useRocket,
  useStand,
  useVine,
  useSnide,
  useCoconut,
  usePeanut,
  useGrape,
  useGuitar,
  useTwirl,
  useSprint,
  useHunky,
  useSpring,
  useBalloon,
  useOrange,
  useClimbing,
  useBarrel,
  useCranky
} from '../kongs'
import { useHelmStartPosition, useHelmItem1, useHelmItemNum1, useHelmItem2, useHelmItemNum2, useKRoolItem, useKRoolItemNum } from '../settings'
import { LogicBool } from '../world'
import { useCurrentGBCount, useCurrentBlueprintCount, useCurrentCoCoinCount, useCurrentKeyCount, useCurrentBananaMedalCount, useCurrentCrownCount, useCurrentFairyCount, useCurrentRainbowCoinCount, useBean, useCurrentPearlCount } from '../consumables'

/**
 * Can we play in Hideout Helm?
 * @returns true if we can play in Hideout Helm.
 */
export const usePlayHelm = (): LogicBool => {
  const canEnter = usePlayLevel('Hideout Helm')
  return {
    in: canEnter.in,
    out: canEnter.out
  }
}

/**
 * Can we slam down switches in Hideout Helm?
 * @todo Handle both options of the progressive slam setting.
 * @returns true if we can slam switches in Hideout Helm.
 */
export const useSlamHelm = (): boolean => useSlamLevel('Hideout Helm')

/**
 * Can we actually cross the lava to enter Helm?
 * @returns true if we can enter Helm.
 */
export const useHelmEnter = (): boolean => {
  const access = useIslesHelmEntry()
  const vine = useVine()
  return access && vine
}

/**
 * Can we access the heart of the machine in Helm?
 * @returns true if we can access the machine.
 */
export const useHelmMachine = (): LogicBool => {
  const inLevel = usePlayHelm()
  const entry = useHelmEnter()
  const stand = useStand()
  const pineapple = usePineapple()
  const vine = useVine()
  const mini = useMini()
  const helmAccess = useHelmStartPosition()
  return {
    in: inLevel.in && entry && (helmAccess != 0 || (stand && pineapple && vine && mini)),
    out: (inLevel.in || inLevel.out) && entry && (helmAccess != 0 || (pineapple && vine && mini))
  }
}

/**
 * Can we access the Helm doors?
 * @returns true if we can access the Helm doors.
 */
export const useHelmDoors = (): LogicBool => {
  const inLevel = usePlayHelm()
  const entry = useHelmEnter()
  const anyMusic = useAnyMusic()
  const machine = useHelmMachine()
  const grab = useGrab()
  const rocket = useRocket()
  const punch = usePunch()
  const helmAccess = useHelmStartPosition()
  const [barriers] = useDonkStore(useShallow((state) => [state.removeBarriers]))
  const romanNumGatesAlreadyDown = barriers.helmDKStarGates
  const punchGatesAlreadyDown = barriers.helmPunchGates
  return {
    in: inLevel.in && entry && (helmAccess == 2 || (anyMusic && (helmAccess == 1 || (machine.in && ((grab && rocket) || romanNumGatesAlreadyDown) && (punch || punchGatesAlreadyDown))))),
    out: (inLevel.in || inLevel.out) && entry && machine.out && grab && rocket && punch
  }
}

//Can we get past Door #1 and enter K. Rool's throne room?
export const useEOHDoor1 = (): LogicBool => {
  const canReachNavRoom = useHelmDoors()
  const itemNeeded = useHelmItem1()
  const targetItemCount = useHelmItemNum1()
  const currentGBCount = useCurrentGBCount()
  const currentBlueprintCount = useCurrentBlueprintCount()
  const currentCoCoinCount = useCurrentCoCoinCount()
  const currentKeyCount = useCurrentKeyCount()
  const currentBananaMedalCount = useCurrentBananaMedalCount()
  const currentCrownCount = useCurrentCrownCount()
  const currentFairyCount = useCurrentFairyCount()
  const currentRainbowCoinCount = useCurrentRainbowCoinCount()
  const currentBeanCount = useBean()
  const currentPearlCount = useCurrentPearlCount()
  
  switch (itemNeeded) {
    case 1:
      return {
        in: canReachNavRoom.in && (currentGBCount >= targetItemCount),
        out: canReachNavRoom.out && (currentGBCount >= targetItemCount)
      }
    case 2:
      return {
        in: canReachNavRoom.in && (currentBlueprintCount >= targetItemCount),
        out: canReachNavRoom.out && (currentBlueprintCount >= targetItemCount)
      }
    case 3:
      return {
        in: canReachNavRoom.in && (currentCoCoinCount >= targetItemCount),
        out: canReachNavRoom.out && (currentCoCoinCount >= targetItemCount)
      }
    case 4:
      return {
        in: canReachNavRoom.in && (currentKeyCount >= targetItemCount),
        out: canReachNavRoom.out && (currentKeyCount >= targetItemCount)
      }
    case 5:
      return {
        in: canReachNavRoom.in && (currentBananaMedalCount >= targetItemCount),
        out: canReachNavRoom.out && (currentBananaMedalCount >= targetItemCount)
      }
    case 6:
      return {
        in: canReachNavRoom.in && (currentCrownCount >= targetItemCount),
        out: canReachNavRoom.out && (currentCrownCount >= targetItemCount)
      }
    case 7:
      return {
        in: canReachNavRoom.in && (currentFairyCount >= targetItemCount),
        out: canReachNavRoom.out && (currentFairyCount >= targetItemCount)
      }
    case 8:
      return {
        in: canReachNavRoom.in && (currentRainbowCoinCount >= targetItemCount),
        out: canReachNavRoom.out && (currentRainbowCoinCount >= targetItemCount)
      }
    case 9:
      return {
        in: canReachNavRoom.in && (Number(currentBeanCount) >= targetItemCount),
        out: canReachNavRoom.out && (Number(currentBeanCount) >= targetItemCount)
      }
    case 10:
      return {
        in: canReachNavRoom.in && (currentPearlCount >= targetItemCount),
        out: canReachNavRoom.out && (currentPearlCount >= targetItemCount)
      }
    default:
      return {
        in: canReachNavRoom.in,
        out: canReachNavRoom.out
      }
  }
}

//Can we get past Door #2 and, in vanilla, get Key #8?
export const useEOHDoor2 = (): LogicBool => {
  const canReachThrone = useEOHDoor1()
  const itemNeeded = useHelmItem2()
  const targetItemCount = useHelmItemNum2()
  const currentGBCount = useCurrentGBCount()
  const currentBlueprintCount = useCurrentBlueprintCount()
  const currentCoCoinCount = useCurrentCoCoinCount()
  const currentKeyCount = useCurrentKeyCount()
  const currentBananaMedalCount = useCurrentBananaMedalCount()
  const currentCrownCount = useCurrentCrownCount()
  const currentFairyCount = useCurrentFairyCount()
  const currentRainbowCoinCount = useCurrentRainbowCoinCount()
  const currentBeanCount = useBean()
  const currentPearlCount = useCurrentPearlCount()
  
  switch (itemNeeded) {
    case 1:
      return {
        in: canReachThrone.in && (currentGBCount >= targetItemCount),
        out: canReachThrone.out && (currentGBCount >= targetItemCount)
      }
    case 2:
      return {
        in: canReachThrone.in && (currentBlueprintCount >= targetItemCount),
        out: canReachThrone.out && (currentBlueprintCount >= targetItemCount)
      }
    case 3:
      return {
        in: canReachThrone.in && (currentCoCoinCount >= targetItemCount),
        out: canReachThrone.out && (currentCoCoinCount >= targetItemCount)
      }
    case 4:
      return {
        in: canReachThrone.in && (currentKeyCount >= targetItemCount),
        out: canReachThrone.out && (currentKeyCount >= targetItemCount)
      }
    case 5:
      return {
        in: canReachThrone.in && (currentBananaMedalCount >= targetItemCount),
        out: canReachThrone.out && (currentBananaMedalCount >= targetItemCount)
      }
    case 6:
      return {
        in: canReachThrone.in && (currentCrownCount >= targetItemCount),
        out: canReachThrone.out && (currentCrownCount >= targetItemCount)
      }
    case 7:
      return {
        in: canReachThrone.in && (currentFairyCount >= targetItemCount),
        out: canReachThrone.out && (currentFairyCount >= targetItemCount)
      }
    case 8:
      return {
        in: canReachThrone.in && (currentRainbowCoinCount >= targetItemCount),
        out: canReachThrone.out && (currentRainbowCoinCount >= targetItemCount)
      }
    case 9:
      return {
        in: canReachThrone.in && (Number(currentBeanCount) >= targetItemCount),
        out: canReachThrone.out && (Number(currentBeanCount) >= targetItemCount)
      }
    case 10:
      return {
        in: canReachThrone.in && (currentPearlCount >= targetItemCount),
        out: canReachThrone.out && (currentPearlCount >= targetItemCount)
      }
    default:
      return {
        in: canReachThrone.in,
        out: canReachThrone.out
      }
  }
}

export const useCanDeactivateHelm = (): boolean => {
  const allMusic = useAllMusic()
  const rocket = useRocket()
  const num1 = useSingleHelmNum(1)
  const num2 = useSingleHelmNum(2)
  const num3 = useSingleHelmNum(3)
  const num4 = useSingleHelmNum(4)
  const num5 = useSingleHelmNum(5)
  const check1 = useSingleHelmCheck(1)
  const check2 = useSingleHelmCheck(2)
  const check3 = useSingleHelmCheck(3)
  const check4 = useSingleHelmCheck(4)
  const check5 = useSingleHelmCheck(5)

  if (allMusic && rocket) {
    return true
  }

  if (num1 === 0 && num2 === 0 && num3 === 0 && num4 === 0 && num5 === 0) {
    return false
  }

  return check1 && check2 && check3 && check4 && check5
}

export const useTheFridge = (): boolean => {
  const hasAllKongs = useAllKongs()
  const hasCoconut = useCoconut()
  const hasPeanut = usePeanut()
  const hasGrapes = useGrape()
  const hasPineapple = usePineapple()
  const hasGuitar = useGuitar()
  const hasOStand = useStand()
  const hinaKagiyama = useTwirl()
  const hasJetbarrel = useRocket()
  const hasSprint = useSprint()
  const hasMiniMonkey = useMini()
  const hasHunkyChunky = useHunky()
  const springHasSprung = useSpring()
  const inflation = useBalloon()
  const hasOranges = useOrange()
  const hasClimbing = useClimbing()
  const hasBarrels = useBarrel()
  const hasCranky = useCranky()
  return hasAllKongs && hasCoconut && hasPeanut && hasGrapes && hasPineapple && hasGuitar && hasOStand && hinaKagiyama && hasJetbarrel && hasSpring && hasMiniMonkey && hasHunkyChunky && springHasSprung && inflation && hasOranges && hasClimbing && hasBarrels && hasCranky
}
//Have we satisfied the conditions needed just for K. Rool to appear?
export const useWinCondition = (): boolean => {
  const itemNeeded = useKRoolItem()
  const hasKey3 = useDonkStore(useShallow((state) => state.key3))
  const hasKey8 = useDonkStore(useShallow((state) => state.key8))
  const hasSnide = useSnide()
  const targetItemCount = useKRoolItemNum()
  const currentGBCount = useCurrentGBCount()
  const currentBlueprintCount = useCurrentBlueprintCount()
  const currentCoCoinCount = useCurrentCoCoinCount()
  const currentKeyCount = useCurrentKeyCount()
  const currentBananaMedalCount = useCurrentBananaMedalCount()
  const currentCrownCount = useCurrentCrownCount()
  const currentFairyCount = useCurrentFairyCount()
  const currentRainbowCoinCount = useCurrentRainbowCoinCount()
  const currentBeanCount = useBean()
  const currentPearlCount = useCurrentPearlCount()
  const tookItToTheFridge = useTheFridge()
  
  switch (itemNeeded) {
    case 1: //keys
      return currentKeyCount >= targetItemCount
    case 2: //Key 8 only
      return hasKey8
    case 3: //Keys 3 and 8
      return hasKey3 && hasKey8
    case 4: //Kremling Kapture
      return true //stuff needed to satisfy this win con TBD...
    case 5: //Complete the DK Rap
      return tookItToTheFridge
    case 6: //K. Rool's Challenge
      return (currentKeyCount >= 8) && hasSnide && (currentBlueprintCount >= 40) //Currently doesn't account for Bonus Barrels or bosses
    case 7: //Kill the Wabbit
      return false //you can't even fight K. Rool at all under that condition. Accordingly, the section of the tracker this shit serves is disabled.
    case 8: //Nanners
      return currentGBCount >= targetItemCount
    case 9: //Blueprints
      return currentBlueprintCount >= targetItemCount
    case 10: //The Company Coins
      return currentCoCoinCount >= targetItemCount
    case 11: //Banana Medals
      return currentBananaMedalCount >= targetItemCount
    case 12: //Crowns
      return currentCrownCount >= targetItemCount
    case 13: //Fairies
      return currentFairyCount >= targetItemCount
    case 14: //Rainbow Coins
      return currentRainbowCoinCount >= targetItemCount
    case 15: //THE BEAN!!!
      return Number(currentBeanCount) >= targetItemCount
    case 16: //Pearls
      return currentPearlCount >= targetItemCount
    case 17: //Bosses
    case 18: //Bonuses (how I'm gonna handle these two is still currently TBD)
    default:
      return true
  }
}

export const useCanFightRool = (): LogicBool => {
  const num1 = useSingleRoolNum(1)
  const num2 = useSingleRoolNum(2)
  const num3 = useSingleRoolNum(3)
  const num4 = useSingleRoolNum(4)
  const num5 = useSingleRoolNum(5)
  const check1 = useSingleRoolCheck(1)
  const check2 = useSingleRoolCheck(2)
  const check3 = useSingleRoolCheck(3)
  const check4 = useSingleRoolCheck(4)
  const check5 = useSingleRoolCheck(5)
  const winConditionSatisfied = useWinCondition()

  if (num1 === 0 && num2 === 0 && num3 === 0 && num4 === 0 && num5 === 0) {
    return {
      in: false,
      out: false
    }
  }

  return {
    in: winConditionSatisfied && check1.in && check2.in && check3.in && check4.in && check5.in,
    out: winConditionSatisfied && check1.out && check2.out && check3.out && check4.out && check5.out
  }
}

export const useNotFightingKRool = (): boolean => useDonkStore(useShallow((state) => state.ui.hideKRool))
