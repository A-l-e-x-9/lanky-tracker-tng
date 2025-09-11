import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import { usePlayLevel, useSlamLevel } from '../isles'
import {
  useAnyGun,
  useAnyKong,
  useAnyMusic,
  useBalloon,
  useBlast,
  useBoulderTech,
  useCamera,
  useCharge,
  useChunky,
  useCoconut,
  useDiddy,
  useDk,
  useFeather,
  useFtaChunkyBlueprint,
  useFtaDiddyBlueprint,
  useFtaLankyBlueprint,
  useFtaTinyBanana,
  useFtaTinyBlueprint,
  useGone,
  useGrab,
  useGrape,
  useHoming,
  useLanky,
  useMini,
  useMonkeyport,
  usePeanut,
  usePineapple,
  usePunch,
  useRocket,
  useShockwave,
  useSniper,
  useSprint,
  useStrong,
  useTriangle,
  useTrombone,
  useTwirl,
  useVine,
  useClimbing,
  useSnide
} from '../kongs'
import { useHardShooting } from '../settings'
import { LogicBool } from '../world'

/**
 * Can we play in Creepy Castle?
 * @returns true if we can play in Creepy Castle.
 */
export const usePlayCastle = (): boolean => usePlayLevel('Creepy Castle')

/**
 * Can we slam down switches in Creepy Castle?
 * @todo Handle both options of the progressive slam setting.
 * @returns true if we can slam switches in Creepy Castle.
 */
export const useSlamCastle = (): boolean => useSlamLevel('Creepy Castle')

/**
 * Can we enter the Tree in Castle?
 * @returns true if we can enter the Tree in Castle.
 */
export const useCastleTree = (): boolean => {
  const inStage = usePlayCastle()
  const blast = useBlast()
  return inStage && blast
}

/*Alex addition: Did we set the "pre-open Crypt" option under Fast Barriers?*/
export const useOpenCrypt = (): boolean => {
  const [removeBarriers] = useDonkStore(useShallow((state) => [state.removeBarriers]))
  return removeBarriers.castleCrypt
}

/**
 * Can the enemies in the shed be defeated?
 * @returns true if the enemies in the shed can be defeated.
 */
export const useChunkyShedGb = (): LogicBool => {
  const inStage = usePlayCastle()
  const punch = usePunch()
  const triangle = useTriangle()
  const gone = useGone()
  const pineapple = usePineapple()
  const anyMusic = useAnyMusic()
  const hasAGun = useAnyGun()
  return {
    in: inStage && punch && (triangle || (gone && pineapple)),
    out: inStage && punch && (anyMusic || hasAGun)
  }
}

export const useChunkyTreeGb = (): LogicBool => {
  const tree = useCastleTree()
  const punch = usePunch()
  const pineapple = usePineapple()
  const sniper = useSniper()
  const hardShooting = useHardShooting()
  return {
    in: tree && punch && pineapple && (sniper || hardShooting),
    out: tree && punch && pineapple
  }
}

export const useChunkyRoomGb = (): boolean => {
  const inStage = usePlayCastle()
  const slam = useSlamCastle()
  const boulder = useBoulderTech()
  const punch = usePunch()
  return inStage && slam && boulder && punch
}

export const useChunkyCryptGb = (): LogicBool => {
  const inStage = usePlayCastle()
  const pineapple = usePineapple()
  const punch = usePunch()
  const preOpened = useOpenCrypt()
  const hasClimbing = useClimbing()
  return {
    in: inStage && (pineapple || preOpened) && punch && hasClimbing,
    out: inStage && (pineapple || preOpened) && punch
  }
}

export const useDiddyTopGb = (): boolean => {
  const rocket = useRocket()
  return usePlayCastle() && rocket
}

export const useDiddyRoomGb = (): boolean => {
  const topGb = useDiddyTopGb()
  return useSlamCastle() && topGb
}

export const useDiddyCryptGb = (): LogicBool => {
  const peanut = usePeanut()
  const cryptPreOpened = useOpenCrypt()
  const charge = useCharge()
  const hasClimbing = useClimbing()
  return {
    in: usePlayCastle() && (peanut || cryptPreOpened) && charge && hasClimbing,
    out: usePlayCastle() && (peanut || cryptPreOpened) && charge
  }
}

export const useDiddyDungeonGb = (): boolean => {
  const canSlam = useSlamCastle()
  const peanut = usePeanut()
  const sniper = useSniper()
  const vine = useVine()
  return usePlayCastle() && canSlam && peanut && sniper && vine
}

export const useDkTreeGb = (): boolean => {
  const coconut = useCoconut()
  const sniper = useSniper()
  return useCastleTree() && coconut && sniper
}

export const useDkRoomGb = (): LogicBool => {
  const inStage = usePlayCastle()
  const slam = useSlamCastle()
  const dk = useDk()
  const strong = useStrong()
  return {
    in: inStage && slam && strong,
    out: inStage && slam && dk
  }
}

export const useDkCryptGb = (): LogicBool => {
  const coconut = useCoconut()
  const cryptPreOpened = useOpenCrypt()
  const grab = useGrab()
  const hasClimbing = useClimbing()
  return {
    in: usePlayCastle() && (coconut || cryptPreOpened) && grab && hasClimbing,
    out: usePlayCastle() && (coconut || cryptPreOpened) && grab
  }
}

export const useDkDungeonGb = (): boolean => {
  const dk = useDk()
  const slam = useSlamCastle()
  return usePlayCastle() && dk && slam
}

