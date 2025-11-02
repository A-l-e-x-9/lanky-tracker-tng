import GBPool '@renderer/components/pools/GB'
import { useTiny2DoorShipGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const Tiny2Ship: React.FC = () => (
<GBPool>
  <GalleonCheck
    id={4032}
    name="Tiny's 2 Door Ship Room"
    region="Shipyard Outskirts"
    canGetLogic={useTiny2DoorShipGb()}
  />
  </GBPool>
)

export default Tiny2Ship
