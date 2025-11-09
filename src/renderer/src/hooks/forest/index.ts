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
  useBarrel
} from '../kongs'
import { useBananaportAll, useForestTime, useHardShooting, useAutoBonus } from '../settings'
import { LogicBool, logicBreak, useSwitchsanityGun } from '../world'

/**
 * Can we play in Fungi Forest?
 * @returns true if we can play in Fungi Forest.
 */
export const usePlayForest = (): LogicBool => {
  const canEnter = usePlayLevel('Fungi Forest')
  return {
    in: canEnter.in,
    out: canEnter.out
  }
}

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
      in: inStage.in,
      out: inStage.out
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
      in: inStage.in,
      out: inStage.out
    }
  }
  return {
    in: anyGun && inStage.in,
    out: anyKong && orange && inStage.out
  }
}

/**
 * Is it dusk in Forest? AKA, are all time gates removed?
 *
 * This is only possible via changing the seed settings.
 * @returns true if it's dusk.
 */
export const useForestDusk = (): LogicBool => {
  const inStage = usePlayForest()
  const dusk = useForestTime() == 2
  return {
    in: inStage.in && dusk,
    out: inStage.out && dusk
  }
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
    in: dusk.in || (night.in && punch && mini),
    out: dusk.out || (night.out && punch && mini)
  }
}

/**
 * Do we have access to the top of the mushroom in Forest?
 *
 * Due to recent logic changes, this is always possible.
 * However, the future may put restrictions on again.
 * @returns true (as long as we're in the stage). This is always possible.
 
 Alex edit: Hi, I'm from the future! :D
 */
export const useForestMushroomTop = (): LogicBool => {
  const inStage = usePlayForest() //the old version had just this check
  const canClimbShroom = useClimbing() //You now need Climbing to be able to reach the top from the bottom...
  const hasBananaports = useBananaportAll() //...or have all Bananaports pre-activated...
  const hasJetbarrel = useRocket() //...or have Jetbarrel.
  return {
    in: inStage.in && (canClimbShroom || hasBananaports || hasJetbarrel),
    out: inStage.out && (canClimbShroom || hasBananaports || hasJetbarrel)
  }
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
    in: inStage.in && stand,
    out: inStage.out && (rocket || tiny)
  }
}

export const useForestBeanHalf = (): LogicBool => {
  const inStage = usePlayForest()
  const door1 = useSwitchsanityGun('forestBean1', 3)
  const removeBarriers = useDonkStore(useShallow((state) => state.removeBarriers))
  return {
    in: inStage.in && (door1 || removeBarriers.forestBeanstalk),
    out: inStage.out && (door1 || removeBarriers.forestBeanstalk)
  }
}

/**
 * Do we have access to the beanstalk area?
 * @returns true if we can access the beanstalk area.
 */
export const useForestBean = (): LogicBool => {
  const inStage = usePlayForest()
  const door1 = useSwitchsanityGun('forestBean1', 3)
  const door2 = useSwitchsanityGun('forestBean2', 4)
  const warpAll = useBananaportAll()
  const [removeBarriers] = useDonkStore(useShallow((state) => [state.removeBarriers]))
  return {
    in: inStage.in && (warpAll || removeBarriers.forestBeanstalk || (door1 && door2)),
    out: inStage.out && (warpAll || removeBarriers.forestBeanstalk || (door1 && door2))
  }
}

/**
 * Can we access the Owl Tree in Forest?
 * @returns true if we can access the Owl Tree in Forest.
 */
export const useForestOwl = (): LogicBool => {
  const inStage = usePlayForest()
  const door = useSwitchsanityGun('forestOwlTree', 2)
  const warpAll = useBananaportAll()
  const [removeBarriers] = useDonkStore(useShallow((state) => [state.removeBarriers]))
  return {
    in: inStage.in && (warpAll || removeBarriers.forestOwlTree || door),
    out: inStage.out && (warpAll || removeBarriers.forestOwlTree || door)
  }
}

