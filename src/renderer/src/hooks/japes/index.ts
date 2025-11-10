import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import { usePlayLevel, useSlamLevel } from '../isles'
import {
  useAnyGun,
  useAnyKong,
  useAnyMusic,
  useBlast,
  useBoulderTech,
  useCamera,
  useCharge,
  useChunky,
  useCoconut,
  useDiddy,
  useDk,
  useFeather,
  useFtaChunkyBanana,
  useFtaDiddyBanana,
  useFtaDiddyBlueprint,
  useFtaDkBlueprint,
  useFtaLankyBanana,
  useFtaLankyBlueprint,
  useFtaTinyBlueprint,
  useGrape,
  useHighGrab,
  useHunky,
  useLanky,
  useMini,
  usePeanut,
  usePineapple,
  useShockwave,
  useSlam,
  useStand,
  useTiny,
  useTrombone,
  useTwirl,
  useVine,
  useClimbing
} from '../kongs'
import { useBananaportAll } from '../settings'
import { LogicBool, logicBreak, useSwitchsanityGun } from '../world'

/**
 * Can we play in Jungle Japes?
 * @returns true if we can play in Jungle Japes.
 */
export const usePlayJapes = (): LogicBool => {
  const canEnter = usePlayLevel('Jungle Japes')
  return {
    in: canEnter.in,
    out: canEnter.out
  }
}

/**
 * Can we slam down switches in Jungle Japes?
 * @todo Handle both options of the progressive slam setting.
 * @returns true if we can slam switches in Jungle Japes.
 */
export const useSlamJapes = (): boolean => useSlamLevel('Jungle Japes')

export const useJapesKongGates = (): LogicBool => {
  const inStage = usePlayJapes()
  const [barriers, checks] = useDonkStore(
    useShallow((state) => [state.removeBarriers, state.checks])
  )

  return {
    in: inStage.in && (checks[1002] || barriers.japesCoconutGates),
    out: inStage.out && (checks[1002] || barriers.japesCoconutGates)
  }
}

/**
 * Can we open the Rambi cage with the correct gun?
 * @returns true if we can shoot the switch to use Rambi.
 */
const useJapesRambiSwitch = (): boolean => useSwitchsanityGun('japesRambi', 0)
/**
 * Do we have what we need to enter the side area with three checks?
 * @returns true if we can open the side area.
 */
const useJapesSideSwitch = (): boolean => useSwitchsanityGun('japesSide', 1)
/**
 * What do we need to access the Hive area when using a gun?
 *
 * Note that if all bananaports are active immediately, this check can be bypassed.
 * @returns true if we can access the Hive via gun.
 */
const useJapesHiveSwitch = (): boolean => useSwitchsanityGun('japesHive', 3)
/**
 * What do we need to enter the Painting Room?
 * @returns true if we can enter the Painting Room.
 */
const useJapesPaintingSwitch = (): boolean => useSwitchsanityGun('japesPainting', 1)

/**
 * Can we access the side area at the start of Japes with one free item and two gated bonus stages?
 * @returns true if we can access the side area at the start of Japes.
 */
export const useJapesSideArea = (): LogicBool => {
  const inStage = usePlayJapes()
  const canAccess = useJapesSideSwitch()
  return {
    in: inStage.in && canAccess,
    out: inStage.out && canAccess
  }
}

/**
 * Can we access the Rambi cage in Japes?
 * @returns true if we can access the Rambi cage in Japes.
 */
export const useJapesRambi = (): LogicBool => {
  const canPlay = useJapesKongGates()
  const rambiSwitch = useJapesRambiSwitch()
  return {
    in: rambiSwitch && canPlay.in,
    out: rambiSwitch && canPlay.out
  }
}

/**
 * Can Diddy access the mines?
 *
 * There is no switchsanity here: all checks are Diddy exclusive.
 * @returns true if Diddy can access the mines.
 */
export const useJapesMine = (): LogicBool => {
  const peanut = usePeanut()
  const canPlay = usePlayJapes()
  const hasClimbing = useClimbing()
  const hasBananaports = useBananaportAll()
  return {
    in: peanut && (hasClimbing || hasBananaports) && canPlay.in,
    out: peanut && canPlay.out
  }
}

