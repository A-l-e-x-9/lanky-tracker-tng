import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import { useBean } from '../consumables'
import { usePlayLevel, useSlamLevel } from '../isles'
import {
  useAllGun,
  useAnyGun,
  useAnyKong,
  useBlast,
  useBoulderTech,
  useCamera,
  useCharge,
  useChunky,
  useDiddy,
  useDk,
  useFtaChunkyBlueprint,
  useFtaDiddyBanana,
  useFtaDiddyBlueprint,
  useFtaDkBlueprint,
  useFtaLankyBlueprint,
  useFtaTinyBanana,
  useFtaTinyBlueprint,
  useGrab,
  useGuitar,
  useHighGrab,
  useHoming,
  useHunky,
  useLanky,
  useMini,
  useOrange,
  usePineapple,
  usePunch,
  useRocket,
  useSax,
  useShockwave,
  useSlam,
  useSpring,
  useSprint,
  useStand,
  useStrong,
  useTiny,
  useTriangle,
  useTrombone,
  useVine,
  useClimbing,
  useBalloon,
  useBarrel
} from '../kongs'
import { useBananaportAll, useForestTime, useHardShooting, useAutoBonus } from '../settings'
import { LogicBool, logicBreak, useSwitchsanityGun } from '../world'

/**
 * Can we play in Fungi Forest?
 * @returns true if we can play in Fungi Forest.
 */
export const usePlayForest = (): boolean => usePlayLevel('Fungi Forest')

/**
 * Can we slam down switches in Fungi Forest?
 * @todo Handle both options of the progressive slam setting.
 * @returns true if we can slam switches in Fungi Forest.
 */
export const useSlamForest = (): boolean => useSlamLevel('Fungi Forest')

/**
 * Do we have access to Fungi Forest during the daytime?
 * @returns true if we do.
 */
export const useForestDay = (): LogicBool => {
  const inStage = usePlayForest()
  const anyGun = useAnyGun()
  const orange = useOrange()
  const forestTime = useForestTime()
  if (forestTime != 1) {
    return {
      in: inStage,
      out: inStage
    }
  }
  return {
    in: inStage && anyGun,
    out: inStage && orange
  }
}

/**
 * Do we have access to Fungi Forest during the nighttime?
 * @returns true if we do.
 */
export const useForestNight = (): LogicBool => {
  const anyGun = useAnyGun()
  const inStage = usePlayForest()
  const orange = useOrange()
  const forestTime = useForestTime()
  const anyKong = useAnyKong()
  if (forestTime != 0) {
    return {
      in: inStage,
      out: inStage
    }
  }
  return {
    in: anyGun && inStage,
    out: anyKong && orange && inStage
  }
}

/**
 * Is it dusk in Forest? AKA, are all time gates removed?
 *
 * This is only possible via changing the seed settings.
 * @returns true if it's dusk.
 */
export const useForestDusk = (): boolean => {
  const inStage = usePlayForest()
  const dusk = useForestTime() == 2
  return inStage && dusk
}

/**
 * Can we access the spider boss room?
 * @returns true if we can access the spider boss room.
 */
export const useForestSpiderBoss = (): LogicBool => {
  const night = useForestNight()
  const dusk = useForestDusk()
  const mini = useMini()
  const punch = usePunch()

  return {
    in: dusk || (night.in && punch && mini),
    out: dusk || (logicBreak(night) && punch && mini)
  }
}

/**
 * Do we have access to the top of the mushroom in Forest?
 *
 * Due to recent logic changes, this is always possible.
 * However, the future may put restrictions on again.
 * @returns true (as long as we're in the stage). This is always possible.
 */
export const useForestMushroomTop = (): boolean => {
  return usePlayForest()
}

/**
 * Can we access the roof of the mushroom exterior in Forest?
 * @returns true if we can get on the roof.
 */
export const useForestMushroomRoof = (): LogicBool => {
  const inStage = usePlayForest()
  const stand = useStand()
  const rocket = useRocket()
  const tiny = useTiny()
  return {
    in: inStage && stand,
    out: inStage && (rocket || tiny)
  }
}

export const useForestBeanHalf = (): boolean => {
  const inStage = usePlayForest()
  const door1 = useSwitchsanityGun('forestBean1', 3)
  const removeBarriers = useDonkStore(useShallow((state) => state.removeBarriers))
  return inStage && (door1 || removeBarriers.forestBeanstalk)
}

/**
 * Do we have access to the beanstalk area?
 * @returns true if we can access the beanstalk area.
 */
export const useForestBean = (): boolean => {
  const inStage = usePlayForest()
  const door1 = useSwitchsanityGun('forestBean1', 3)
  const door2 = useSwitchsanityGun('forestBean2', 4)
  const warpAll = useBananaportAll()
  const [removeBarriers] = useDonkStore(useShallow((state) => [state.removeBarriers]))
  return inStage && (warpAll || removeBarriers.forestBeanstalk || (door1 && door2))
}