export const useChunkyMineGb = (): LogicBool => {
  const inStage = usePlayForest()
  const chunky = useChunky()
  const slam = useSlam()
  return {
    in: inStage.in && chunky && slam,
    out: inStage.out && chunky && slam
  }
}

export const useChunkyFaceGb = (): LogicBool => {
  const inStage = usePlayForest()
  const canSlam = useSlamForest()
  const pineapple = usePineapple()
  return {
    in: inStage.in && canSlam && pineapple,
    out: inStage.out && canSlam && pineapple
  }
}

export const useChunkyAppleGb = (): LogicBool => {
  const beanstalk = useForestBean()
  const boulder = useBoulderTech()
  const hunky = useHunky()
  return {
    in: beanstalk.in && boulder && hunky,
    out: beanstalk.out && boulder && hunky
  }
}

export const useChunkyMillGb = (): LogicBool => {
  const inStage = usePlayForest()
  const day = useForestDay()
  const boulderTech = useBoulderTech()
  const punch = usePunch()
  const grab = useGrab()
  const triangle = useTriangle()
  return {
    in: inStage.in && day.in && boulderTech && punch && triangle && grab,
    out: inStage.out && day.out && boulderTech && punch && triangle
  }
}

export const useDiddyTopGb = (): LogicBool => {
  const inStage = usePlayForest()
  const rocket = useRocket()
  const diddy = useDiddy()
  const tiny = useTiny()
  const stand = useStand()
  return {
    in: inStage.in && rocket,
    out: useFtaDiddyBanana() && inStage.out && (diddy || tiny) && (tiny || stand)
  }
}

export const useDiddyOwlGb = (): LogicBool => {
  const owlTree = useForestOwl()
  const night = useForestNight()
  const guitar = useGuitar()
  const rocket = useRocket()
  return {
    in: owlTree.in && night.in && guitar && rocket,
    out: owlTree.out && night.out && guitar && rocket
  }
}

export const useDiddyCageGb = (): LogicBool => {
  const inStage = usePlayForest()
  const hasClimbing = useClimbing()
  const hasSlam = useSlamForest()
  const charge = useCharge()
  const guitar = useGuitar()
  const anyGun = useAnyGun()
  return {
    in: inStage.in && hasClimbing && hasSlam && charge && guitar && anyGun,
    out: inStage.out && hasClimbing && hasSlam && charge && guitar && anyGun
  }
}

export const useDiddyRaftersGb = (): LogicBool => {
  const inStage = usePlayForest()
  const night = useForestNight()
  const spring = useSpring()
  const guitar = useGuitar()
  const highGrab = useHighGrab()
  return {
    in: inStage.in && night.in && spring && guitar,
    out: useFtaDiddyBanana() && inStage.out && night.out && (spring || highGrab)
  }
}

/**
 * Can we get the blast course banana in Forest?
 * @returns true if we can get the banana.
 */
export const useDkBlastGb = (): LogicBool => {
  const inStage = usePlayForest()
  return {
    in: useBlast() && inStage.in,
    out: useBlast() && inStage.out
  }
}

export const useDkMushGb = (): LogicBool => {
  const inStage = usePlayForest()
  const allGun = useAllGun()
  return {
    in: useSlamForest() && inStage.in && allGun,
    out: useSlamForest() && inStage.out && allGun
  }
}

export const useDkMillGb = (): LogicBool => {
  const inStage = usePlayForest()
  const day = useForestDay()
  const night = useForestNight()
  const canSlam = useSlamForest()
  const grab = useGrab()
  return {
    in: inStage.in && day.in && night.in && canSlam && grab,
    out: inStage.out && day.out && night.out && canSlam && grab
  }
}

export const useForestBarn = (): LogicBool => {
  const inStage = usePlayForest()
  const night = useForestNight()
  const canSlam = useSlamForest()
  const dk = useDk()
  const strong = useStrong()
  return {
    in: inStage.in && night.in && canSlam && strong,
    out: inStage.out && night.out && dk && canSlam
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
    in: inStage.in && night.in && lanky && canSlam && anyGun && (homing || hardShooting),
    out: inStage.out && night.out && lanky && canSlam && anyGun
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
    in: isDay.in && owl.in && trombone && sprint,
    out: isDay.out && owl.out && trombone && sprint
  }
}

