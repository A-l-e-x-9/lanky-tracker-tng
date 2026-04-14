import ArenaPool from '@renderer/components/pools/Arenas'
import { useShuffledArenas } from '@renderer/hooks/settings'
import JapesCheck from '../check'
import { useJapesMine, useJapesUnderground } from '@renderer/hooks/japes'

const Shuffled: React.FC = () => {
const canReachMtn = useJapesMine()
const canReachChunkyCave = useJapesUnderground()
  return (
    <ArenaPool>
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: Chunky's underground, behind exit cannon"
        region="Japes Caves and Mines"
        canGetLogic={canReachChunkyCave.in}
        canGetBreak={canReachChunkyCave.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: Chunky's underground, at vines"
        region="Japes Caves and Mines"
        canGetLogic={canReachChunkyCave.in}
        canGetBreak={canReachChunkyCave.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: Near entrance to Diddy's mountain"
        region="Japes Caves and Mines"
        canGetLogic={canReachMtn.in}
        canGetBreak={canReachMtn.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: On platform opposide Diddy's mountain switch"
        region="Japes Caves and Mines"
        canGetLogic={canReachMtn.in}
        canGetBreak={canReachMtn.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: On the barrel with Diddy's mountain switch"
        region="Japes Caves and Mines"
        canGetLogic={canReachMtn.in}
        canGetBreak={canReachMtn.out}
      />
      <JapesCheck
        id={11000}
        name="Shuffled Battle Arena: Near the hi-lo machine"
        region="Japes Caves and Mines"
        canGetLogic={canReachMtn.in}
        canGetBreak={canReachMtn.out}
      />
    </ArenaPool>
  )
}

const MineArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default MineArenas
