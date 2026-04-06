import ArenaPool from '@renderer/components/pools/Arenas'
import IslesCheck from '../check'
import DKIslandArenas from './DKIsland'
import KremIslandArenas from './KremIsland'
import OuterArenas from './OuterRim'
import JapesForestArenas from './JapesForest'
import CavesHelmArenas from './CavesHelm'

const ShuffledArenas: React.FC = () => {
  return (
    <ArenaPool>
      <DKIslandArenas />
      <KremIslandArenas />
      <OuterArenas />
      <JapesForestArenas />
      <CavesHelmArenas />
    </ArenaPool>
  )
}

export default ShuffledArenas