export const useTinyMushGb = (): LogicBool => {
  const inStage = usePlayForest()
  const tiny = useTiny()
  const canSlam = useSlamForest()
  const hasClimbing = useClimbing()
  return {
    in: inStage.in && tiny && canSlam && hasClimbing,
    out: inStage.out && tiny && canSlam && hasClimbing
  }
}

export const useTinyAntGb = (): LogicBool => {
  const owl = useForestOwl()
  const mini = useMini()
  const sax = useSax()
  return {
    in: owl.in && mini && sax,
    out: owl.out && mini && sax
  }
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

export const useTinyBeanGb = (): LogicBool => {
  const beanstalk = useForestBean()
  const bean = useBean()
  const mini = useMini()
  const sax = useSax()
  return {
    in: beanstalk.in && bean && mini && sax,
    out: beanstalk.out && bean && mini && sax
  }
}

export const useGeneralThing = (): LogicBool => {
  const inStage = usePlayForest()
  const anyKong = useAnyKong()
  return {
    in: inStage.in && anyKong,
    out: inStage.out && anyKong
  }
}

export const useArena = (): LogicBool => {
  const top = useForestMushroomTop()
  const anyKong = useAnyKong()
  return {
    in: top.in && anyKong,
    out: top.out && anyKong
  }
}

export const useBeanDirt = (): LogicBool => {
  const beanstalk = useForestBean()
  return {
    in: useShockwave() && beanstalk.in,
    out: useShockwave() && beanstalk.out
  }
}

export const useGeneralDirt = (): LogicBool => {
  const inStage = usePlayForest()
  return {
    in: useShockwave() && inStage.in,
    out: useShockwave() && inStage.out
  }
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
    in: kong && inStage.in && (night.in || dusk.in),
    out: kong && inStage.out && (night.out || dusk.out)
  }
}

export const useOwlKasplat = (): LogicBool => {
  const inStage = useForestOwl()
  const anyKong = useAnyKong()
  return {
    in: useFtaLankyBlueprint() && inStage.in && anyKong,
    out: useFtaLankyBlueprint() && inStage.out && anyKong
  }
}

export const useNightKasplat = (): LogicBool => {
  const inStage = useForestMushroomTop()
  const anyKong = useAnyKong()
  return {
    in: useFtaChunkyBlueprint() && inStage.in && anyKong,
    out: useFtaChunkyBlueprint() && inStage.out && anyKong
  }
}

export const useMushInteriorKasplat = (): LogicBool => {
  const inStage = usePlayForest()
  return {
    in: useFtaDiddyBlueprint() && inStage.in,
    out: useFtaDiddyBlueprint() && inStage.out
  }
}

export const useMushExteriorKasplat = (): LogicBool => {
  const inStage = usePlayForest()
  return {
    in: useFtaTinyBlueprint() && inStage.in,
    out: useFtaTinyBlueprint() && inStage.out
  }
}

export const useMillFrontKegs = (): LogicBool => {
  const canEnterMills = useForestDay()
  const hasChunky = useChunky()
  const hasBarrels = useBarrel()
  return {
    in: canEnterMills.in && hasChunky && hasBarrels,
    out: canEnterMills.out && hasChunky && hasBarrels
  }
}

export const useMillBackKeg = (): LogicBool => {
  const canEnterMills = useForestDay()
  const hasPrimatePunch = usePunch()
  const hasMiniMonkey = useMini()
  const hasChunky = useChunky()
  const hasBarrels = useBarrel()
  return {
    in: canEnterMills.in && (hasPrimatePunch || hasMiniMonkey) && hasChunky && hasBarrels,
    out: canEnterMills.out && (hasPrimatePunch || hasMiniMonkey) && hasChunky && hasBarrels
  }
}
