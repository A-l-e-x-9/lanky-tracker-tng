import GBPool from '@renderer/components/pools/GB'
import { useChunky5DoorShipGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const Chunky5Ship: React.FC = () => {
const canDo = useChunky5DoorShipGb()
return (
<GBPool>
  <GalleonCheck
    id={4043}
    name="Chunky's Room"
    region="5 Door Ship"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
  </GBPool>
)
}

export default Chunky5Ship
