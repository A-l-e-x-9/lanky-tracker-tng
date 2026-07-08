import ArenaPool from '@renderer/components/pools/Arenas'
import { useShuffledArenas } from '@renderer/hooks/settings'
import FactoryCheck from '../check'
import { useFactoryTesting, useArena, useTinyRaceGb } from '@renderer/hooks/factory'
import { useClimbing } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const canReachTesting = useFactoryTesting()
const canReachVanillaArena = useArena()
const canReachCar = useTinyRaceGb()
const hasClimbing = useClimbing()
  return (
    <ArenaPool>
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: Vanilla Arena (in the R&D Room)"
        region="R&D Room"
        canGetLogic={canReachVanillaArena.in}
        canGetBreak={canReachVanillaArena.out}
      />
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: In Tiny's car race room"
        region="R&D Room"
        canGetLogic={canReachCar.in}
        canGetBreak={canReachCar.out}
      />
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: Also in Tiny's car race room"
        region="R&D Room"
        canGetLogic={canReachCar.in}
        canGetBreak={canReachCar.out}
      />
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: In front of DK's R&D level"
        region="R&D Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: Under the grate that doesn't have the vanilla Arena"
        region="R&D Room"
        canGetLogic={canReachVanillaArena.in}
        canGetBreak={canReachVanillaArena.out}
      />
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: Vanilla Warp 2, R&D-side"
        region="R&D Room"
        canGetLogic={canReachTesting.in && hasClimbing}
        canGetBreak={canReachTesting.out && hasClimbing}
      />
    </ArenaPool>
  )
}

const TestingArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default TestingArenas
