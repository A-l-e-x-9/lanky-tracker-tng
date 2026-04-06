import CratePool from '@renderer/components/pools/Crates'
import DKIslandCrates from './DKIsland'
import KremIslandCrates from './KremIsland'
import OuterCrates from './OuterRim'
import JapesForestCrates from './JapesForest'
import CavesHelmCrates from './CavesHelm'

const ShuffledCrates: React.FC = () => {
return (
    <CratePool>
      <DKIslandCrates />
      <KremIslandCrates />
      <OuterCrates />
      <JapesForestCrates />
      <CavesHelmCrates />
    </CratePool>
  )
}

export default ShuffledCrates