export const useLankyRoomGb = (): LogicBool => {
  const inStage = usePlayCastle()
  const slam = useSlamCastle()
  const grape = useGrape()
  const balloon = useBalloon()
  const sniper = useSniper()
  const homing = useHoming()
  return {
    in: inStage && slam && grape && balloon && sniper,
    out: inStage && slam && grape && balloon && homing
  }
}

/*The O-Stand Sprint barrel here is a total red herring. You can do it without.*/
export const useLankyGreenhouseGb = (): boolean => {
  const lanky = useLanky()
  const slam = useSlamCastle()
  return usePlayCastle() && lanky && slam
}

export const useArena = (): boolean => {
  const didGreenhouseBanana = useLankyGreenhouseGb()
  return didGreenhouseBanana
}

export const useLankyMausoleumGb = (): LogicBool => {
  const inStage = usePlayCastle()
  const grape = useGrape()
  const preOpened = useOpenCrypt()
  const sprint = useSprint()
  const vine = useVine()
  const trombone = useTrombone()
  const dk = useDk()
  const diddy = useDiddy()
  const hasClimbing = useClimbing()
  return {
    in: inStage && (grape || preOpened) && sprint && vine && trombone && hasClimbing,
    out: inStage && (grape || preOpened) && (sprint || dk || diddy)
  }
}
/*Does the "pre-open Crypt" option affect the gate barring the way to Lanky's Banana, too? May have to change this...*/

export const useLankyDungeonGb = (): LogicBool => {
  const inStage = usePlayCastle()
  const canSlam = useSlamCastle()
  const trombone = useTrombone()
  const balloon = useBalloon()
  const twirl = useTwirl()
  return {
    in: inStage && canSlam && trombone && balloon,
    out: inStage && canSlam && trombone && twirl
  }
}

export const useTinyRoomGb = (): boolean => {
  const inStage = usePlayCastle()
  const diddy = useDiddy()
  const canSlam = useSlamCastle()
  const port = useMonkeyport()
  const mini = useMini()
  return inStage && diddy && canSlam && port && mini
}

export const useTinyTrashGb = (): LogicBool => {
  const inStage = usePlayCastle()
  const mini = useMini()
  const sax = useAnyMusic()
  const homing = useHoming()
  const hardShooting = useHardShooting()
  const anyGun = useAnyGun()
  return {
    in: inStage && mini && (sax || (anyGun && (homing || hardShooting))),
    out: inStage && mini && (sax || anyGun)
  }
}

/**
 * Can Tiny get the Mausoleum GB over the acid?
 * @todo There may be other ways of getting this banana.
 * @returns true if we can get the banana.
 */
export const useTinyMausoleumGb = (): LogicBool => {
  const inStage = usePlayCastle()
  const feather = useFeather()
  const canSlam = useSlamCastle()
  const twirl = useTwirl()
  const grape = useGrape()
  const dk = useDk()
  const hasClimbing = useClimbing()
  const preOpened = useOpenCrypt()
  return {
    in: inStage && (feather || grape || preOpened) && canSlam && twirl && hasClimbing,
    out: useFtaTinyBanana() && inStage && (feather || grape || preOpened) && canSlam && (dk || twirl)
  }
}

export const useTinyChasmGb = (): boolean => {
  const twirl = useTwirl()
  return usePlayCastle() && twirl
}

export const useGeneralThing = (): boolean => {
  const inStage = usePlayCastle()
  return useAnyKong() && inStage
}

export const useGeneralDirt = (): boolean => {
  const inStage = useGeneralThing()
  return useShockwave() && inStage
}

export const useGeneralFairy = (): boolean => {
  const inStage = useGeneralThing()
  return useCamera() && inStage
}

export const useTreeFairy = (): boolean => {
  const tree = useTreeKasplat()
  const camera = useCamera()
  return tree && camera
}

export const useRoomFairy = (): LogicBool => {
  const slam = useSlamCastle()
  const inStage = usePlayCastle()
  const diddy = useDiddy()
  const port = useMonkeyport()
  const camera = useCamera()
  const chunky = useChunky()
  return {
    in: inStage && slam && camera && diddy && port,
    out: inStage && slam && camera && chunky
  }
}

export const useTreeKasplat = (): boolean => {
  const tree = useCastleTree()
  const coconut = useCoconut()
  const hasSnide = useSnide()
  return tree && coconut && hasSnide
}

export const useMausoleumKasplat = (): LogicBool => {
  const inStage = usePlayCastle()
  const hasSnide = useSnide()
  const hasClimbing = useClimbing()
  return {
    in: useFtaDiddyBlueprint() && hasSnide && inStage && hasClimbing,
    out: useFtaDiddyBlueprint() && hasSnide && inStage
  }
}

export const usePathKasplat = (): boolean => {
  const inStage = usePlayCastle()
  const hasSnide = useSnide()
  return useFtaLankyBlueprint() && hasSnide && inStage
}

export const useLonelyKasplat = (): LogicBool => {
  const inStage = usePlayCastle()
  const hasSnide = useSnide()
  const hasClimbing = useClimbing()
  return {
    in: useFtaTinyBlueprint() && inStage && hasSnide && hasClimbing,
    out: useFtaTinyBlueprint() && inStage && hasSnide
  }
}

export const useDungeonKasplat = (): boolean => {
  const inStage = usePlayCastle()
  const hasSnide = useSnide()
  return useFtaChunkyBlueprint() && hasSnide && inStage
}

export const useCrate = (): LogicBool => {
  const inStage = usePlayCastle()
  const hasClimbing = useClimbing()
  return {
    in: useAnyKong() && inStage && hasClimbing,
    out: useAnyKong() && inStage
  }
}
