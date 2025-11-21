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
import { useBananaportAll, useHardShooting, useAngryCaves } from '../settings'
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
  const angery = useAngryCaves()
  const rocket = useRocket()
  const [barriers] = useDonkStore(useShallow((state) => [state.removeBarriers]))
  const iglooBarrier = barriers.cavesIgloo
  return {
    in: inStage.in && !angery && (iglooBarrier || rocket),
    out: (inStage.out || angery) && (iglooBarrier || rocket)
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
  const angery = useAngryCaves()
  const twirl = useTwirl()
  const mini = useMini()
  const warpAll = useBananaportAll()
  return {
    in: inStage.in && !angery && (warpAll || (twirl && mini)),
    out: (inStage.out || angery) && mini
  }
}

/**
 * Can we access the tall pillar in Caves?
 * @returns true if we can access the pillar.
 */
export const useCavesPillar = (): LogicBool => {
  const inStage = usePlayCaves()
  const angery = useAngryCaves()
  const rocket = useRocket()
  const twirl = useTwirl()
  const balloon = useBalloon()
  const dk = useDk()
  const warpAll = useBananaportAll()
  return {
    in: inStage.in && !angery && (warpAll || rocket),
    out: (inStage.out || angery) && (dk || twirl || balloon)
  }
}

export const useCavesLankyCabin = (): LogicBool => {
  const inStage = usePlayCaves()
  const angery = useAngryCaves()
  const balloon = useBalloon()
  const trombone = useTrombone()
  const diddy = useDiddy()
  const tiny = useTiny()
  return {
    in: inStage.in && !angery && trombone && balloon,
    out: (inStage.out || angery) && trombone && (diddy || tiny)
  }
}

//This is for the enemies that are actually inside Lanky's cabin.
export const useCavesLankyCabinSpecial = (): LogicBool => {
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
  const angery = useAngryCaves()
  const bongos = useBongos()
  const homing = useHoming()
  const hardShooting = useHardShooting()
  const anyGun = useAnyGun()
  return {
    in: inStage.in && !angery && bongos && anyGun && (homing || hardShooting),
    out: (inStage.out || angery) && bongos && anyGun
  }
}

