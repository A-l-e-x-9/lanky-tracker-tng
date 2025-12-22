import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import { useCurrentPearlCount } from '../consumables'
import { useFastMermaid } from '../fast-checks'
import { usePlayLevel, useSlamLevel } from '../isles'
import {
  useAnyKong,
  useAnyGun,
  useBalloon,
  useBlast,
  useBongos,
  useBoulderTech,
  useCamera,
  useDive,
  useDk,
  useGrab,
  useGuitar,
  useHighGrab,
  useLanky,
  useMini,
  usePunch,
  useRocket,
  useSax,
  useShockwave,
  useSlam,
  useSpring,
  useTiny,
  useTriangle,
  useTrombone,
  useTwirl,
  useVine,
  useClimbing
} from '../kongs'
import { useBananaportAll, useGalleonTideStartHigh } from '../settings'
import { LogicBool, useSwitchsanityGun } from '../world'

/**
 * Can we play in Gloomy Galleon?
 * @returns true if we can play in Gloomy Galleon.
 */
export const usePlayGalleon = (): LogicBool => {
  const canEnter = usePlayLevel('Gloomy Galleon')
  return {
    in: canEnter.in,
    out: canEnter.out
  }
}

/**
 * Can we slam down switches in Gloomy Galleon?
 * @todo Handle both options of the progressive slam setting.
 * @returns true if we can slam switches in Gloomy Galleon.
 */
export const useSlamGalleon = (): boolean => useSlamLevel('Gloomy Galleon')

/**
 * Can we enter the Lighthouse area in Galleon?
 * @returns true if we can enter the Lighthouse area.
 */
export const useGalleonLighthouseArea = (): LogicBool => {
  const inStage = usePlayGalleon()
  const target = useSwitchsanityGun('galleonLighthouse', 0)
  const removeBarriers = useDonkStore(useShallow((state) => state.removeBarriers))
  return {
    in: inStage.in && (target || removeBarriers.galleonLighthouse),
    out: inStage.out && (target || removeBarriers.galleonLighthouse)
  }
}

/**
 * Do we have access to High Tide in Galleon?
 * @returns true if we have access to High Tide in Galleon.
 */
export const useGalleonHighTide = (): LogicBool => {
  const lighthouse = useGalleonLighthouseArea()
  const dive = useDive()
  if (useGalleonTideStartHigh()) {
    return {
      in: true,
      out: true
    }
  }
  return {
    in: lighthouse.in && dive.in,
    out: lighthouse.out && dive.out
  }
}

/**
 * Do we have access to Low Tide in Galleon?
 * @returns true if we have access to Low Tide in Galleon.
 */
export const useGalleonLowTide = (): LogicBool => {
  const dive = useDive()
  const inStage = usePlayGalleon()
  if (!useGalleonTideStartHigh()) {
    return {
      in: true,
      out: true
    }
  }
  return {
    in: dive.in && inStage.in,
    out: dive.out && inStage.out
  }
}

/**
 * Can we land on top of the Lighthouse Platform in Galleon?
 *
 * To future developers: DO NOT call `useGalleonSeasickShip` from here without modifying the code:
 * it will cause an infinite loop!
 * @returns a truthy statement if the platform can be reached.
 */
export const useGalleonLighthousePlatform = (): LogicBool => {
  const inStage = usePlayGalleon()
  const lighthouseArea = useGalleonLighthouseArea()
  const highTide = useGalleonHighTide()
  const twirl = useTwirl()
  const warpAll = useBananaportAll()
  const [galleonSeasick] = useDonkStore(
    useShallow((state) => [state.removeBarriers.galleonSeasick])
  )

  return {
    in: (inStage.in && warpAll) || (lighthouseArea.in && (highTide.in || (galleonSeasick && twirl))),
    out: lighthouseArea.out && galleonSeasick
  }
}

export const useGalleonLighthouseInside = (): LogicBool => {
  const canSlam = useSlamGalleon()
  const lighthousePlatform = useGalleonLighthousePlatform()
  const dk = useDk()
  const hasClimbing = useClimbing()
  const hasJetbarrel = useRocket()
  return {
    in: lighthousePlatform.in && canSlam && dk && hasClimbing,
    out: lighthousePlatform.out && canSlam && dk && (hasClimbing || hasJetbarrel)
  }
}

