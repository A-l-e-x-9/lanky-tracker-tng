import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useShuffleDirt } from '@renderer/hooks/settings'
import FactoryCheck from '../check'
import { useFactoryTesting, useDiddyBlockGb } from '@renderer/hooks/factory'
import { useShockwave } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const hasShockwave = useShockwave()
const canReachTesting = useFactoryTesting()
const canDoBlockTower = useDiddyBlockGb()
  return (
    <RainbowCoinPool>
      <FactoryCheck
        id={33020}
        name="Shuffled Dirt Patch: Near Snide's"
        region="Testing Room"
        canGetLogic={canReachTesting.in && hasShockwave}
        canGetBreak={canReachTesting.out && hasShockwave}
      />
      <FactoryCheck
        id={33021}
        name="Shuffled Dirt Patch: Near Snide's, hidden"
        region="Testing Room"
        canGetLogic={canReachTesting.in && hasShockwave}
        canGetBreak={canReachTesting.out && hasShockwave}
      />
      <FactoryCheck
        id={33022}
        name="Shuffled Dirt Patch: Right hallway"
        region="Testing Room"
        canGetLogic={canReachTesting.in && hasShockwave}
        canGetBreak={canReachTesting.out && hasShockwave}
      />
      <FactoryCheck
        id={33023}
        name="Shuffled Dirt Patch: At DK's number game"
        region="Testing Room"
        canGetLogic={canReachTesting.in && hasShockwave}
        canGetBreak={canReachTesting.out && hasShockwave}
      />
      <FactoryCheck
        id={33024}
        name="Shuffled Dirt Patch: Under the stairs to Tiny's dartboard"
        region="Testing Room"
        canGetLogic={canReachTesting.in && hasShockwave}
        canGetBreak={canReachTesting.out && hasShockwave}
      />
      <FactoryCheck
        id={33025}
        name="Shuffled Dirt Patch: On the Block Tower"
        region="Testing Room"
        canGetLogic={canDoBlockTower.in && hasShockwave}
        canGetBreak={canDoBlockTower.out && hasShockwave}
      />
      <FactoryCheck
        id={33026}
        name="Shuffled Dirt Patch: Under Lanky's Testing Bonus Barrel"
        region="Testing Room"
        canGetLogic={canReachTesting.in && hasShockwave}
        canGetBreak={canReachTesting.out && hasShockwave}
      />
      <FactoryCheck
        id={33027}
        name="Shuffled Dirt Patch: Left of the entrance to Funky's"
        region="Testing Room"
        canGetLogic={canReachTesting.in && hasShockwave}
        canGetBreak={canReachTesting.out && hasShockwave}
      />
      <FactoryCheck
        id={33028}
        name="Shuffled Dirt Patch: Left of Funky's"
        region="Testing Room"
        canGetLogic={canReachTesting.in && hasShockwave}
        canGetBreak={canReachTesting.out && hasShockwave}
      />
      <FactoryCheck
        id={33029}
        name="Shuffled Dirt Patch: Right of Funky's"
        region="Testing Room"
        canGetLogic={canReachTesting.in && hasShockwave}
        canGetBreak={canReachTesting.out && hasShockwave}
      />
      <FactoryCheck
        id={33030}
        name="Shuffled Dirt Patch: Right of the entrance to Funky's"
        region="Testing Room"
        canGetLogic={canReachTesting.in && hasShockwave}
        canGetBreak={canReachTesting.out && hasShockwave}
      />
      <FactoryCheck
        id={33046}
        name="Shuffled Dirt Patch: Vanilla Warp 3, at Snide's"
        region="Testing Room"
        canGetLogic={canReachTesting.in && hasShockwave}
        canGetBreak={canReachTesting.out && hasShockwave}
      />
      <FactoryCheck
        id={33050}
        name="Shuffled Dirt Patch: Vanilla Warp 5, at Funky's"
        region="Testing Room"
        canGetLogic={canReachTesting.in && hasShockwave}
        canGetBreak={canReachTesting.out && hasShockwave}
      />
    </RainbowCoinPool>
  )
}

const TestingDirt: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default TestingDirt
