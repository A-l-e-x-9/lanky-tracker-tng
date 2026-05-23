import CratePool from '@renderer/components/pools/Crates'
import { useShuffleCrates } from '@renderer/hooks/settings'
import FactoryCheck from '../check'
import { useFactoryTesting, useDiddyBlockGb } from '@renderer/hooks/factory'

const Shuffled: React.FC = () => {
const canReachTesting = useFactoryTesting()
const canDoBlockTower = useDiddyBlockGb()
  return (
    <CratePool>
      <FactoryCheck
        id={23020}
        name="Shuffled Melon Crate: Near Snide's"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={23021}
        name="Shuffled Melon Crate: Near Snide's, hidden"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={23022}
        name="Shuffled Melon Crate: Right hallway"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={23023}
        name="Shuffled Melon Crate: At DK's number game"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={23024}
        name="Shuffled Melon Crate: Under the stairs to Tiny's dartboard"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={23025}
        name="Shuffled Melon Crate: On the Block Tower"
        region="Testing Room"
        canGetLogic={canDoBlockTower.in}
        canGetBreak={canDoBlockTower.out}
      />
      <FactoryCheck
        id={23026}
        name="Shuffled Melon Crate: Under Lanky's Testing Bonus Barrel"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={23028}
        name="Shuffled Melon Crate: Left of Funky's"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={23029}
        name="Shuffled Melon Crate: Right of Funky's"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={23030}
        name="Shuffled Melon Crate: Right of the entrance to Funky's"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={23046}
        name="Shuffled Melon Crate: Vanilla Warp 3, at Snide's"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
      <FactoryCheck
        id={23050}
        name="Shuffled Melon Crate: Vanilla Warp 5, at Funky's"
        region="Testing Room"
        canGetLogic={canReachTesting.in}
        canGetBreak={canReachTesting.out}
      />
    </CratePool>
  )
}

const TestingCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default TestingCrates