/**
 * Can we board the ship summoned by turning on the Lighthouse in Galleon?
 * @returns a truthy statement if we can board the ship.
 */
export const useGalleonSeasickShip = (): LogicBool => {
  const lighthousePlatform = useGalleonLighthousePlatform()
  const lighthouseArea = useGalleonLighthouseArea()
  const canSlam = useSlamGalleon()
  const grab = useGrab()
  const [galleonSeasick] = useDonkStore(
    useShallow((state) => [state.removeBarriers.galleonSeasick])
  )
  return {
    in: (lighthouseArea.in && galleonSeasick) || (lighthousePlatform.in && canSlam && grab),
    out: lighthousePlatform.out && canSlam && grab
  }
}

/**
 * Do we have access to the small platforms in the Galleon Caverns?
 *
 * In Vanilla, there is a Kasplat.
 * @returns a truthy value if we can access the thin platforms.
 */
export const useGalleonCavernTop = (): LogicBool => {
  const inStage = usePlayGalleon()
  const seasick = useGalleonSeasickShip()
  const rocket = useRocket()
  const dive = useDive()
  const vine = useVine()
  const warpAll = useBananaportAll()
  return {
    in: inStage.in && (vine || (warpAll && (dive.in || rocket))),
    out: (inStage.in || inStage.out) && seasick.out
  }
}

/**
 * Do we have access to the Cannon Game area in Galleon?
 * @returns true if we have access to the Cannon Game area in Galleon.
 */
export const useGalleonCannon = (): LogicBool => {
  const canPlay = usePlayGalleon()
  const target = useSwitchsanityGun('galleonCannon', 4)
  return {
    in: canPlay.in && target,
    out: canPlay.out && target
  }
}

/**
 * Do we have access to the Shipyard Outskirts in Galleon?
 * @returns true if we can access the Shipyard Outskirts in Galleon.
 */
export const useGalleonOutskirts = (): LogicBool => {
  const inStage = usePlayGalleon()
  const target = useSwitchsanityGun('galleonOutskirts', 1)
  const removeBarriers = useDonkStore(useShallow((state) => state.removeBarriers))
  return {
    in: inStage.in && (target || removeBarriers.galleonOutskirts),
    out: inStage.out && (target || removeBarriers.galleonOutskirts)
  }
}

/**
 * Do we have access to the treasure room?
 * @returns true if we can access the Treasure Room.
 */
export const useGalleonTreasureRoom = (): LogicBool => {
  const outskirts = useGalleonOutskirts()
  const highTide = useGalleonHighTide()
  const inStage = usePlayGalleon()
  const lanky = useLanky()
  const dive = useDive()
  const preOpened = useDonkStore(useShallow((state) => state.removeBarriers.galleonTreasureRoom))
  const warpAll = useBananaportAll()
  return {
    in: (inStage.in && warpAll) || (outskirts.in && (lanky && dive.in || preOpened) && highTide.in),
    out: outskirts.out && (lanky && dive.out || preOpened)
  }
}

export const useDkLighthouseGb = (): LogicBool => {
  const grab = useGrab()
  const inside = useGalleonLighthouseInside()
  const seasick = useDonkStore(useShallow((state) => state.removeBarriers.galleonSeasick))
  const hasClimbing = useClimbing()
  return {
    in: inside.in && hasClimbing && (seasick || grab),
    out: inside.out && hasClimbing && (seasick || grab)
  }
}

export const useDiddyLighthouseGb = (): LogicBool => {
  const seasick = useDonkStore(useShallow((state) => state.removeBarriers.galleonSeasick))
  const canSlam = useSlamGalleon()
  const lighthouseArea = useGalleonLighthouseArea()
  const rocket = useRocket()
  const dk = useDk()
  const grab = useGrab()
  const highTide = useGalleonHighTide()
  return {
    in: lighthouseArea.in && (seasick || (highTide && canSlam && dk && grab)) && rocket,
    out: lighthouseArea.out && (seasick || (canSlam && dk && grab)) && rocket
  }
}

export const useChunkyChestGb = (): LogicBool => {
  const inStage = usePlayGalleon()
  const punch = usePunch()
  return {
    in: inStage.in && punch,
    out: inStage.out && punch
  }
}

