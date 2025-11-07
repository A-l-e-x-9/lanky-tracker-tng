import GBPool from '@renderer/components/pools/GB'
import { useDk5DoorShipGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const Dk5Ship: React.FC = () => {
const canDo = useDk5DoorShipGb()
return (
<GBPool>
  <GalleonCheck
    id={4004}
    name="DK's Room"
    region="5 Door Ship"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
  </GBPool>
  )
}

export default Dk5Ship
