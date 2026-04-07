import CratePool from '@renderer/components/pools/Crates'
import { useShuffleCrates } from '@renderer/hooks/settings'
import JapesCheck from '../check'
import { useGeneralThing, useJapesSideArea } from '@renderer/hooks/japes'
import { useClimbing } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const hasClimbing = useClimbing()
const canReachDiddyTunnel = useJapesSideArea()
  return (
    <CratePool>
      <JapesCheck
        id={21002}
        name="Shuffled Melon Crate: Near vanilla level entrance"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={21003}
        name="Shuffled Melon Crate: On a tree in the starting area"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in && hasClimbing}
        canGetBreak={isBreathing.out && hasClimbing}
      />
      <JapesCheck
        id={21004}
        name="Shuffled Melon Crate: Next to first tunnel entrance"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={21005}
        name="Shuffled Melon Crate: In the first tunnel"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={21006}
        name="Shuffled Melon Crate: In Diddy's sub-tunnel"
        region="Japes Lowlands"
        canGetLogic={canReachDiddyTunnel.in}
        canGetBreak={canReachDiddyTunnel.out}
      />
      <JapesCheck
        id={21007}
        name="Shuffled Melon Crate: In the first tunnel, main area-side"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={21031}
        name="Shuffled Melon Crate: In front of the river"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={21032}
        name="Shuffled Melon Crate: Vanilla Warp 1, level start"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={21033}
        name="Shuffled Melon Crate: Vanilla Warp 1, after the early cave"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={21034}
        name="Shuffled Melon Crate: Vanilla Warp 2, main area"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={21036}
        name="Shuffled Melon Crate: Vanilla Warp 3, at the hive tunnel"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <JapesCheck
        id={21042}
        name="Shuffled Melon Crate: Behind the boulder leading to Chunky's underground"
        region="Japes Lowlands"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
    </CratePool>
  )
}

const LowlandCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default LowlandCrates
