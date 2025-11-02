import GBPool from '@renderer/components/pools/GB'
import { useLanky5DoorShipGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const Lanky5Ship: React.FC = () => (
<GBPool>
  <GalleonCheck
    id={4023}
    name="Lanky's Room"
    region="5 Door Ship"
    canGetLogic={useLanky5DoorShipGb()}
  />
  </GBPool>
)

export default Lanky5Ship
