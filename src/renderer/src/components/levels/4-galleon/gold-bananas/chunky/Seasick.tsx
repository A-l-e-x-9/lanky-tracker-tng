import GBPool from '@renderer/components/pools/GB'
import { useChunkySeasickGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const SeasickShip: React.FC = () => {
const canDo = useChunkySeasickGb()
return (
<GBPool>
  <GalleonCheck
    id={4042}
    name="Chunky's Seasick Ship"
    region="Lighthouse Area"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
  </GBPool>
)
}

export default SeasickShip
