import GBPool from '@renderer/components/pools/GB'
import { useDk5DoorShipGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const Dk5Ship: React.FC = () => (
<GBPool>
  <GalleonCheck
    id={4004}
    name="DK's Room"
    region="5 Door Ship"
    canGetLogic={useDk5DoorShipGb()}
  />
  </GBPool>
)

export default Dk5Ship
