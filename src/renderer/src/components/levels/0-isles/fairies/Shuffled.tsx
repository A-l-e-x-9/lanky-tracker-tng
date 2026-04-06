import FairyPool from '@renderer/components/pools/Fairies'
import DKIslandFairies from './DKIsland'
import KremIslandFairies from './KremIsland'
import OuterFairies from './OuterRim'
import JapesForestFairies from './JapesForest'
import CavesHelmFairies from './CavesHelm'

const ShuffledFairies: React.FC = () => {
  return (
    <FairyPool>
      <DKIslandFairies />
      <KremIslandFairies />
      <OuterFairies />
      <JapesForestFairies />
      <CavesHelmFairies />
    </FairyPool>
  )
}

export default ShuffledFairies
