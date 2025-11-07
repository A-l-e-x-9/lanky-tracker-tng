import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import { usePlayLevel, useSlamLevel } from '../isles'
import {
  useAnyGun,
  useAnyKong,
  useBalloon,
  useBarrel,
  useBlast,
  useBongos,
  useBoulderTech,
  useCamera,
  useDiddy,
  useDk,
  useFtaChunkyBlueprint,
  useFtaDiddyBanana,
  useFtaDiddyBlueprint,
  useFtaDkBlueprint,
  useFtaLankyBlueprint,
  useFtaTinyBanana,
  useFtaTinyBlueprint,
  useGone,
  useGuitar,
  useHighGrab,
  useHoming,
  useHunky,
  useLanky,
  useMini,
  useMonkeyport,
  useOrange,
  usePunch,
  useRocket,
  useSax,
  useShockwave,
  useSlam,
  useSpring,
  useSprint,
  useStrong,
  useTiny,
  useTriangle,
  useTrombone,
  useTwirl,
  useSnide,
  useChunky
} from '../kongs'
import { useBananaportAll, useHardShooting } from '../settings'
import { LogicBool, logicBreak } from '../world'

/**
 * Can we play in Crystal Caves?
 * @returns true if we can play in Crystal Caves.
 */
export const usePlayCaves = (): LogicBool => {
  const canEnter = usePlayLevel('Crystal Caves')
  return {
    in: canEnter.in,
    out: canEnter.out
  }
}

/**
 * Can we slam down switches in Crystal Caves?
 * @todo Handle both options of the progressive slam setting.
 * @returns true if we can slam switches in Crystal Caves.
 */
export const useSlamCaves = (): boolean => useSlamLevel('Crystal Caves')

/**
 * Can we enter the Igloo in Caves?
 * @returns true if we can enter the Igloo in Caves.
 */
export const useCavesIgloo = (): LogicBool => {
  const inStage = usePlayCaves()
  const rocket = useRocket()
  const [barriers] = useDonkStore(useShallow((state) => [state.removeBarriers]))
  const iglooBarrier = barriers.cavesIgloo
  return {
    in: inStage.in && (iglooBarrier || rocket),
    out: inStage.out && (iglooBarrier || rocket)
  }
}

/*Alex addition: Are the ice walls pre-punched, or do we still have to manually remove them with Primate Punch?*/
export const useIceWalls = (): boolean => {
  const [barriers] = useDonkStore(useShallow((state) => [state.removeBarriers]))
  const iceWalls = barriers.cavesWalls
  return iceWalls
}

/*Can we reach Snide's?*/
export const useCanAccessSnide = (): boolean => {
  const iceWalls = useIceWalls()
  const hasPunch = usePunch()
  const hasSnide = useSnide()
  return (iceWalls || hasPunch) && hasSnide
}

/**
 * Can we access the mini cavern by Funky in Caves?
 * @returns true if we can access the mini cavern by Funky.
 Alex edit: The original "out logic" of inStage + mini, the "Twirl-less" trick, is a Crystal Coconut hog with way too much of a chance for something to go wrong and is highly not recommended by me. Was originally changed to a boolean check but changed back when I implemented the "Water is Lava?" option in the settings.
 */
export const useCavesMiniFunky = (): LogicBool => {
  const inStage = usePlayCaves()
  const twirl = useTwirl()
  const mini = useMini()
  const warpAll = useBananaportAll()
  return {
    in: inStage.in && (warpAll || (twirl && mini)),
    out: inStage.out && mini
  }
}

/**
 * Can we access the tall pillar in Caves?
 * @returns true if we can access the pillar.
 */
export const useCavesPillar = (): LogicBool => {
  const inStage = usePlayCaves()
  const rocket = useRocket()
  const twirl = useTwirl()
  const balloon = useBalloon()
  const dk = useDk()
  const warpAll = useBananaportAll()
  return {
    in: inStage.in && (warpAll || rocket),
    out: inStage.out && (dk || twirl || balloon)
  }
}

export const useCavesLankyCabin = (): LogicBool => {
  const inStage = usePlayCaves()
  const balloon = useBalloon()
  const trombone = useTrombone()
  const diddy = useDiddy()
  const tiny = useTiny()
  return {
    in: inStage.in && trombone && balloon,
    out: inStage.out && trombone && (diddy || tiny)
  }
}

export const useDkCabinGb = (): LogicBool => {
  const inStage = usePlayCaves()
  const bongos = useBongos()
  const homing = useHoming()
  const hardShooting = useHardShooting()
  const anyGun = useAnyGun()
  return {
    in: inStage.in && bongos && anyGun && (homing || hardShooting),
    out: inStage.out && bongos && anyGun
  }
}

