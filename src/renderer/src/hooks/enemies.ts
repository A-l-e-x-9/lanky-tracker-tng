import { useAnyKong, useAnyGun, useAnyMusic, useOrange, usePunch, useShockwave } from './kongs'
import { LogicBool } from './world'

/**
 * Can you defeat a Zinger, fly, or bat?
 * @returns true if you can defeat a Zinger. Returns "logic-break" if you have Oranges, but no guns or music (but Mecha-Zingers and orange-throwing organic Zingers will be much harder to kill this way than stinging organic ones/flies/bats).
 */
export const useDefeatZinger = (): LogicBool => {
  const anyGun = useAnyGun()
  const anyMusic = useAnyMusic()
  const hasOranges = useOrange()
  return {
    in: anyGun || anyMusic,
    out: hasOranges
  }
}

export const useDefeatBat = (): LogicBool => useDefeatZinger()

export const useDefeatKosha = (): LogicBool => {
  const anyMusic = useAnyMusic()
  const shockwave = useShockwave()
  const hasOranges = useOrange()
  return {
    in: anyMusic || shockwave,
    out: hasOranges /*To kill a Kosha with Oranges, it must use its overhead club attack on you. You must then orange it while it's picking up its club.*/
  }
}

export const useDefeatKlump = (): boolean => {
  const orange = useOrange()
  const shockwave = useShockwave()
  const anyMusic = useAnyMusic()
  return orange || shockwave || anyMusic
}

export const useDefeatKlobber = (): boolean => useDefeatKlump()

export const useDefeatKaboom = (): LogicBool => {
  const hasOranges = useOrange()
  const hasGun = useAnyGun()
  const isBreathing = useAnyKong()
  return {
    in: hasOranges || hasGun,
    out: isBreathing /*You can kill a Kaboom just by running into it, although this will damage you.*/
  }
}

export const useDefeatPurpleKlaptrap = (): boolean => {
  const orange = useOrange()
  const anyMusic = useAnyMusic()
  return orange || anyMusic
}

export const useDefeatRoboKremling = (): boolean => {
  const klaptrap = useDefeatKlump()
  const punch = usePunch()
  return klaptrap || punch
}
