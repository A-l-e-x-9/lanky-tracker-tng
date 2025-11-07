import GBPool from '@renderer/components/pools/GB'
import { useTiny5DoorShipGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const Tiny5Ship: React.FC = () => {
const canDo = useTiny5DoorShipGb()
return (
<GBPool>
  <GalleonCheck
    id={4033}
    name="Tiny's Room"
    region="5 Door Ship"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
  </GBPool>
  )
}

export default Tiny5Ship
