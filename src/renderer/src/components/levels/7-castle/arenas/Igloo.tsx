import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing, useDkRotateGb, useChunkyClearGb, useTinyPortGb, useTinyCaveGb, useIceWalls, useCavesMiniFunky, useCavesPillar, useCavesIgloo, useLankyIglooGb, useLankyCastleGb } from '@renderer/hooks/caves'
import { useShuffledArenas } from '@renderer/hooks/settings'
import { useMonkeyport, useRocket, useTwirl, usePunch, useChunky, useBarrel, useDk, useBongos, useSax, useGuitar } from '@renderer/hooks/kongs'
import CavesCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const canReachVanillaArena = useDkRotateGb()
const canDoKoshaGB = useChunkyClearGb()
const hasMonkeyport = useMonkeyport()
const canDoTinyIglooGB = useTinyPortGb()
const hasJetbarrel = useRocket()
const isHinaKagiyama = useTwirl()
const canDoShrinkGB = useTinyCaveGb()
const hasPunch = usePunch()
const canGetPastIceWalls = useIceWalls()
const hasChunky = useChunky()
const hasBarrels = useBarrel()
const canReachWarp4 = useCavesMiniFunky()
const hasDK = useDk()
const canDoLankyKasplat = useCavesPillar()
const canReachIgloo = useCavesIgloo()
const hasBongoes = useBongos()
const canDoLanky5DI = useLankyIglooGb()
const hasSax = useSax()
const hasGuitar = useGuitar()
const canDoIceCastle = useLankyCastleGb()
  return (
    <ArenaPool>
      <CavesCheck
        id={16006}
        name="Shuffled Battle Arena: Under igloo area's Tag Barrel"
        region="Caves Igloo"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16041}
        name="Shuffled Battle Arena: Vanilla Warp 1 at igloos"
        region="Caves Igloo"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16044}
        name="Shuffled Battle Arena: Vanilla Warp 3 at igloos"
        region="Caves Igloo"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
    </ArenaPool>
  )
}

const IglooArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default IglooArenas
