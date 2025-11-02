import GBPool '@renderer/components/pools/GB'
import { useChunkySeasickGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const SeasickShip: React.FC = () => (
<GBPool>
  <GalleonCheck
    id={4042}
    name="Chunky's Seasick Ship"
    region="Lighthouse Area"
    canGetLogic={useChunkySeasickGb()}
  />
  </GBPool>
)

export default SeasickShip
