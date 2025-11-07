import GBPool from '@renderer/components/pools/GB'
import { useLanky5DoorShipGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const Lanky5Ship: React.FC = () => {
const canDo = useLanky5DoorShipGb()
return (
<GBPool>
  <GalleonCheck
    id={4023}
    name="Lanky's Room"
    region="5 Door Ship"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
  </GBPool>
)
}

export default Lanky5Ship