export const useChunkyCannonGb = (): LogicBool => {
  const cannon = useGalleonCannon()
  const boulder = useBoulderTech()
  const highTide = useGalleonHighTide()
  return {
    in: cannon.in && boulder && highTide.in,
    out: cannon.out && boulder
  }
}

export const useChunkySeasickGb = (): LogicBool => {
  const lighthouse = useGalleonLighthouseArea()
  const isLighthouseOn = useDkLighthouseGb()
  const wasLighthouseOn = useDonkStore(useShallow((state) => state.removeBarriers.galleonSeasick))
  const punch = usePunch()
  const slam = useSlam()
  return {
    in: lighthouse.in && (isLighthouseOn.in || wasLighthouseOn) && punch && slam,
    out: lighthouse.out && (isLighthouseOn.out || wasLighthouseOn) && punch && slam
  }
}

export const useChunky5DoorShipGb = (): LogicBool => {
  const lighthouse = useGalleonLighthouseArea()
  const outskirts = useGalleonOutskirts()
  const dive = useDive()
  const triangle = useTriangle()
  const lowTide = useGalleonLowTide()
  return {
    in: lighthouse.in && outskirts.in && dive.in && lowTide.in && triangle,
    out: lighthouse.out && outskirts.out && dive.out && lowTide.out && triangle
  }
}

export const useDiddyGoldGb = (): LogicBool => {
  const treasure = useGalleonTreasureRoom()
  const spring = useSpring()
  const highGrab = useHighGrab()
  return {
    in: treasure.in && spring,
    out: (treasure.in || treasure.out) && highGrab
  }
}

export const useDiddyMechGb = (): LogicBool => {
  const lighthouse = useGalleonLighthouseArea()
  const outskirts = useGalleonOutskirts()
  const highTide = useGalleonHighTide()
  const dive = useDive()
  const rocket = useRocket()
  const guitar = useGuitar()
  const gotAGun = useAnyGun()
  return {
    in: lighthouse.in && outskirts.in && dive.in && rocket && guitar && highTide.in && gotAGun,
    out: lighthouse.out && outskirts.out && dive.out && rocket && guitar && gotAGun
  }
}

export const useDiddy5DoorShipGb = (): LogicBool => {
  const outskirts = useGalleonOutskirts()
  const lowTide = useGalleonLowTide()
  const guitar = useGuitar()
  const dive = useDive()
  return {
    in: outskirts.in && lowTide && guitar && dive.in,
    out: outskirts.out && lowTide && guitar && dive.out
  }
}

/**
 * Can we get the golden banana from the seal via visiting the blast course in Galleon?
 * @returns true if we can get the banana from the seal.
 */
export const useDkBlastGb = (): LogicBool => {
  const lighthouse = useGalleonLighthouseArea()
  const blast = useBlast()
  const outskirts = useGalleonOutskirts()
  const highTide = useGalleonHighTide()
  return {
    in: lighthouse.in && blast && outskirts.in && highTide.in,
    out: lighthouse.out && blast && outskirts.out
  }
}

export const useDk5DoorShipGb = (): LogicBool => {
  const outskirts = useGalleonOutskirts()
  const bongos = useBongos()
  const dive = useDive()
  return {
    in: outskirts.in && bongos && dive.in,
    out: outskirts.out && bongos && dive.out
  }
}

export const useLankyChestGb = (): LogicBool => {
  const lighthouse = useGalleonLighthouseArea()
  const lanky = useLanky()
  const dive = useDive()
  return {
    in: lighthouse.in && lanky && dive.in,
    out: lighthouse.out && lanky && dive.out
  }
}

export const useLankyGoldGb = (): LogicBool => {
  const treasure = useGalleonTreasureRoom()
  const balloon = useBalloon()
  const highGrab = useHighGrab()
  return {
    in: treasure.in && balloon,
    out: (treasure.in || treasure.out) && highGrab
  }
}

export const useLanky2DoorShipGb = (): LogicBool => {
  const outskirts = useGalleonOutskirts()
  const canSlam = useSlamGalleon()
  const lanky = useLanky()
  const dive = useDive()
  return {
    in: outskirts.in && canSlam && lanky && dive.in,
    out: outskirts.out && canSlam && lanky && dive.out
  }
}