/*Major Alex edit: Added Oranges to the "out logic" since in my personal experience, there's always at least one purple Klaptrap to take down here.*/
export const useDiddyGauntletGb = (): LogicBool => {
  const inStage = usePlayCaves()
  const guitar = useGuitar()
  const rocket = useRocket()
  const orange = useOrange()
  return {
    in: inStage.in && guitar && rocket && orange,
    out: inStage.out && guitar && orange
  }
}

export const useChunkyGoneGb = (): LogicBool => {
  const inStage = usePlayCaves()
  const punch = usePunch()
  const wallsPrePunched = useIceWalls()
  const gone = useGone()
  return {
    in: inStage.in && (punch || wallsPrePunched) && gone,
    out: inStage.out && (punch || wallsPrePunched) && gone
  }
}

export const useChunkyClearGb = (): LogicBool => {
  const inStage = usePlayCaves()
  const punch = usePunch()
  const wallsPrePunched = useIceWalls()
  const boulder = useBoulderTech()
  const hunky = useHunky()
  return {
    in: inStage.in && (punch || wallsPrePunched) && boulder && hunky,
    out: inStage.out && (punch || wallsPrePunched) && boulder
  }
}

export const useChunkyIglooGb = (): boolean => {
  const igloo = useCavesIgloo()
  return useTriangle() && igloo
}

export const useChunkyCabinGb = (): LogicBool => {
  const inStage = usePlayCaves()
  const triangle = useTriangle()
  const gone = useGone()
  return {
    in: useSlam() && inStage.in && triangle && gone,
    out: useSlam() && inStage.out && triangle && gone
  }
}

export const useDiddyWaterfallGb = (): LogicBool => {
  const inStage = usePlayCaves()
  const rocket = useRocket()
  const dk = useDk()
  const twirl = useTwirl()
  return {
    in: inStage.in && rocket,
    out: useFtaDiddyBanana() && inStage.out && (dk || twirl)
  }
}

export const useDiddyIglooGb = (): boolean => {
  const igloo = useCavesIgloo()
  const guitar = useGuitar()
  const barrel = useBarrel()
  return igloo && guitar && barrel
}

export const useDiddyCandleGb = (): LogicBool => {
  const inStage = usePlayCaves()
  const guitar = useGuitar()
  const rocket = useRocket()
  const spring = useSpring()
  return {
    in: inStage.in && guitar && rocket && spring,
    out: inStage.out && guitar && rocket //If you're playing a seed with the "move Diddy Upper Cabin Barrel" option on under the "quality of life" settings, you may not be able to do this. Don't know if I should edit this check to account for that option...it's a lot of effort for just one check! -_-;
  }
}

/**
 * Can we get the banana in the blast course within Caves?
 * @returns true if we can get the banana.
 */
export const useDkBlastGb = (): LogicBool => {
  const inStage = usePlayCaves()
  return {
    in: useBlast() && inStage.in,
    out: useBlast() && inStage.out
  }
}

export const useDkIglooGb = (): LogicBool => {
  const igloo = useCavesIgloo()
  const bongos = useBongos()
  const strong = useStrong()
  return {
    in: igloo && bongos && strong,
    out: igloo && bongos
  }
}

export const useDkRotateGb = (): LogicBool => {
  const inStage = usePlayCaves()
  const bongos = useBongos()
  const slam = useSlam()
  return {
    in: inStage.in && bongos && slam,
    out: inStage.out && bongos && slam
  }
}

/**
 * Can we race the beetle in Caves for a GB?
 * @returns true if we can race the beetle.
 */
export const useLankyRaceGb = (): LogicBool => {
  const inStage = usePlayCaves()
  const canSlam = useSlamCaves()
  const balloon = useBalloon()
  const highGrab = useHighGrab()
  const sprint = useSprint()
  return {
    in: inStage.in && canSlam && sprint && balloon,
    out: inStage.out && canSlam && sprint && highGrab
  }
}

export const useLankyCastleGb = (): LogicBool => {
  const inStage = usePlayCaves()
  const lanky = useLanky()
  const canSlam = useSlamCaves()
  return {
    in: inStage.in && lanky && canSlam,
    out: inStage.out && lanky && canSlam
  }
}

export const useLankyIglooGb = (): LogicBool => {
  const igloo = useCavesIgloo()
  const trombone = useTrombone()
  const balloon = useBalloon()
  const highGrab = useHighGrab()
  return {
    in: igloo && trombone && balloon,
    out: igloo && trombone && highGrab
  }
}

