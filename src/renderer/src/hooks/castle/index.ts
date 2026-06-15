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
  useHighGrab
} from '../kongs'
import { useHardShooting } from '../settings'
import { LogicBool } from '../world'

/**
 * Can we play in Creepy Castle?
 * @returns true if we can play in Creepy Castle.
 */
export const usePlayCastle = (): LogicBool => {
  const canEnter = usePlayLevel('Creepy Castle')
  const canGetUp = useReachCastleFromCrypt()
  return {
    in: canEnter.in && canGetUp.in,
    out: canEnter.out && canGetUp.out
  }
}
/**
 * Can we slam down switches in Creepy Castle?
 * @todo Handle both options of the progressive slam setting.
 * @returns true if we can slam switches in Creepy Castle.
 */
export const useSlamCastle = (): boolean => useSlamLevel('Creepy Castle')

/*Alex addition: shuffled DK Portals*/
//Is the DK Portal in the big tree?
export const useTreePortal = (): boolean =>
  useDonkStore(useShallow((state) => state.shuffledCastlePortals.treePortal))
//Is the DK Portal behind Chunky's room in the big tree?
export const useTreeChunkyPortal = (): boolean =>
  useDonkStore(useShallow((state) => state.shuffledCastlePortals.treeChunkyPortal))
//Is the DK Portal in DK's Crypt room?
export const useDKCryptPortal = (): boolean =>
  useDonkStore(useShallow((state) => state.shuffledCastlePortals.DKCryptPortal))
//Is the DK Portal in Chunky's Crypt room?
export const useChunkyCryptPortal = (): boolean =>
  useDonkStore(useShallow((state) => state.shuffledCastlePortals.chunkyCryptPortal))
//Is the DK Portal in the Mausoleum?
export const useMausoleumPortal = (): boolean =>
  useDonkStore(useShallow((state) => state.shuffledCastlePortals.mausoleumPortal))
//Is the DK Portal in the Ballroom?
export const useBallroomPortal = (): boolean =>
  useDonkStore(useShallow((state) => state.shuffledCastlePortals.ballroomPortal))
//Is the DK Portal in the back portion of the Library, normally locked by an enemy gauntlet and a Slam?
export const useLibraryBackPortal = (): boolean =>
  useDonkStore(useShallow((state) => state.shuffledCastlePortals.libraryBackPortal))
//Is the DK Portal in Lanky's Wind Tunnel room?
export const useWindTunnelPortal = (): boolean =>
  useDonkStore(useShallow((state) => state.shuffledCastlePortals.windTunnelPortal))
/*end shuffled DK Portals*/

/*An Alex addition: If shuffled DK Portals is on, and we're given a Portal in the Crypt, or outside on the lowest level of Castle, can we get up so that we can play the rest of the level? You'd be surprised, for me, how often the answer is "no", hence that warning in big red text that appears whenever you click on the Castle tab.*/
export const useReachCastleFromCrypt = (): LogicBool => {
  const DKCrypt = useDKCryptPortal()
  const chunkyCrypt = useChunkyCryptPortal()
  const mausoleum = useMausoleumPortal()
  const DKPortal = DKCrypt || chunkyCrypt || mausoleum
  const hasClimbing = useClimbing()
  const highGrab = useHighGrab()
  if (DKPortal) {
    return {
      in: hasClimbing,
      out: highGrab //To reach the rest of Castle from the Crypt without Climbing, you have to jump on the tombstones (which is fucking annoying) and abuse high grabs. Killing your Kong or pause-exiting only work if you have a Portal above the Crypt (i.e. the vanilla one).
    }
  } else {
    return {
      in: true,
      out: true //Do nothing if you don't have a DK Portal in the Crypt.
    }
  }
}

/**
 * Can we enter the Tree in Castle?
 * @returns true if we can enter the Tree in Castle.
 */
