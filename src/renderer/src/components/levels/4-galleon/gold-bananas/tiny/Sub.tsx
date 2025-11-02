import GBPool '@renderer/components/pools/GB'
import { useTinySubGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const TinySub: React.FC = () => (
<GBPool>
  <GalleonCheck
    id={4031}
    name="Tiny's Foghorn/Sub Barrel"
    region="Shipyard Outskirts"
    canGetLogic={useTinySubGb()}
  />
  </GBPool>
)

export default TinySub
