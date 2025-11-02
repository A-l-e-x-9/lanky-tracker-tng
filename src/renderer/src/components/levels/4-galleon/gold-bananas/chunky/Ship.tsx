import GBPool '@renderer/components/pools/GB'
import { useChunky5DoorShipGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const Chunky5Ship: React.FC = () => (
<GBPool>
  <GalleonCheck
    id={4043}
    name="Chunky's Room"
    region="5 Door Ship"
    canGetLogic={useChunky5DoorShipGb()}
  />
  </GBPool>
)

export default Chunky5Ship
