import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import { useFastArcade } from '../fast-checks'
import { usePlayLevel, useSlamLevel } from '../isles'
import {
  useAnyKong,
  useBalloon,
  useBlast,
  useCamera,
  useCharge,
  useChunky,
  useCoconut,
  useDiddy,
  useDk,
  useFeather,
  useFtaChunkyBlueprint,
  useFtaDiddyBanana,
  useFtaDiddyBlueprint,
  useFtaDkBanana,
  useFtaDkBlueprint,
  useFtaLankyBanana,
  useFtaLankyBlueprint,
  useFtaTinyBanana,
  useFtaTinyBlueprint,
  useGrab,
  useGuitar,
  useHighGrab,
  useHunky,
  useLanky,
  useMini,
  usePunch,
  useShockwave,
  useSlam,
  useSpring,
  useStand,
  useStrong,
  useTiny,
  useTriangle,
  useTrombone,
  useTwirl,
  useVine,
  useClimbing
} from '../kongs'
import { useAutoBonus, useBananaportAll } from '../settings'
import { LogicBool, logicBreak } from '../world'

/**
 * Can we play in Frantic Factory?
 * @returns true if we can play in Frantic Factory.
 */
export const usePlayFactory = (): LogicBool => {
  const canEnter = usePlayLevel('Frantic Factory')
  return {
    in: canEnter.in,
    out: canEnter.out
  }
}

/**
 * Can we slam down switches in Frantic Factory?
 * @todo Handle both options of the progressive slam setting.
 * @returns true if we can slam switches in Frantic Factory.
 */
export const useSlamFactory = (): boolean => useSlamLevel('Frantic Factory')

/**
 * Can we access the Testing Area in Factory?
 * @returns true if we can enter the Testing Area in Factory.
 */
export const useFactoryTesting = (): LogicBool => {
  const inStage = usePlayFactory()
  const slam = useSlam()
  const [removeBarriers] = useDonkStore(useShallow((state) => [state.removeBarriers]))
  const hasClimbing = useClimbing()
  const hasBananaport = useBananaportAll()
  return {
    in: inStage.in && (((removeBarriers.factoryTesting || slam) && hasClimbing) || hasBananaport),
    out: inStage.out && (((removeBarriers.factoryTesting || slam) && hasClimbing) || hasBananaport)
  }
}

/**
 * Can we get on the top platform where the power hut resides in Factory?
 * @returns true if we can get on the platform with the power hut.
 */
export const useFactoryHut = (): LogicBool => {
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()
  const diddy = useDiddy()
  const tiny = useTiny()
  return {
    in: testing,
    out: inStage.out && (diddy || tiny)
  }
}

/**
 * Is the Production Room turned on in Factory?
 * @returns true if the Production Room is on.
 */
export const useFactoryProductionEnabled = (): LogicBool => {
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()
  const coconut = useCoconut()
  const grab = useGrab()
  const [removeBarriers] = useDonkStore(useShallow((state) => [state.removeBarriers]))
  return {
    in: inStage.in && (removeBarriers.factoryProduction || (coconut && grab && testing)),
    out: inStage.out && (removeBarriers.factoryProduction || (coconut && grab && testing))
  }
}

/**
 * Can we reach the upper warp pad in the Production Room in Factory?
 * @returns true if we can reach the upper warp pad in the Production Room.
 */
export const useFactoryProductionTop = (): LogicBool => {
  const inStage = usePlayFactory()
  const factoryOn = useFactoryProductionEnabled()
  const climbing = useClimbing()
  const warpAll = useBananaportAll()
  return {
    in: (factoryOn && climbing) || (inStage.in && warpAll),
    out: (factoryOn && climbing) || (inStage.out && warpAll)
  }
}

export const useChunkyKaijuGb = (): LogicBool => {
  const testing = useFactoryTesting()
  const climbing = useClimbing()
  const highGrab = useHighGrab()
  const punch = usePunch()
  const triangle = useTriangle()
  const hunky = useHunky()
  return {
    in: testing && climbing && punch && triangle && hunky,
    out: testing && highGrab && punch && triangle && hunky
  }
}

export const useChunkyArcadeGb = (): LogicBool => {
  const inStage = usePlayFactory()
  const hasClimbing = useClimbing()
  const hasBananaport = useBananaportAll()
  const punch = usePunch()
  return {
    in: inStage.in && (hasClimbing || hasBananaport) && punch,
    out: inStage.out && (hasClimbing || hasBananaport) && punch
  }
}