/*Major Alex edit: Added Oranges to the "out logic" since in my personal experience, there's always at least one purple Klaptrap to take down here.*/
export const useDiddyGauntletGb = (): LogicBool => {
  const inStage = usePlayCaves()
  const angery = useAngryCaves()
  const guitar = useGuitar()
  const rocket = useRocket()
  const orange = useOrange()
  return {
    in: inStage.in && !angery && guitar && rocket && orange,
    out: (inStage.out || angery) && guitar && orange
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
  const angery = useAngryCaves()
  const punch = usePunch()
  const wallsPrePunched = useIceWalls()
  const boulder = useBoulderTech()
  const hunky = useHunky()
  return {
    in: inStage.in && !angery && (punch || wallsPrePunched) && boulder && hunky,
    out: (inStage.out || angery) && (punch || wallsPrePunched) && boulder
  }
}

export const useChunkyIglooGb = (): LogicBool => {
  const igloo = useCavesIgloo()
  return {
    in: useTriangle() && igloo.in,
    out: useTriangle() && igloo.out
  }
}

export const useChunkyCabinGb = (): LogicBool => {
  const inStage = usePlayCaves()
  const angery = useAngryCaves()
  const triangle = useTriangle()
  const gone = useGone()
  return {
    in: useSlam() && inStage.in && !angery && triangle && gone,
    out: useSlam() && (inStage.out || angery) && triangle && gone
  }
}

export const useDiddyWaterfallGb = (): LogicBool => {
  const inStage = usePlayCaves()
  const angery = useAngryCaves()
  const rocket = useRocket()
  const dk = useDk()
  const twirl = useTwirl()
  return {
    in: inStage.in && !angery && rocket,
    out: useFtaDiddyBanana() && (inStage.out || angery) && (dk || twirl)
  }
}

export const useDiddyIglooGb = (): LogicBool => {
  const igloo = useCavesIgloo()
  const guitar = useGuitar()
  const barrel = useBarrel()
  return {
    in: igloo.in && guitar && barrel,
    out: igloo.out && guitar && barrel
  }
}

export const useDiddyCandleGb = (): LogicBool => {
  const inStage = usePlayCaves()
  const angery = useAngryCaves()
  const guitar = useGuitar()
  const rocket = useRocket()
  const spring = useSpring()
  return {
    in: inStage.in && !angery && guitar && rocket && spring,
    out: (inStage.out || angery) && guitar && rocket //If you're playing a seed with the "move Diddy Upper Cabin Barrel" option on under the "quality of life" settings, you may not be able to do this. Don't know if I should edit this check to account for that option...it's a lot of effort for just one check! -_-;
  }
}

/**
 * Can we get the banana in the blast course within Caves?
 * @returns true if we can get the banana.
 */
export const useDkBlastGb = (): LogicBool => {
  const inStage = usePlayCaves()
  const angery = useAngryCaves()
  return {
    in: useBlast() && inStage.in && !angery,
    out: useBlast() && (inStage.out || angery)
  }
}

/*Fun fact: The DK Barrel seen in Randomizer seeds is strictly a creation of the Randomizer. In vanilla, you are required to do this check with just access to the Igloo and Bongoes.*/
export const useDkIglooGb = (): LogicBool => {
  const igloo = useCavesIgloo()
  const bongos = useBongos()
  const strong = useStrong()
  const hinaKagiyama = useTwirl()
  return {
    in: igloo.in && bongos && strong,
    out: igloo.out && (bongos || hinaKagiyama) //You are able to do this check out of logic if you have Tiny and Ponytail Twirl, although you need good timing to not get hit by the spiky ice wall.
  }
}

export const useDkRotateGb = (): LogicBool => {
  const inStage = usePlayCaves()
  const angery = useAngryCaves()
  const bongos = useBongos()
  const slam = useSlam()
  return {
    in: inStage.in && !angery && bongos && slam,
    out: (inStage.out || angery) && bongos && slam
  }
}

/**
 * Can we race the beetle in Caves for a GB?
 * @returns true if we can race the beetle.
 */
export const useLankyRaceGb = (): LogicBool => {
  const inStage = usePlayCaves()
  const angery = useAngryCaves()
  const canSlam = useSlamCaves()
  const balloon = useBalloon()
  const highGrab = useHighGrab()
  const sprint = useSprint()
  return {
    in: inStage.in && !angery && canSlam && sprint && balloon,
    out: (inStage.out || angery) && canSlam && sprint && highGrab
  }
}

export const useLankyCastleGb = (): LogicBool => {
  const inStage = usePlayCaves()
  const angery = useAngryCaves()
  const lanky = useLanky()
  const canSlam = useSlamCaves()
  return {
    in: inStage.in && !angery && lanky && canSlam,
    out: (inStage.out || angery) && lanky && canSlam
  }
}

export const useLankyIglooGb = (): LogicBool => {
  const igloo = useCavesIgloo()
  const trombone = useTrombone()
  const balloon = useBalloon()
  const highGrab = useHighGrab()
  return {
    in: igloo.in && trombone && balloon,
    out: igloo.out && trombone && highGrab
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
  const angery = useAngryCaves()
  const mini = useMini()
  const warpAll = useBananaportAll()
  return {
    in: useFtaTinyBanana() && inStage.in && !angery && (mini || warpAll),
    out: useFtaTinyBanana() && (inStage.out || angery) && (mini || warpAll)
  }
}

export const useTinyPortGb = (): LogicBool => {
  const funky = useCavesMiniFunky()
  const port = useMonkeyport()
  return {
    in: funky.in && port,
    out: funky.out && port
  }
}

export const useTinyIglooGb = (): LogicBool => {
  const igloo = useCavesIgloo()
  const sax = useSax()
  const slam = useSlam()
  return {
    in: igloo.in && sax && slam,
    out: igloo.out && sax && slam //I would argue that having Super Duper Simian Slam is "out of logic", as this check is quite hard to do with it. But that was too complicated for me to replicate here ^^;
  }
}

/*Alex edit: This check was originally a LogicBool with "out logic" of inStage + Sax + Shockwave + Feather, probably because the enemy randomizer works here so that not all of the enemies are purple Klaptraps. But in my experience, the game always gives me at least one purple Klaptrap for this check, making Oranges a very hard requirement, so I originally changed it to a boolean check before adding a "Water is Lava?" option in the Generator Settings forced me to change it back.*/
export const useTinyCabinGb = (): LogicBool => {
  const inStage = usePlayCaves()
  const angery = useAngryCaves()
  const sax = useSax()
  const orange = useOrange()
  return {
    in: inStage.in && !angery && sax && orange,
    out: (inStage.out || angery) && sax && orange
  }
}

export const useGeneralThing = (): LogicBool => {
  const inStage = usePlayCaves()
  const angery = useAngryCaves()
  return {
    in: useAnyKong() && inStage.in && !angery,
    out: useAnyKong() && (inStage.out || angery)
  }
}

export const useGeneralDirt = (): LogicBool => {
  const inStage = usePlayCaves()
  const angery = useAngryCaves()
  return {
    in: useShockwave() && inStage.in && !angery,
    out: useShockwave() && (inStage.out || angery)
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
  const angery = useAngryCaves()
  return {
    in: useCamera() && inStage.in && !angery,
    out: useCamera() && (inStage.out || angery)
  }
}

export const useIglooFairy = (): LogicBool => {
  const thing = useTinyIglooGb()
  return {
    in: useCamera() && thing.in,
    out: useCamera() && thing.out
  }
}

export const useCabinFairy = (): LogicBool => {
  const thing = useDiddyCandleGb()
  const camera = useCamera()
  return {
    in: thing.in && camera,
    out: thing.out && camera
  }
}

export const useIceCastleKasplat = (): LogicBool => {
  const inStage = usePlayCaves()
  const angery = useAngryCaves()
  return {
    in: useFtaDkBlueprint() && inStage.in && !angery,
    out: useFtaDkBlueprint() && (inStage.out || angery)
  }
}

export const useFunkyKasplat = (): LogicBool => {
  const miniFunky = useCavesMiniFunky()
  const kong = useFtaDiddyBlueprint()
  return {
    in: kong && miniFunky.in,
    out: kong && miniFunky.out
  }
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
  const angery = useAngryCaves()
  return {
    in: useFtaTinyBlueprint() && inStage.in && !angery,
    out: useFtaTinyBlueprint() && (inStage.out || angery)
  }
}

export const useIglooKasplat = (): LogicBool => {
  const inStage = usePlayCaves()
  const angery = useAngryCaves()
  return {
    in: useFtaChunkyBlueprint() && inStage.in && !angery,
    out: useFtaChunkyBlueprint() && (inStage.out || angery)
  }
}

export const useSatoriKomeiji = (): LogicBool => {
  const inStage = usePlayCaves()
  const angery = useAngryCaves()
  const hasChunky = useChunky()
  const hasBarrels = useBarrel()
  return {
    in: inStage.in && !angery && hasChunky && hasBarrels,
    out: (inStage.out || angery) && hasChunky && hasBarrels
  }
}

export const useOrin = (): LogicBool => {
  const otherStuff = useSatoriKomeiji()
  const canGetPastIceWalls = useIceWalls()
  const hasPunch = usePunch()
  const hasHunky = useHunky()
  return {
    in: otherStuff.in && (hasPunch || canGetPastIceWalls) && hasHunky,
    out: otherStuff.out && (hasPunch || canGetPastIceWalls) && hasHunky
  }
}
