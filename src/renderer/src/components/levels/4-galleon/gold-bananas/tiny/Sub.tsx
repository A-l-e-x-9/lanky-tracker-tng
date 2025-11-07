import GBPool from '@renderer/components/pools/GB'
import { useTinySubGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const TinySub: React.FC = () => {
const canDo = useTinySubGb()
return (
<GBPool>
  <GalleonCheck
    id={4031}
    name="Tiny's Foghorn/Sub Barrel"
    region="Shipyard Outskirts"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
  </GBPool>
  )
}

export default TinySub
