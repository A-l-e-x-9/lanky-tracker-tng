import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing, useDkRotateGb, useChunkyClearGb, useTinyPortGb, useTinyCaveGb, useIceWalls, useCavesMiniFunky, useCavesPillar, useCavesIgloo, useLankyIglooGb, useLankyCastleGb } from '@renderer/hooks/caves'
import { useShuffledArenas } from '@renderer/hooks/settings'
import { useMonkeyport, useRocket, useTwirl, usePunch, useBalloon, useHighGrab, useChunky, useBarrel, useDk, useBongos, useSax, useGuitar, useTrombone } from '@renderer/hooks/kongs'
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
const hasBalloon = useBalloon()
const canHighGrab = useHighGrab()
const hasChunky = useChunky()
const hasBarrels = useBarrel()
const canReachWarp4 = useCavesMiniFunky()
const [didCheck] = useDonkStore(useShallow((state) => [state.checks]))
const hasDK = useDk()
const canDoLankyKasplat = useCavesPillar()
const canReachIgloo = useCavesIgloo()
const hasBongoes = useBongos()
const canDoLanky5DI = useLankyIglooGb()
const hasSax = useSax()
const hasGuitar = useGuitar()
const canDoIceCastle = useLankyCastleGb()
const hasTrombone = useTrombone()
  return (
    <ArenaPool>
      <CavesCheck
        id={16000}
        name="Shuffled Battle Arena: On top of the Ice Castle"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in && hasBalloon}
        canGetBreak={isBreathing.out && canHighGrab}
      />
      <CavesCheck
        id={16000}
        name="Shuffled Battle Arena: Vanilla Warp 3 from Tiny's Mini room"
        region="Crystal Caves Main"
        canGetLogic={canDoShrinkGB.in}
        canGetBreak={canDoShrinkGB.out}
      />
    </ArenaPool>
  )
}

const MainArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default MainArenas