/**
 * Can we access the hive area past the tunnel?
 * @returns true if we have access to the Hive area past the tunnel.
 */
export const useJapesHive = (): LogicBool => {
  const hiveSwitch = useJapesHiveSwitch()
  const canPlay = usePlayJapes()
  const coconutGates = useJapesKongGates()
  const japesMine = useJapesMine()
  const warpAll = useBananaportAll()
  const [hiveGateOpen, checks] = useDonkStore(useShallow((state) => [state.removeBarriers.japesHiveGate, state.checks]))
  return {
    in: canPlay.in && ((coconutGates.in && (hiveGateOpen || hiveSwitch)) || (japesMine.in && (warpAll || checks[1011]))),
    out: canPlay.out && ((coconutGates.out && (hiveGateOpen || hiveSwitch)) || (japesMine.out && (warpAll || checks[1011])))
  }
}

/**
 * Can we get on top of Painting Hill?
 * @returns true if we can get to the top of the hill.
 */
export const useJapesPaintingOutside = (): LogicBool => {
  const inStage = usePlayJapes()
  const stand = useStand()
  const twirl = useTwirl()
  const climbing = useClimbing()
  const dk = useDk()
  const tiny = useTiny()
  const chunky = useChunky()
  return {
    in: inStage.in && (stand || (climbing && twirl)),
    out: inStage.out && climbing && (dk || tiny || chunky)
  }
}

/**
 * Can we enter the painting room on top of the hill?
 * @returns true if we can enter the painting room on top of the hill.
 */
export const useJapesPainting = (): LogicBool => {
  const canPlay = useJapesPaintingOutside()
  const paintingSwitch = useJapesPaintingSwitch()
  return {
    in: canPlay.in && paintingSwitch,
    out: logicBreak(canPlay) && paintingSwitch
  }
}

/**
 * Can we access the underground via the power of Boulder Tech?
 * @returns true if we can access the underground.
 */
export const useJapesUnderground = (): LogicBool => {
  const slam = useSlam()
  const boulderTech = useBoulderTech()
  const inStage = usePlayJapes()
  return {
    in: inStage.in && boulderTech && slam,
    out: inStage.out && boulderTech && slam
  }
}

export const useChunkyBoulderGb = (): LogicBool => {
  const inStage = usePlayJapes()
  const boulderTech = useBoulderTech()
  return {
    in: inStage.in && boulderTech,
    out: inStage.out && boulderTech
  }
}

export const useChunkyCagedGb = (): LogicBool => {
  const boulderTech = useBoulderTech()
  const canSlam = useSlamJapes()
  const rambi = useJapesRambi()
  const climbing = useClimbing()
  const hasBananaports = useBananaportAll()
  return {
    in: rambi.in && boulderTech && canSlam && (climbing || hasBananaports),
    out: rambi.out && boulderTech && canSlam
  }
}

export const useChunkyHiveGb = (): LogicBool => {
  const hive = useJapesHive()
  const hunky = useHunky()
  const climbing = useClimbing()
  return {
    in: hive && hunky && climbing,
    out: hive && hunky
  }
}

export const useChunkyUndergroundGb = (): LogicBool => {
  const under = useJapesUnderground()
  const pineapple = usePineapple()
  const vine = useVine()
  const dk = useDk()
  const twirl = useTwirl()
  const tiny = useTiny()
  const diddy = useDiddy()
  return {
    in: under.in && pineapple && vine,
    out: useFtaChunkyBanana() && under.out && (dk || twirl || ((tiny || diddy) && vine))
  }
}

export const useChunkyKasplat = (): LogicBool => {
  const canGoUnderground = useChunkyUndergroundGb()
  return {
    in: canGoUnderground.in,
    out: canGoUnderground.out
  }
}

export const useDiddyCagedGb = (): LogicBool => {
  const rambi = useJapesRambi()
  const diddy = useDiddy()
  const canSlam = useSlamJapes()
  return {
    in: rambi.in && diddy && canSlam,
    out: rambi.out && diddy && canSlam
  }
}