/**
 * Can we access the Owl Tree in Forest?
 * @returns true if we can access the Owl Tree in Forest.
 */
export const useForestOwl = (): boolean => {
  const inStage = usePlayForest()
  const door = useSwitchsanityGun('forestOwlTree', 2)
  const warpAll = useBananaportAll()
  const [removeBarriers] = useDonkStore(useShallow((state) => [state.removeBarriers]))
  return inStage && (warpAll || removeBarriers.forestOwlTree || door)
}

export const useChunkyMineGb = (): boolean => {
  const inStage = usePlayForest()
  const chunky = useChunky()
  const slam = useSlam()
  return inStage && chunky && slam
}

export const useChunkyFaceGb = (): boolean => {
  const inStage = usePlayForest()
  const canSlam = useSlamForest()
  const pineapple = usePineapple()
  return inStage && canSlam && pineapple
}

export const useChunkyAppleGb = (): boolean => {
  const beanstalk = useForestBean()
  const boulder = useBoulderTech()
  const hunky = useHunky()
  return beanstalk && boulder && hunky
}

export const useChunkyMillGb = (): LogicBool => {
  const inStage = usePlayForest()
  const day = useForestDay()
  const boulderTech = useBoulderTech()
  const punch = usePunch()
  const grab = useGrab()
  const triangle = useTriangle()
  return {
    in: inStage && day.in && boulderTech && punch && triangle && grab,
    out: inStage && logicBreak(day) && boulderTech && punch && triangle
  }
}

export const useDiddyTopGb = (): LogicBool => {
  const inStage = usePlayForest()
  const rocket = useRocket()
  const diddy = useDiddy()
  const tiny = useTiny()
  const stand = useStand()
  return {
    in: inStage && rocket,
    out: useFtaDiddyBanana() && inStage && (diddy || tiny) && (tiny || stand)
  }
}

export const useDiddyOwlGb = (): LogicBool => {
  const owlTree = useForestOwl()
  const night = useForestNight()
  const guitar = useGuitar()
  const rocket = useRocket()
  return {
    in: owlTree && night.in && guitar && rocket,
    out: owlTree && night.out && guitar && rocket
  }
}

export const useDiddyCageGb = (): LogicBool => {
  const inStage = usePlayForest()
  const hasClimbing = useClimbing()
  const hasBalloon = useBalloon()
  const hasSlam = useSlamForest()
  const charge = useCharge()
  const guitar = useGuitar()
  const anyGun = useAnyGun()
  return {
    in: inStage && hasClimbing && hasSlam && charge && guitar && anyGun,
    out: inStage && hasBalloon && hasSlam && charge && guitar && anyGun
  }
}

export const useDiddyRaftersGb = (): LogicBool => {
  const inStage = usePlayForest()
  const night = useForestNight()
  const spring = useSpring()
  const guitar = useGuitar()
  const highGrab = useHighGrab()
  return {
    in: inStage && night.in && spring && guitar,
    out: useFtaDiddyBanana() && inStage && logicBreak(night) && (spring || highGrab)
  }
}

/**
 * Can we get the blast course banana in Forest?
 * @returns true if we can get the banana.
 */
export const useDkBlastGb = (): boolean => {
  const inStage = usePlayForest()
  return useBlast() && inStage
}

export const useDkMushGb = (): boolean => {
  const inStage = usePlayForest()
  const allGun = useAllGun()
  return useSlamForest() && inStage && allGun
}

export const useDkMillGb = (): LogicBool => {
  const inStage = usePlayForest()
  const day = useForestDay()
  const night = useForestNight()
  const canSlam = useSlamForest()
  const grab = useGrab()
  return {
    in: inStage && day.in && night.in && canSlam && grab,
    out: inStage && logicBreak(day) && logicBreak(night) && canSlam && grab
  }
}

export const useForestBarn = (): LogicBool => {
  const inStage = usePlayForest()
  const night = useForestNight()
  const canSlam = useSlamForest()
  const dk = useDk()
  const strong = useStrong()
  return {
    in: inStage && night.in && canSlam && strong,
    out: inStage && logicBreak(night) && dk && canSlam
  }
}

export const useDkBarnGb = (): LogicBool => {
  const barn = useForestBarn()
  const climbing = useClimbing()
  const vine = useVine()
  const autoFinishBonuses = useAutoBonus()
  return {
    in: barn.in && (climbing && vine || autoFinishBonuses),
    out: logicBreak(barn)
  }
}

export const useLankyMillGb = (): LogicBool => {
  const inStage = usePlayForest()
  const night = useForestNight()
  const canSlam = useSlamForest()
  const homing = useHoming()
  const hardShooting = useHardShooting()
  const anyGun = useAnyGun()
  const lanky = useLanky()
  return {
    in: inStage && night.in && lanky && canSlam && anyGun && (homing || hardShooting),
    out: inStage && logicBreak(night) && lanky && canSlam && anyGun
  }
}