export const useCastleTree = (): LogicBool => {
  const inStage = usePlayCastle()
  const blast = useBlast()
  const DKPortal = useTreePortal()
  return {
    in: inStage.in && (blast || DKPortal),
    out: inStage.out && (blast || DKPortal)
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
  const DKPortal2 = useTreeChunkyPortal()
  return {
    in: ((tree.in && punch) || DKPortal2) && pineapple && (sniper || hardShooting),
    out: ((tree.out && punch) || DKPortal2) && pineapple
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
  const DKPortal = useChunkyCryptPortal()
  return {
    in: inStage.in && (pineapple || preOpened || DKPortal) && punch && hasClimbing,
    out: inStage.out && (pineapple || preOpened || DKPortal) && punch
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

export const useDiddyRoomGb = (): LogicBool => {
  const isInLevel = usePlayCastle()
  const hasDiddy = useDiddy()
  const canSlam = useSlamCastle()
  const hasJetbarrel = useRocket()
  const DKPortal = useBallroomPortal()
  return {
    in: isInLevel.in && ((hasDiddy && canSlam) || DKPortal) && hasJetbarrel,
    out: isInLevel.out && ((hasDiddy && canSlam) || DKPortal) && hasJetbarrel
  }
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

export const useDkTreeGb = (): LogicBool => {
  const canEnterTree = useCastleTree()
  const coconut = useCoconut()
  const sniper = useSniper()
  const DKPortal2 = useTreeChunkyPortal()
  return {
    in: (canEnterTree.in || DKPortal2) && coconut && sniper,
    out: (canEnterTree.out || DKPortal2) && coconut //You're supposed to be able to do this check without Sniper. I've had no such luck, but I'll keep it in here just in case. =_=;
    }
}

export const useDkRoomGb = (): LogicBool => {
  const inStage = usePlayCastle()
  const slam = useSlamCastle()
  const dk = useDk()
  const strong = useStrong()
  const DKPortal = useLibraryBackPortal()
  return {
    in: ((inStage.in && slam) || DKPortal) && strong,
    out: ((inStage.out && slam) || DKPortal) && dk //Why DK? Because, assuming this is indeed the library GB, getting hit by the books triggers the "getting up" animation, same as if you'd been hit by a Klobber, and DK has none. The other Kongs get absolutely combo'd and rekt by the books! xD
  }
}

export const useDkCryptGb = (): LogicBool => {
  const coconut = useCoconut()
  const cryptPreOpened = useOpenCrypt()
  const grab = useGrab()
  const hasClimbing = useClimbing()
  const canEnter = usePlayCastle()
  const DKPortal = useDKCryptPortal()
  return {
    in: canEnter.in && (coconut || cryptPreOpened || DKPortal) && grab && hasClimbing,
    out: canEnter.out && (coconut || cryptPreOpened || DKPortal) && grab
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
  const DKPortal = useWindTunnelPortal()
  return {
    in: inStage.in && (slam || DKPortal) && grape && balloon && sniper,
    out: inStage.out && (slam || DKPortal) && grape && balloon && homing
  }
}

/*The O-Stand Sprint barrel here is a total red herring. You can easily do it without.*/
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
  const didGreenhouseBanana = useDonkStore(useShallow((state) => state.checks))
  return didGreenhouseBanana[7021]
}

export const useLankyMausoleumGb = (): LogicBool => {
  const inStage = usePlayCastle()
  const feather = useFeather()
  const grape = useGrape()
  const preOpened = useOpenCrypt()
  const sprint = useSprint()
  const vine = useVine()
  const trombone = useTrombone()
  const dk = useDk()
  const diddy = useDiddy()
  const hasClimbing = useClimbing()
  const DKPortal = useMausoleumPortal()
  return {
    in: inStage.in && (feather || grape || preOpened || DKPortal) && grape && sprint && vine && trombone && hasClimbing,
    out: inStage.out && (feather || grape || preOpened || DKPortal) && grape && (sprint || dk || diddy)
  }
}

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
  const DKPortal = useBallroomPortal()
  return {
    in: inStage.in && ((diddy && canSlam) || DKPortal) && port && mini,
    out: inStage.out && ((diddy && canSlam) || DKPortal) && port && mini
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
  const DKPortal = useMausoleumPortal()
  return {
    in: inStage.in && (feather || grape || preOpened || DKPortal) && canSlam && twirl && hasClimbing,
    out: inStage.out && (feather || grape || preOpened || DKPortal) && canSlam && (dk || twirl)
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

export const useTreeFairy = (): LogicBool => {
  const tree = useTreeKasplat()
  const camera = useCamera()
  const waterIsLava = useDonkStore(useShallow((state) => state.settings.waterIsLava))
  return {
    in: tree.in && camera && !waterIsLava,
    out: tree.out && camera
  }
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

export const useTreeKasplat = (): LogicBool => {
  const tree = useCastleTree()
  const coconut = useCoconut()
  const DKPortal2 = useTreeChunkyPortal()
  return {
    in: (tree.in || DKPortal2) && coconut,
    out: (tree.out || DKPortal2) && coconut
  }
}

export const useMausoleumKasplat = (): LogicBool => {
  const inStage = usePlayCastle()
  const hasClimbing = useClimbing()
  return {
    in: inStage.in && hasClimbing,
    out: inStage.out
  }
}

export const usePathKasplat = (): LogicBool => {
  const inStage = usePlayCastle()
  return {
    in: inStage.in,
    out: inStage.out
  }
}

export const useLonelyKasplat = (): LogicBool => {
  const inStage = usePlayCastle()
  const hasClimbing = useClimbing()
  return {
    in: inStage.in && hasClimbing,
    out: inStage.out
  }
}

export const useDungeonKasplat = (): LogicBool => {
  const inStage = usePlayCastle()
  return {
    in: inStage.in,
    out: inStage.out
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
