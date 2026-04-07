import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useShuffleDirt } from '@renderer/hooks/settings'
import JapesCheck from '../check'
import { useGeneralDirt, useJapesSideArea } from '@renderer/hooks/japes'
import { useClimbing, useShockwave } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralDirt()
const hasClimbing = useClimbing()
const canReachDiddyTunnel = useJapesSideArea()
const hasShockwave = useShockwave()
  return (
    <RainbowCoinPool>
      <JapesCheck
        id={31002}
        name="Shuffled Dirt Patch: Near vanilla level entrance"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={31003}
        name="Shuffled Dirt Patch: On a tree in the starting area"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out && hasClimbing}
      />
      <JapesCheck
        id={31004}
        name="Shuffled Dirt Patch: Next to first tunnel entrance"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={31005}
        name="Shuffled Dirt Patch: In the first tunnel"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={31006}
        name="Shuffled Dirt Patch: In Diddy's sub-tunnel"
        region="Japes Lowlands"
        canGetLogic={canReachDiddyTunnel.in && hasShockwave}
        canGetBreak={canReachDiddyTunnel.out && hasShockwave}
      />
      <JapesCheck
        id={31007}
        name="Shuffled Dirt Patch: In the first tunnel, main area-side"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={31031}
        name="Shuffled Dirt Patch: In front of the river"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={31032}
        name="Shuffled Dirt Patch: Vanilla Warp 1, level start"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={31033}
        name="Shuffled Dirt Patch: Vanilla Warp 1, after the early cave"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={31034}
        name="Shuffled Dirt Patch: Vanilla Warp 2, main area"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={31036}
        name="Shuffled Dirt Patch: Vanilla Warp 3, at the hive tunnel"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={31042}
        name="Shuffled Dirt Patch: Behind the boulder leading to Chunky's underground"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
    </RainbowCoinPool>
  )
}

const LowlandsDirt: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default LowlandsDirt
