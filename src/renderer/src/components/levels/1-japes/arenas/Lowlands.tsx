import ArenaPool from '@renderer/components/pools/Arenas'
import { useShuffledArenas } from '@renderer/hooks/settings'
import JapesCheck from '../check'
import { useGeneralThing, useJapesSideArea } from '@renderer/hooks/japes'
import { useClimbing } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const hasClimbing = useClimbing()
const canReachDiddyTunnel = useJapesSideArea()
  return (
    <ArenaPool>
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: Near vanilla level entrance"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: On a tree in the starting area"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out && hasClimbing}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: Next to first tunnel entrance"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: In the first tunnel"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: In Diddy's sub-tunnel"
        region="Japes Lowlands"
        canGetLogic={canReachDiddyTunnel.in}
        canGetBreak={canReachDiddyTunnel.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: In the first tunnel, main area-side"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: In front of the river"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: Vanilla Warp 1, level start"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: Vanilla Warp 1, after the early cave"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: Vanilla Warp 2, main area"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: Vanilla Warp 3, at the hive tunnel"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: Behind the boulder leading to Chunky's underground"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
    </ArenaPool>
  )
}

const LowlandArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default LowlandArenas
