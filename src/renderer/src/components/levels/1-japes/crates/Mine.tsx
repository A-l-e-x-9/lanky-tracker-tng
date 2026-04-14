import CratePool from '@renderer/components/pools/Crates'
import { useShuffleCrates } from '@renderer/hooks/settings'
import JapesCheck from '../check'
import { useJapesMine, useJapesUnderground, useJapesPaintingOutside } from '@renderer/hooks/japes'

const Shuffled: React.FC = () => {
const canReachPaintingRoom = useJapesPaintingOutside()
const canReachMtn = useJapesMine()
const canReachChunkyCave = useJapesUnderground()
  return (
    <CratePool>
      <JapesCheck
        id={21043}
        name="Shuffled Melon Crate: Chunky's underground, behind exit cannon"
        region="Japes Caves and Mines"
        canGetLogic={canReachChunkyCave.in}
        canGetBreak={canReachChunkyCave.out}
      />
      <JapesCheck
        id={21044}
        name="Shuffled Melon Crate: Chunky's underground, at vines"
        region="Japes Caves and Mines"
        canGetLogic={canReachChunkyCave.in}
        canGetBreak={canReachChunkyCave.out}
      />
      <JapesCheck
        id={21045}
        name="Shuffled Melon Crate: In between the pegs in Lanky's painting room"
        region="Japes Caves and Mines"
        canGetLogic={canReachPaintingRoom.in}
        canGetBreak={canReachPaintingRoom.out}
      />
      <JapesCheck
        id={21046}
        name="Shuffled Melon Crate: Near entrance to Diddy's mountain"
        region="Japes Caves and Mines"
        canGetLogic={canReachMtn.in}
        canGetBreak={canReachMtn.out}
      />
      <JapesCheck
        id={21047}
        name="Shuffled Melon Crate: On platform opposide Diddy's mountain switch"
        region="Japes Caves and Mines"
        canGetLogic={canReachMtn.in}
        canGetBreak={canReachMtn.out}
      />
      <JapesCheck
        id={21048}
        name="Shuffled Melon Crate: On the barrel with Diddy's mountain switch"
        region="Japes Caves and Mines"
        canGetLogic={canReachMtn.in}
        canGetBreak={canReachMtn.out}
      />
      <JapesCheck
        id={21049}
        name="Shuffled Melon Crate: Near the hi-lo machine"
        region="Japes Caves and Mines"
        canGetLogic={canReachMtn.in}
        canGetBreak={canReachMtn.out}
      />
    </CratePool>
  )
}

const MineCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default MineCrates