export const useDiddyMountainGb = (): LogicBool => {
  const mine = useJapesMine()
  const canSlam = useSlamJapes()
  return {
    in: useFtaDiddyBanana() && mine.in && canSlam,
    out: useFtaDiddyBanana() && mine.out && canSlam
  }
}

export const useDiddyTunnelGb = (): LogicBool => {
  const side = useJapesSideArea()
  return {
    in: useFtaDiddyBanana() && side.in,
    out: useFtaDiddyBanana() && side.out
  }
}

export const useDiddyMinecartGb = (): LogicBool => {
  const mine = useJapesMine()
  const canSlam = useSlamJapes()
  const charge = useCharge()
  const highGrab = useHighGrab()
  return {
    in: mine.in && canSlam && charge,
    out: mine.out && highGrab
  }
}

/**
 * Can we grab the item in front of the Diddy Kong Cage?
 *
 * This location is likely not restricted to FTA.
 * @returns true if this item can be attained.
 */
export const useDkFreebieGb = (): LogicBool => {
  const inStage = usePlayJapes()
  const anyKong = useAnyKong()
  const hasClimbing = useClimbing()
  const hasBananaports = useBananaportAll()
  return {
    in: inStage.in && anyKong && (hasClimbing || hasBananaports),
    out: inStage.out && anyKong //The "shortcut" I'm thinking of is a small area next to the mine exit that Lanky can O-Stand up, but right now, I'm a little hesitant to actually put O-Stand here. ^^;
  }
}

const useFreeDiddySwitch = (): boolean => {
  const dk = useCoconut()
  const diddy = usePeanut()
  const lanky = useGrape()
  const tiny = useFeather()
  const chunky = usePineapple()
  const freeDiddy = useDonkStore(useShallow((state) => state.switchsanitySwitches.freeDiddy))
  switch (freeDiddy) {
    case 1:
      return dk
    case 2:
      return diddy
    case 3:
      return lanky
    case 4:
      return tiny
    case 5:
      return chunky
    default:
      return true
  }
}

export const useDkFreeDiddyGb = (): LogicBool => {
  const inStage = usePlayJapes()
  const canReach = useDkFreebieGb()
  const [gotFreebieGb] = useDonkStore(useShallow((state) => [state.checks]))
  const canShoot = useFreeDiddySwitch()
  return {
    in: inStage.in && canReach.in && gotFreebieGb[1001] && canShoot,
    out: inStage.out && canReach.out && gotFreebieGb[1001] && canShoot
  }
}

export const useDkCagedGb = (): LogicBool => {
  const rambi = useJapesRambi()
  const dk = useDk()
  const canSlam = useSlamJapes()
  return {
    in: rambi.in && dk && canSlam,
    out: rambi.out && dk && canSlam
  }
}

export const useDkBlastGb = (): LogicBool => {
  const inStage = usePlayJapes()
  const blast = useBlast()
  const vine = useVine()
  const climbing = useClimbing()
  return {
    in: inStage.in && blast && vine && climbing,
    out: inStage.out && blast && vine && climbing
  }
}

export const useLankyCagedGb = (): LogicBool => {
  const rambi = useJapesRambi()
  const lanky = useLanky()
  const canSlam = useSlamJapes()
  const hasClimbing = useClimbing()
  const hasBananaports = useBananaportAll()
  return {
    in: rambi.in && lanky && canSlam && (hasClimbing || hasBananaports),
    out: rambi.out && lanky && canSlam
  }
}

export const useLankyGateGb = (): LogicBool => {
  const side = useJapesSideArea()
  const grape = useGrape()
  return {
    in: side.in && grape,
    out: side.out && grape
  }
}

export const useLankySlopeGb = (): LogicBool => {
  const tunnel = useJapesKongGates()
  const stand = useStand()
  const anyKong = useAnyKong()
  return {
    in: tunnel.in && stand,
    out: useFtaLankyBanana() && tunnel.out && anyKong
  }
}

