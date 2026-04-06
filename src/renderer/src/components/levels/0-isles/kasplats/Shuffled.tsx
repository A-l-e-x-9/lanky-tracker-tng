import KasplatPool from '@renderer/components/pools/Kasplats'
import DKIslandKasplats from './DKIsland'
import KremIslandKasplats from './KremIsland'
import OuterKasplats from './OuterRim'
import JapesForestKasplats from './JapesForest'
import CavesHelmKasplats from './CavesHelm'

const ShuffledKasplats: React.FC = () => {
const DKKasplat = useHelmKasplat()
  return (
    <KasplatPool>
      <DKIslandKasplats />
      <KremIslandKasplats />
      <OuterKasplats />
      <JapesForestKasplats />
      <CavesHelmKasplats />
    </KasplatPool>
  )
}

export default ShuffledKasplats
