import ArenaPool from '@renderer/components/pools/Arenas'
import { useShuffledArenas } from '@renderer/hooks/settings'
import FactoryCheck from '../check'
import { useFactoryTesting } from '@renderer/hooks/factory'

const Shuffled: React.FC = () => {
const canReachTesting = useFactoryTesting()
  return (
    <ArenaPool>
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: Near Snide's"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: Near Snide's, hidden"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: Right hallway"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: At DK's number game"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: Under the stairs to Tiny's dartboard"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: Under Lanky's Testing Bonus Barrel"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: Left of the entrance to Funky's"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: Left of Funky's"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: Right of Funky's"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: Right of the entrance to Funky's"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: Vanilla Warp 3, at Snide's"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={13000}
        name="Shuffled Battle Arena: Vanilla Warp 5, at Funky's"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
    </ArenaPool>
  )
}

const TestingArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default TestingArenas
