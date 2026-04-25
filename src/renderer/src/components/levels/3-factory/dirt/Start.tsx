import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useShuffleDirt } from '@renderer/hooks/settings'
import FactoryCheck from '../check'
import { useGeneralDirt, useFoyerFromStorage } from '@renderer/hooks/factory'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralDirt()
const canReach = useFoyerFromStorage()
  return (
    <RainbowCoinPool>
      <FactoryCheck
        id={33002}
        name="Shuffled Dirt Patch: On carpet at vanilla level start"
        region="Factory Start Area"
        canGetLogic={isBreathing.in && canReach.in}
        canGetBreak={isBreathing.out && canReach.out}
      />
      <FactoryCheck
        id={33003}
        name="Shuffled Dirt Patch: Near carpet at vanilla level start"
        region="Factory Start Area"
        canGetLogic={isBreathing.in && canReach.in}
        canGetBreak={isBreathing.out && canReach.out}
      />
      <FactoryCheck
        id={33004}
        name="Shuffled Dirt Patch: Clock-in room, left side"
        region="Factory Start Area"
        canGetLogic={isBreathing.in && canReach.in}
        canGetBreak={isBreathing.out && canReach.out}
      />
      <FactoryCheck
        id={33005}
        name="Shuffled Dirt Patch: Clock-in room, right side"
        region="Factory Start Area"
        canGetLogic={isBreathing.in && canReach.in}
        canGetBreak={isBreathing.out && canReach.out}
      />
      <FactoryCheck
        id={33006}
        name="Shuffled Dirt Patch: Top of the hatch"
        region="Factory Start Area"
        canGetLogic={isBreathing.in && canReach.in}
        canGetBreak={isBreathing.out && canReach.out}
      />
      <FactoryCheck
        id={33041}
        name="Shuffled Dirt Patch: Vanilla Warp 1, level start"
        region="Factory Start Area"
        canGetLogic={isBreathing.in && canReach.in}
        canGetBreak={isBreathing.out && canReach.out}
      />
      <FactoryCheck
        id={33043}
        name="Shuffled Dirt Patch: Vanilla Warp 2, level start"
        region="Factory Start Area"
        canGetLogic={isBreathing.in && canReach.in}
        canGetBreak={isBreathing.out && canReach.out}
      />
      <FactoryCheck
        id={33045}
        name="Shuffled Dirt Patch: Vanilla Warp 3, in front of Snide's"
        region="Factory Start Area"
        canGetLogic={isBreathing.in && canReach.in}
        canGetBreak={isBreathing.out && canReach.out}
      />
    </RainbowCoinPool>
  )
}

const StartDirt: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default StartDirt