export const useLanky5DoorShipGb = (): LogicBool => {
  const outskirts = useGalleonOutskirts()
  const trombone = useTrombone()
  const lowTide = useGalleonLowTide()
  const dive = useDive()
  return {
    in: outskirts.in && trombone && lowTide && dive.in,
    out: outskirts.out && trombone && lowTide && dive.out
  }
}

export const useTinyMermaidGb = (): LogicBool => {
  const lighthouse = useGalleonLighthouseArea()
  const mini = useMini()
  const dive = useDive()
  const mermaid = useFastMermaid()
  const pearls = useCurrentPearlCount()
  return {
    in: lighthouse.in && mini && dive.in && pearls >= mermaid,
    out: lighthouse.out && mini && dive.out && pearls >= mermaid
  }
}

export const useTinySubGb = (): LogicBool => {
  const outskirts = useGalleonOutskirts()
  const mini = useMini()
  const dive = useDive()
  return {
    in: outskirts.in && mini && dive.in,
    out: outskirts.out && mini && dive.out
  }
}

export const useTiny2DoorShipGb = (): LogicBool => {
  const outskirts = useGalleonOutskirts()
  const dive = useDive()
  const tiny = useTiny()
  const canSlam = useSlamGalleon()
  return {
    in: tiny && canSlam && outskirts.in && dive.in,
    out: tiny && canSlam && outskirts.out && dive.out
  }
}

export const useTiny5DoorShipGb = (): LogicBool => {
  const outskirts = useGalleonOutskirts()
  const sax = useSax()
  const dive = useDive()
  return {
    in: outskirts.in && sax && dive.in,
    out: outskirts.out && sax && dive.out
  }
}

export const useTinyClams = (): LogicBool => {
  const treasure = useGalleonTreasureRoom()
  const mini = useMini()
  return {
    in: treasure.in && mini,
    out: treasure.out && mini
  }
}

export const useGeneralThing = (): LogicBool => {
  const inStage = usePlayGalleon()
  return {
    in: useAnyKong() && inStage.in,
    out: useAnyKong() && inStage.out
  }
}

export const useArena = (): LogicBool => {
  const inStage = usePlayGalleon()
  return {
    in: usePunch() && inStage.in,
    out: usePunch() && inStage.out
  }
}

export const useGeneralOutskirts = (): LogicBool => {
  const inStage = useGalleonOutskirts()
  return {
    in: useAnyKong() && inStage.in,
    out: useAnyKong() && inStage.out
  }
}

export const useLighthouseDirt = (): LogicBool => {
  const inside = useGalleonLighthouseInside()
  const dirt = useShockwave()
  return {
    in: inside.in && dirt,
    out: inside.out && dirt
  }
}

export const useGeneralDirt = (): LogicBool => {
  const thing = useGeneralThing()
  return {
    in: useShockwave() && thing.in,
    out: useShockwave() && thing.out
  }
}

export const useChestFairy = (): LogicBool => {
  const thing = useChunkyChestGb()
  const fairy = useCamera()
  return {
    in: thing.in && fairy,
    out: thing.out && fairy
  }
}

export const useShipFairy = (): LogicBool => {
  const ship = useTiny5DoorShipGb()
  const fairy = useCamera()
  return {
    in: ship.in && fairy,
    out: ship.out && fairy
  }
}

export const useGeneralFairy = (): LogicBool => {
  const thing = useGeneralThing()
  return {
    in: useCamera() && thing.in,
    out: useCamera() && thing.out
  }
}

export const useTreasureKasplat = (): LogicBool => useDiddyGoldGb()

export const useKevin = (): LogicBool => {
  const lighthouse = useGalleonLighthouseArea()
  const lowWater = useGalleonLowTide()
  return {
    in: lighthouse.in && lowWater.in,
    out: lighthouse.out
  }
}

export const useCannonKasplat = (): LogicBool => {
  const highTide = useGalleonHighTide()
  const cannon = useGalleonCannon()
  return {
    in: cannon.in && highTide.in,
    out: (cannon.in || cannon.out)
  }
}

export const useVineKasplat = (): LogicBool => {
  const kasplat = useGalleonCavernTop()
  return {
    in: kasplat.in,
    out: kasplat.out
  }
}

export const useCactusKasplat = (): LogicBool => {
  const outskirts = useGalleonOutskirts()
  return {
    in: outskirts.in,
    out: outskirts.out
  }
}
