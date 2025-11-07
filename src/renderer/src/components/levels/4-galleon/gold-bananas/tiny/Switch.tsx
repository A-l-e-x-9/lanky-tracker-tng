import GBPool from '@renderer/components/pools/GB'
import { useTiny2DoorShipGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const Tiny2Ship: React.FC = () => {
const canDo = useTiny2DoorShipGb()
return (
<GBPool>
  <GalleonCheck
    id={4032}
    name="Tiny's 2 Door Ship Room"
    region="Shipyard Outskirts"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
  </GBPool>
  )
}

export default Tiny2Ship