export const useChunkyDarkGb = (): LogicBool => {
  const inStage = usePlayFactory()
  const hasPunch = usePunch()
  const canSlam = useSlamFactory()
  return {
    in: inStage.in && hasPunch && canSlam,
    out: inStage.out && hasPunch && canSlam
  }
}

export const useChunkyProductionGb = (): boolean => {
  const production = useFactoryProductionEnabled()
  const chunky = useChunky()
  const canSlam = useSlamFactory()
  return production && chunky && canSlam
}

export const useDiddyBlockGb = (): LogicBool => {
  const testing = useFactoryTesting()
  const spring = useSpring()
  const highGrab = useHighGrab()
  return {
    in: testing && spring,
    out: useFtaDiddyBanana() && testing && highGrab
  }
}

export const useDiddyEnemyGb = (): boolean => {
  const testing = useFactoryTesting()
  const guitar = useGuitar()
  const charge = useCharge()
  return testing && guitar && charge
}

export const useDiddyStorageGb = (): LogicBool => {
  const hut = useFactoryHut()
  const canSlam = useSlamFactory()
  const diddy = useDiddy()
  const autoBonus = useAutoBonus()
  const vine = useVine()
  const dk = useDk()
  const chunky = useChunky()
  const twirl = useTwirl()
  return {
    in: hut.in && canSlam && diddy && (autoBonus || vine),
    out: logicBreak(hut) && canSlam && diddy && (autoBonus || vine || dk || chunky || twirl)
  }
}

export const useDiddyProductionGb = (): LogicBool => {
  const production = useFactoryProductionEnabled()
  const canSlam = useSlamFactory()
  const diddy = useDiddy()
  const spring = useSpring()
  const highGrab = useHighGrab()
  const tinyProd = useTinyProductionGb()
  return {
    in: production && canSlam && diddy && spring,
    out: production && canSlam && diddy && (logicBreak(tinyProd) || highGrab)
  }
}

export const useDkNumberGb = (): boolean => {
  const testing = useFactoryTesting()
  const dk = useDk()
  const canSlam = useSlamFactory()
  return testing && dk && canSlam
}

export const useDkHutGb = (): LogicBool => {
  const hut = useFactoryHut()
  const coconut = useCoconut()
  const grab = useGrab()
  const productionPower = useDonkStore(
    useShallow((state) => state.removeBarriers.factoryProduction)
  )
  return {
    in: hut.in && coconut && (productionPower || grab),
    out: hut.out && coconut && (productionPower || grab)
  }
}

/**
 * Can we go through the blast course and either get the banana immediately, or play DK Arcade later?
 *
 * This is one of the few things Fast Checks can affect.
 * @returns true if we can access the Blast associated GB.
 */
export const useDkBlastGb = (): LogicBool => {
  const inStage = usePlayFactory()
  const blast = useBlast()
  const fastArcade = useFastArcade()
  const grab = useGrab()
  const hasClimbing = useClimbing()
  const hasBananaport = useBananaportAll()
  return {
    in: inStage.in && blast && (fastArcade || ((hasClimbing || hasBananaport) && grab)),
    out: inStage.out && blast && (fastArcade || ((hasClimbing || hasBananaport) && grab))
  }
}

export const useDkCoin = (): boolean => {
  const blast = useDkBlastGb()
  const grab = useGrab()
  const climbing = useClimbing()
  const warps = useBananaportAll()
  return blast && (climbing || warps) && grab
}

export const useDkProdGb = (): LogicBool => {
  const production = useFactoryProductionEnabled()
  const strong = useStrong()
  const dk = useDk()
  const diddy = useDiddy()
  return {
    in: production && strong,
    out: useFtaDkBanana() && production && (dk || diddy)
  }
}

export const useLankyTestingGb = (): LogicBool => {
  const testing = useFactoryTesting()
  const balloon = useBalloon()
  const anyKong = useAnyKong()
  return {
    in: testing && balloon,
    out: useFtaLankyBanana() && testing && anyKong
  }
}

export const useLankyPianoGb = (): boolean => {
  const testing = useFactoryTesting()
  const canSlam = useSlamFactory()
  const trombone = useTrombone()
  return testing && canSlam && trombone
}

const useFreeChunkySwitch = (): LogicBool => {
  const slam = useSlamFactory()
  const dk = useDk()
  const diddy = useDiddy()
  const lanky = useLanky()
  const hasOStand = useStand()
  const tiny = useTiny()
  const chunky = useChunky()
  const freeChunky = useDonkStore(useShallow((state) => state.switchsanitySwitches.freeChunky))
  switch (freeChunky) {
    case 1:
      return {
        in: dk && slam,
        out: dk && slam
      }
    case 2:
      return {
        in: diddy && slam,
        out: diddy && slam
      }
    case 3:
      return {
        in: hasOStand && slam,
        out: lanky && slam
      }
    case 4:
      return {
        in: tiny && slam,
        out: tiny && slam
      }
    case 5:
      return {
        in: chunky && slam,
        out: chunky && slam
      }
    default:
      return {
      in: true,
      out: true
      }
  }
}