export const useLankyPaintingGb = (): LogicBool => {
  const painting = useJapesPainting()
  const grape = useGrape()
  const trombone = useTrombone()
  const lanky = useLanky()
  const slam = useSlam()
  const anyGun = useAnyGun()
  const anyMusic = useAnyMusic()
  return {
    in: lanky && slam && painting.in && (grape || trombone),
    out: lanky && slam && logicBreak(painting) && (anyGun || anyMusic)
  }
}

export const useTinyCagedGb = (): LogicBool => {
  const rambi = useJapesRambi()
  const tiny = useTiny()
  const canSlam = useSlamJapes()
  return {
    in: rambi.in && tiny && canSlam,
    out: rambi.out && tiny && canSlam
  }
}

export const useTinyGateGb = (): LogicBool => {
  const side = useJapesSideArea()
  const feather = useFeather()
  return {
    in: side.in && feather,
    out: side.out && feather
  }
}

export const useTinyStumpGb = (): boolean => {
  const hive = useJapesHive()
  const mini = useMini()
  return hive && mini
}

export const useTinyHiveGb = (): boolean => {
  const hive = useTinyStumpGb()
  const canSlam = useSlamJapes()
  return hive && canSlam
}

export const useGeneralThing = (): LogicBool => {
  const anyKong = useAnyKong()
  const canPlay = usePlayJapes()
  return {
    in: canPlay.in && anyKong,
    out: canPlay.out && anyKong
  }
}

export const useRambiCrate = (): LogicBool => {
  const anyKong = useAnyKong()
  const hasRambi = useJapesRambi()
  return {
    in: hasRambi.in && anyKong,
    out: hasRambi.out && anyKong
  }
}

export const usePaintingDirt = (): LogicBool => {
  const japesPaintingOutside = useJapesPaintingOutside()
  const shockwave = useShockwave()
  return {
    in: shockwave && japesPaintingOutside.in,
    out: shockwave && japesPaintingOutside.out
  }
}

export const useGeneralDirt = (): LogicBool => {
  const shockwave = useShockwave()
  const inStage = usePlayJapes()
  return {
    in: inStage.in && shockwave,
    out: inStage.out && shockwave
  }
}

export const useRambiFairy = (): LogicBool => {
  const camera = useCamera()
  const japesRambi = useJapesRambi()
  return {
    in: japesRambi.in && camera,
    out: japesRambi.out && camera
  }
}

export const usePaintingFairy = (): LogicBool => {
  const camera = useCamera()
  const banana = useLankyPaintingGb()
  return {
    in: camera && banana.in,
    out: camera && banana.out
  }
}

export const useGeneralFairy = (): LogicBool => {
  const camera = useCamera()
  const canPlay = usePlayJapes()
  return {
    in: canPlay.in && camera,
    out: canPlay.out && camera
  }
}

export const useGateKasplat = (): LogicBool => {
  const kongGates = useJapesKongGates()
  const anyKong = useAnyKong()
  return {
    in: kongGates.in && anyKong,
    out: kongGates.out && anyKong
  }
}

export const useDkKasplat = (): LogicBool => {
  const gate = useGateKasplat()
  const ftaBP = useFtaDkBlueprint()
  return {
    in: ftaBP && gate.in,
    out: ftaBP && gate.out
  }
}

export const useDiddyKasplat = (): LogicBool => {
  const gate = useGateKasplat()
  const ftaBP = useFtaDiddyBlueprint()
  return {
    in: ftaBP && gate.in,
    out: ftaBP && gate.out
  }
}

export const useLankyKasplat = (): LogicBool => {
  const gate = useGateKasplat()
  const ftaBP = useFtaLankyBlueprint()
  return {
    in: ftaBP && gate.in,
    out: ftaBP && gate.out
  }
}

export const useTinyKasplat = (): LogicBool => {
  const gate = useGateKasplat()
  const ftaBP = useFtaTinyBlueprint()
  return {
    in: ftaBP && gate.in,
    out: ftaBP && gate.out
  }
}

export const useMtnCrate = (): LogicBool => {
  const canEnterLevel = usePlayJapes()
  const hasClimbing = useClimbing()
  const hasBananaports = useBananaportAll()
  return {
    in: canEnterLevel.in && (hasClimbing || hasBananaports),
    out: canEnterLevel.out
  }
}
