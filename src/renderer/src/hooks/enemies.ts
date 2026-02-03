import { useAnyGun, useAnyMusic, useOrange, useShockwave } from './kongs'
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

//Can you defeat a Klump, Robo-Kritter, Klobber, Kaboom, Kosha, Kop, or red/purple Klaptrap? (This attempt to consolidate various enemy-specific checks into one is shit and will likely need a redo. =_=;)
export const useDefeatToughEnemy = (): boolean => {
  const anyMusic = useAnyMusic()
  const shockwave = useShockwave()
  const hasOranges = useOrange()
  const hasAnyGun = useAnyGun()
  return hasOranges || shockwave || anyMusic || hasAnyGun
}