export const useLankyCabinGb = (): LogicBool => {
  const cabin = useCavesLankyCabin()
  const sprint = useSprint()
  const balloon = useBalloon()
  const dk = useDk()
  const diddy = useDiddy()
  return {
    in: cabin.in && balloon && sprint,
    out: logicBreak(cabin) && ((balloon && sprint) || dk || diddy)
  }
}

export const useTinyCaveGb = (): LogicBool => {
  const inStage = usePlayCaves()
  const mini = useMini()
  const warpAll = useBananaportAll()
  return {
    in: useFtaTinyBanana() && inStage.in && (mini || warpAll),
    out: useFtaTinyBanana() && inStage.out && (mini || warpAll)
  }
}

export const useTinyPortGb = (): boolean => {
  const funky = useCavesMiniFunky()
  const port = useMonkeyport()
  return funky && port
}

export const useTinyIglooGb = (): boolean => {
  const igloo = useCavesIgloo()
  const sax = useSax()
  const slam = useSlam()
  return igloo && sax && slam
}

/*Alex edit: This check was originally a LogicBool with "out logic" of inStage + Sax + Shockwave + Feather, probably because the enemy randomizer works here so that not all of the enemies are purple Klaptraps. But in my experience, the game always gives me at least one purple Klaptrap for this check, making Oranges a very hard requirement, so I originally changed it to a boolean check before adding a "Water is Lava?" option in the Generator Settings forced me to change it back.*/
export const useTinyCabinGb = (): LogicBool => {
  const inStage = usePlayCaves()
  const sax = useSax()
  const orange = useOrange()
  return {
    in: inStage.in && sax && orange,
    out: inStage.out && sax && orange
  }
}

export const useGeneralThing = (): LogicBool => {
  const inStage = usePlayCaves()
  return {
    in: useAnyKong() && inStage.in,
    out: useAnyKong() && inStage.out
  }
}

export const useGeneralDirt = (): LogicBool => {
  const inStage = usePlayCaves()
  return {
    in: useShockwave() && inStage.in,
    out: useShockwave() && inStage.out
  }
}

export const useKoshaDirt = (): LogicBool => {
  const igloo = useChunkyClearGb()
  const port = useMonkeyport()
  const shock = useShockwave()
  return {
    in: igloo.in && port && shock,
    out: igloo.out && port && shock
  }
}

export const useGenericFairy = (): LogicBool => {
  const inStage = usePlayCaves()
  return {
    in: useCamera() && inStage.in,
    out: useCamera() && inStage.out
  }
}

export const useIglooFairy = (): boolean => {
  const thing = useTinyIglooGb()
  return useCamera() && thing
}

export const useCabinFairy = (): boolean => {
  const thing = useDiddyCandleGb()
  const camera = useCamera()
  return thing && camera
}

export const useIceCastleKasplat = (): LogicBool => {
  const inStage = usePlayCaves()
  return {
    in: useFtaDkBlueprint() && inStage.in,
    out: useFtaDkBlueprint() && inStage.out
  }
}

export const useFunkyKasplat = (): boolean => {
  const miniFunky = useCavesMiniFunky()
  const kong = useFtaDiddyBlueprint()
  return kong && miniFunky
}

export const usePillarKasplat = (): LogicBool => {
  const pillar = useCavesPillar()
  const kong = useFtaLankyBlueprint()
  return {
    in: kong && pillar.in,
    out: kong && pillar.out
  }
}

export const useCabinKasplat = (): LogicBool => {
  const inStage = usePlayCaves()
  return {
    in: useFtaTinyBlueprint() && inStage.in,
    out: useFtaTinyBlueprint() && inStage.out
  }
}

export const useIglooKasplat = (): LogicBool => {
  const inStage = usePlayCaves()
  return {
    in: useFtaChunkyBlueprint() && inStage.in,
    out: useFtaChunkyBlueprint() && inStage.out
  }
}

export const useSatoriKomeiji = (): LogicBool => {
  const inStage = usePlayCaves()
  const hasChunky = useChunky()
  const hasBarrels = useBarrel()
  return {
    in: inStage.in && hasChunky && hasBarrels,
    out: inStage.out && hasChunky && hasBarrels
  }
}

export const useOrin = (): boolean => {
  const otherStuff = useSatoriKomeiji()
  const canGetPastIceWalls = useIceWalls()
  const hasPunch = usePunch()
  const hasHunky = useHunky()
  return otherStuff && (hasPunch || canGetPastIceWalls) && hasHunky
}