export const useLankyMushGb = (): LogicBool => {
  const roof = useForestMushroomRoof()
  const lanky = useLanky()
  const canSlam = useSlamForest()
  return {
    in: roof.in && lanky && canSlam,
    out: logicBreak(roof) && lanky && canSlam
  }
}

/*Alex edit: The former code for VerdantAsh's favorite banana, kept here for posterity because the alterations are historically significant.
export const useLankyRaceGb = (): LogicBool => {
  const owl = useForestOwl()
  const trombone = useTrombone()
  const sprint = useSprint()
  const boulder = useBoulderTech()
  return {
    in: owl && trombone && sprint,
    out: owl && trombone && boulder
  }
}

Thanks to an extremely infamous Season 3 tournament race where someone, I forgot who, choked the huge lead he had by spending, like, AN HOUR doing this banana with DK over and over and over again (one that, in my comment on the YouTube video, I felt met Albert Einstein's definition of insanity), 2Dos patched this banana so that you are now required to have Sprint! The "new" Lanky Race GB?*/
export const useLankyRaceGb = (): LogicBool => {
  const isDay = useForestDay()
  const owl = useForestOwl()
  const trombone = useTrombone()
  const sprint = useSprint()
  return {
    in: isDay.in && owl && trombone && sprint,
    out: isDay.out && owl && trombone && sprint
  }
}

export const useTinyMushGb = (): boolean => {
  const inStage = usePlayForest()
  const tiny = useTiny()
  const canSlam = useSlamForest()
  const hasClimbing = useClimbing()
  return inStage && tiny && canSlam && hasClimbing
}

export const useTinyAntGb = (): boolean => {
  const owl = useForestOwl()
  const mini = useMini()
  const sax = useSax()
  return owl && mini && sax
}

export const useTinySpiderGb = (): LogicBool => {
  const spider = useForestSpiderBoss()
  const anyGun = useAnyGun()
  const kong = useFtaTinyBanana()
  return {
    in: kong && spider.in && anyGun,
    out: kong && logicBreak(spider) && anyGun
  }
}

export const useTinyBeanGb = (): boolean => {
  const beanstalk = useForestBean()
  const bean = useBean()
  const mini = useMini()
  const sax = useSax()
  return beanstalk && bean && mini && sax
}

export const useGeneralThing = (): boolean => {
  const inStage = usePlayForest()
  const anyKong = useAnyKong()
  return inStage && anyKong
}

export const useArena = (): boolean => {
  const top = useForestMushroomTop()
  const anyKong = useAnyKong()
  return top && anyKong
}

export const useBeanDirt = (): boolean => {
  const beanstalk = useForestBean()
  return useShockwave() && beanstalk
}

export const useGeneralDirt = (): boolean => {
  const inStage = usePlayForest()
  return useShockwave() && inStage
}

export const useBarnFairy = (): LogicBool => {
  const barn = useForestBarn()
  const hasClimbing = useClimbing()
  const camera = useCamera()
  return {
    in: barn.in && hasClimbing && camera,
    out: barn.out && camera
  }
}

export const useRaftersFairy = (): LogicBool => {
  const rafters = useDiddyRaftersGb()
  const camera = useCamera()
  return {
    in: rafters.in && camera,
    out: rafters.out && camera
  }
}

export const useGeneralFairy = (): boolean => {
  const thing = useGeneralThing()
  const camera = useCamera()
  return thing && camera
}

export const useBarnKasplat = (): LogicBool => {
  const inStage = usePlayForest()
  const night = useForestNight()
  const dusk = useForestDusk()
  const kong = useFtaDkBlueprint()
  return {
    in: kong && inStage && (night.in || dusk),
    out: kong && inStage && (night.in || night.out || dusk)
  }
}

export const useOwlKasplat = (): boolean => {
  const inStage = useForestOwl()
  const anyKong = useAnyKong()
  return useFtaLankyBlueprint() && inStage && anyKong
}

export const useNightKasplat = (): boolean => {
  const inStage = useForestMushroomTop()
  const anyKong = useAnyKong()
  return useFtaChunkyBlueprint() && inStage && anyKong
}

export const useMushInteriorKasplat = (): boolean => {
  const inStage = usePlayForest()
  return useFtaDiddyBlueprint() && inStage
}

export const useMushExteriorKasplat = (): boolean => {
  const inStage = usePlayForest()
  return useFtaTinyBlueprint() && inStage
}

export const useMillFrontKegs = (): boolean => {
  const canEnterMills = useForestDay()
  const hasChunky = useChunky()
  const hasBarrels = useBarrel()
  return canEnterMills && hasChunky && hasBarrels
}

export const useMillBackKeg = (): boolean => {
  const canEnterMills = useForestDay()
  const hasPrimatePunch = usePunch()
  const hasMiniMonkey = useMini()
  const hasChunky = useChunky()
  const hasBarrels = useBarrel()
  return canEnterMills && (hasPrimatePunch || hasMiniMonkey) && hasChunky && hasBarrels
}