export const useLankyFreeChunkyGb = (): LogicBool => {
  const inStage = usePlayFactory()
  const canHitSwitch = useFreeChunkySwitch()
  return {
    in: canHitSwitch.in && inStage.in,
    out: canHitSwitch.out && inStage.out
  }
}

export const useLankyProductionGb = (): LogicBool => {
  const production = useFactoryProductionEnabled()
  const canSlam = useSlamFactory()
  const hasLanky = useLanky()
  const stand = useStand()
  const tiny = useTiny()
  return {
    in: production && canSlam && hasLanky && stand,
    out: useFtaLankyBanana() && production && canSlam && hasLanky && (stand || tiny)
  }
}

export const useTinyRaceGb = (): boolean => {
  const testing = useFactoryTesting()
  const mini = useMini()
  return testing && mini
}

export const useTinyDartGb = (): boolean => {
  const car = useTinyRaceGb()
  const feather = useFeather()
  const canSlam = useSlamFactory()
  return car && feather && canSlam
}

export const useTinyArcadeGb = (): LogicBool => {
  const inStage = usePlayFactory()
  const mini = useMini()
  const climbing = useClimbing()
  const hasBananaport = useBananaportAll()
  return {
    in: inStage.in && (climbing || hasBananaport) && mini,
    out: inStage.out && (climbing || hasBananaport) && mini
  }
}

export const useTinyProductionGb = (): LogicBool => {
  const production = useFactoryProductionEnabled()
  const canSlam = useSlamFactory()
  const twirl = useTwirl()
  const dk = useDk()
  return {
    in: production && canSlam && twirl,
    out: useFtaTinyBanana() && production && canSlam && (twirl || dk)
  }
}

export const useGeneralThing = (): LogicBool => {
  const inStage = usePlayFactory()
  const anyKong = useAnyKong()
  return {
    in: inStage.in && anyKong,
    out: inStage.out && anyKong
  }
}

export const useArena = (): boolean => {
  const inStage = useFactoryTesting()
  const grab = useGrab()
  return inStage && grab
}

export const useGeneralTest = (): boolean => {
  const inStage = useFactoryTesting()
  const anyKong = useAnyKong()
  return inStage && anyKong
}

export const useGeneralDirt = (): boolean => {
  const thing = useGeneralThing()
  const dirt = useShockwave()
  return thing && dirt
}

export const useFactoryDirt = (): LogicBool => {
  const inStage = usePlayFactory()
  const shockwave = useShockwave()
  const punch = usePunch()
  return {
    in: inStage.in && punch && shockwave,
    out: inStage.out && punch && shockwave
  }
}

export const useGeneralFairy = (): boolean => {
  const thing = useGeneralThing()
  const camera = useCamera()
  return thing && camera
}

export const useNumberFairy = (): boolean => {
  const testing = useFactoryTesting()
  const camera = useCamera()
  return testing && camera
}

export const useDartFairy = (): boolean => {
  const banana = useTinyDartGb()
  const camera = useCamera()
  return banana && camera
}

export const useProductionTopKasplat = (): boolean => {
  const production = useFactoryProductionEnabled()
  return useFtaDkBlueprint() && production
}

export const useProductionBaseKasplat = (): LogicBool => {
  const inStage = usePlayFactory()
  return {
    in: useFtaDiddyBlueprint() && inStage.in,
    out: useFtaDiddyBlueprint() && inStage.out
  }
}

export const useResearchKasplat = (): LogicBool => {
  const inStage = usePlayFactory()
  const canReachTesting = useFactoryTesting()
  return {
    in: useFtaLankyBlueprint() && inStage.in && canReachTesting,
    out: useFtaLankyBlueprint() && inStage.out && canReachTesting
  }
}

export const useStorageKasplat = (): LogicBool => {
  const inStage = usePlayFactory()
  return {
    in: useFtaTinyBlueprint() && inStage.in,
    out: useFtaTinyBlueprint() && inStage.out
  }
}

export const useBlockKasplat = (): LogicBool => {
  const inStage = usePlayFactory()
  const canReachTesting = useFactoryTesting()
  return {
    in: useFtaChunkyBlueprint() && inStage.in && canReachTesting,
    out: useFtaChunkyBlueprint() && inStage.out && canReachTesting
  }
}
