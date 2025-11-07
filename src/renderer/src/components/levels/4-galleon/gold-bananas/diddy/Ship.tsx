import GBPool from '@renderer/components/pools/GB'
import { useDiddy5DoorShipGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const Diddy5Ship: React.FC = () => {
const canDo = useDiddy5DoorShipGb()
return (
<GBPool>
  <GalleonCheck
    id={4013}
    name="Diddy's Room"
    region="5 Door Ship"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
  </GBPool>
  )
}

export default Diddy5Ship
