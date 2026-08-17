import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing, useCavesMiniFunky, useCavesPillar, useCavesIgloo, useLankyIglooGb, useLankyCastleGb } from '@renderer/hooks/caves'
import { useShuffledArenas } from '@renderer/hooks/settings'
import { useRocket, useBalloon, useBarrel, useDk, useBongos, useSax, useGuitar, useTrombone } from '@renderer/hooks/kongs'
import CavesCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const hasJetbarrel = useRocket()
const hasBalloon = useBalloon()
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
        name="Shuffled Battle Arena: Opposite DK's 5DC room entrance"
        region="Caves Cabins"
        canGetLogic={isBreathing.in && hasBongoes}
        canGetBreak={isBreathing.out && hasBongoes}
      />
      <CavesCheck
        id={16000}
        name="Shuffled Battle Arena: Called to the carpet of Lanky's cabin"
        region="Caves Cabins"
        canGetLogic={isBreathing.in && hasBalloon && hasTrombone}
        canGetBreak={isBreathing.out && hasJetbarrel && hasTrombone}
      />
    </ArenaPool>
  )
}

const CabinArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default CabinArenas
