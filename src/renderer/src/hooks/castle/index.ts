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
  useClimbing
} from '../kongs'
import { useHardShooting } from '../settings'
import { LogicBool } from '../world'

/**
 * Can we play in Creepy Castle?
 * @returns true if we can play in Creepy Castle.
 */
export const usePlayCastle = (): LogicBool => {
  const canEnter = usePlayLevel('Creepy Castle')
  return {
    in: canEnter.in,
    out: canEnter.out
  }
}
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
export const useCastleTree = (): LogicBool => {
  const inStage = usePlayCastle()
  const blast = useBlast()
  return {
    in: inStage.in && blast,
    out: inStage.out && blast
  }
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
    in: inStage.in && punch && (triangle || (gone && pineapple)),
    out: inStage.out && punch && (anyMusic || hasAGun)
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

export const useChunkyRoomGb = (): LogicBool => {
  const inStage = usePlayCastle()
  const slam = useSlamCastle()
  const boulder = useBoulderTech()
  const punch = usePunch()
  return {
    in: inStage.in && slam && boulder && punch,
    out: inStage.out && slam && boulder && punch
  }
}

export const useChunkyCryptGb = (): LogicBool => {
  const inStage = usePlayCastle()
  const pineapple = usePineapple()
  const punch = usePunch()
  const preOpened = useOpenCrypt()
  const hasClimbing = useClimbing()
  return {
    in: inStage.in && (pineapple || preOpened) && punch && hasClimbing,
    out: inStage.out && (pineapple || preOpened) && punch
  }
}

export const useDiddyTopGb = (): LogicBool => {
  const rocket = useRocket()
  const canEnter = usePlayCastle()
  return {
    in: canEnter.in && rocket,
    out: canEnter.out && rocket
  }
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
  const canEnter = usePlayCastle()
  return {
    in: canEnter.in && (peanut || cryptPreOpened) && charge && hasClimbing,
    out: canEnter.out && (peanut || cryptPreOpened) && charge
  }
}

export const useDiddyDungeonGb = (): LogicBool => {
  const canSlam = useSlamCastle()
  const peanut = usePeanut()
  const sniper = useSniper()
  const vine = useVine()
  const canEnter = usePlayCastle()
  return {
    in: canEnter.in && canSlam && peanut && sniper && vine,
    out: canEnter.out && canSlam && peanut && sniper && vine
  }
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
    in: inStage.in && slam && strong,
    out: inStage.out && slam && dk //Why DK? Because, assuming this is indeed the library GB, getting hit by the books triggers the "getting up" animation, same as if you'd been hit by a Klobber, and DK has none. The other Kongs get absolutely combo'd and rekt by the books! xD
  }
}

export const useDkCryptGb = (): LogicBool => {
  const coconut = useCoconut()
  const cryptPreOpened = useOpenCrypt()
  const grab = useGrab()
  const hasClimbing = useClimbing()
  const canEnter = usePlayCastle()
  return {
    in: canEnter.in && (coconut || cryptPreOpened) && grab && hasClimbing,
    out: canEnter.out && (coconut || cryptPreOpened) && grab
  }
}

export const useDkDungeonGb = (): LogicBool => {
  const dk = useDk()
  const slam = useSlamCastle()
  const canEnter = usePlayCastle()
  return {
    in: canEnter.in && dk && slam,
    out: canEnter.out && dk && slam
  }
}

export const useLankyRoomGb = (): LogicBool => {
  const inStage = usePlayCastle()
  const slam = useSlamCastle()
  const grape = useGrape()
  const balloon = useBalloon()
  const sniper = useSniper()
  const homing = useHoming()
  return {
    in: inStage.in && slam && grape && balloon && sniper,
    out: inStage.out && slam && grape && balloon && homing
  }
}

