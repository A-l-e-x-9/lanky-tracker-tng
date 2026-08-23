import CratePool from '@renderer/components/pools/Crates'
import { useGeneralThing, useCavesIgloo, useLankyIglooGb } from '@renderer/hooks/caves'
import { useShuffleCrates } from '@renderer/hooks/settings'
import { useBongos, useSax, useGuitar, useBalloon, useHighGrab } from '@renderer/hooks/kongs'
import CavesCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const canReachIgloo = useCavesIgloo()
const hasBongoes = useBongos()
const hasSax = useSax()
const hasGuitar = useGuitar()
const canDoLanky5DI = useLankyIglooGb()
const hasBalloon = useBalloon()
const canHighGrab = useHighGrab()
  return (
    <CratePool>
      <CavesCheck
        id={26007}
        name="Shuffled Melon Crate: In front of the 5DI"
        region="Caves Igloo"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26041}
        name="Shuffled Melon Crate: Vanilla Warp 1 at igloos"
        region="Caves Igloo"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26044}
        name="Shuffled Melon Crate: Vanilla Warp 3 at igloos"
        region="Caves Igloo"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26050}
        name="Shuffled Melon Crate: Behind DK's 5DI maze"
        region="Caves Igloo"
        canGetLogic={canReachIgloo.in && hasBongoes}
        canGetBreak={canReachIgloo.out && hasBongoes}
      />
      <CavesCheck
        id={26051}
        name="Shuffled Melon Crate: In Diddy's 5DI room"
        region="Caves Igloo"
        canGetLogic={canReachIgloo.in && hasGuitar}
        canGetBreak={canReachIgloo.out && hasGuitar}
      />
      <CavesCheck
        id={26052}
        name="Shuffled Melon Crate: A high platform in Lanky's 5DI room"
        region="Caves Igloo"
        canGetLogic={canDoLanky5DI.in}
        canGetBreak={canDoLanky5DI.out}
      />
      <CavesCheck
        id={26053}
        name="Shuffled Melon Crate: Opposite Tiny's 5DI room entrance"
        region="Caves Igloo"
        canGetLogic={canReachIgloo.in && hasSax}
        canGetBreak={canReachIgloo.out && hasSax}
      />
    </CratePool>
  )
}

const IglooCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default IglooCrates
