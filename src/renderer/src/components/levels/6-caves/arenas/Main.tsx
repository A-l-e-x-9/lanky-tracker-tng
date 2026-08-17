import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing, useTinyCaveGb, useCavesMiniFunky, useCavesPillar, useCavesIgloo, useLankyIglooGb, useLankyCastleGb } from '@renderer/hooks/caves'
import { useShuffledArenas } from '@renderer/hooks/settings'
import { useBalloon, useHighGrab, useDk, useBongos, useSax, useGuitar, useTrombone } from '@renderer/hooks/kongs'
import CavesCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const canDoShrinkGB = useTinyCaveGb()
const hasBalloon = useBalloon()
const canHighGrab = useHighGrab()
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