/*The O-Stand Sprint barrel here is a total red herring. You can do it without.*/
export const useLankyGreenhouseGb = (): LogicBool => {
  const lanky = useLanky()
  const slam = useSlamCastle()
  const canEnter = usePlayCastle()
  return {
    in: canEnter.in && lanky && slam,
    out: canEnter.out && lanky && slam
  }
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
    in: inStage.in && (grape || preOpened) && sprint && vine && trombone && hasClimbing,
    out: inStage.out && (grape || preOpened) && (sprint || dk || diddy)
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
    in: inStage.in && canSlam && trombone && balloon,
    out: inStage.out && canSlam && trombone && twirl
  }
}

export const useTinyRoomGb = (): LogicBool => {
  const inStage = usePlayCastle()
  const diddy = useDiddy()
  const canSlam = useSlamCastle()
  const port = useMonkeyport()
  const mini = useMini()
  return {
    in: inStage.in && diddy && canSlam && port && mini,
    out: inStage.out && diddy && canSlam && port && mini
  }
}

export const useTinyTrashGb = (): LogicBool => {
  const inStage = usePlayCastle()
  const mini = useMini()
  const sax = useAnyMusic()
  const homing = useHoming()
  const hardShooting = useHardShooting()
  const anyGun = useAnyGun()
  return {
    in: inStage.in && mini && (sax || (anyGun && (homing || hardShooting))),
    out: inStage.out && mini && (sax || anyGun)
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
    in: inStage.in && (feather || grape || preOpened) && canSlam && twirl && hasClimbing,
    out: useFtaTinyBanana() && inStage.out && (feather || grape || preOpened) && canSlam && (dk || twirl)
  }
}

export const useTinyChasmGb = (): LogicBool => {
  const twirl = useTwirl()
  const canEnter= usePlayCastle()
  return {
    in: canEnter.in && twirl,
    out: canEnter.out && twirl
  }
}

export const useGeneralThing = (): LogicBool => {
  const inStage = usePlayCastle()
  return {
    in: useAnyKong() && inStage.in,
    out: useAnyKong() && inStage.out
  }
}

export const useGeneralDirt = (): LogicBool => {
  const inStage = useGeneralThing()
  const hasShockwave = useShockwave()
  return {
    in: hasShockwave && inStage.in,
    out: hasShockwave && inStage.out
  }
}

export const useGeneralFairy = (): LogicBool => {
  const inStage = useGeneralThing()
  const hasCam = useCamera()
  return {
    in: hasCam && inStage.in,
    out: hasCam && inStage.out
  }
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
    in: inStage.in && slam && camera && diddy && port,
    out: inStage.out && slam && camera && chunky
  }
}

export const useTreeKasplat = (): boolean => {
  const tree = useCastleTree()
  const coconut = useCoconut()
  return tree && coconut
}

export const useMausoleumKasplat = (): LogicBool => {
  const inStage = usePlayCastle()
  const hasClimbing = useClimbing()
  return {
    in: useFtaDiddyBlueprint() && inStage.in && hasClimbing,
    out: useFtaDiddyBlueprint() && inStage.out
  }
}

export const usePathKasplat = (): LogicBool => {
  const inStage = usePlayCastle()
  return {
    in: useFtaLankyBlueprint() && inStage.in,
    out: useFtaLankyBlueprint() && inStage.out
  }
}

export const useLonelyKasplat = (): LogicBool => {
  const inStage = usePlayCastle()
  const hasClimbing = useClimbing()
  return {
    in: useFtaTinyBlueprint() && inStage.in && hasClimbing,
    out: useFtaTinyBlueprint() && inStage.out
  }
}

export const useDungeonKasplat = (): LogicBool => {
  const inStage = usePlayCastle()
  return {
    in: useFtaChunkyBlueprint() && inStage.in,
    out: useFtaChunkyBlueprint() && inStage.out
  }
}

export const useCrate = (): LogicBool => {
  const inStage = usePlayCastle()
  const hasClimbing = useClimbing()
  return {
    in: useAnyKong() && inStage.in && hasClimbing,
    out: useAnyKong() && inStage.out
  }
}
