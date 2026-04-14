import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useShuffleDirt } from '@renderer/hooks/settings'
import JapesCheck from '../check'
import { useJapesMine, useJapesPaintingOutside, useJapesUnderground } from '@renderer/hooks/japes'
import { useShockwave } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const hasShockwave = useShockwave()
const canReachMtn = useJapesMine()
const canReachPaintingRoom = useJapesPaintingOutside()
const canReachChunkyCave = useJapesUnderground()
  return (
    <RainbowCoinPool>
      <JapesCheck
        id={31043}
        name="Shuffled Dirt Patch: Chunky's underground, behind exit cannon"
        region="Japes Caves and Mines"
        canGetLogic={canReachChunkyCave.in && hasShockwave}
        canGetBreak={canReachChunkyCave.out && hasShockwave}
      />
      <JapesCheck
        id={31044}
        name="Shuffled Dirt Patch: Chunky's underground, at vines"
        region="Japes Caves and Mines"
        canGetLogic={canReachChunkyCave.in && hasShockwave}
        canGetBreak={canReachChunkyCave.out && hasShockwave}
      />
      <JapesCheck
        id={31045}
        name="Shuffled Dirt Patch: In between the pegs in Lanky's painting room"
        region="Japes Caves and Mines"
        canGetLogic={canReachPaintingRoom.in && hasShockwave}
        canGetBreak={canReachPaintingRoom.out && hasShockwave}
      />
      <JapesCheck
        id={31046}
        name="Shuffled Dirt Patch: Near entrance to Diddy's mountain"
        region="Japes Caves and Mines"
        canGetLogic={canReachMtn.in && hasShockwave}
        canGetBreak={canReachMtn.out && hasShockwave}
      />
      <JapesCheck
        id={31047}
        name="Shuffled Dirt Patch: On platform opposide Diddy's mountain switch"
        region="Japes Caves and Mines"
        canGetLogic={canReachMtn.in && hasShockwave}
        canGetBreak={canReachMtn.out && hasShockwave}
      />
      <JapesCheck
        id={31048}
        name="Shuffled Dirt Patch: On the barrel with Diddy's mountain switch"
        region="Japes Caves and Mines"
        canGetLogic={canReachMtn.in && hasShockwave}
        canGetBreak={canReachMtn.out && hasShockwave}
      />
      <JapesCheck
        id={31049}
        name="Shuffled Dirt Patch: Near the hi-lo machine"
        region="Japes Caves and Mines"
        canGetLogic={canReachMtn.in && hasShockwave}
        canGetBreak={canReachMtn.out && hasShockwave}
      />
    </RainbowCoinPool>
  )
}

const MineDirt: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default MineDirt
