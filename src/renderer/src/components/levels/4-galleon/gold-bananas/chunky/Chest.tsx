import GBPool from '@renderer/components/pools/GB'
import { useChunkyChestGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const GalleonChest: React.FC = () => {
const canDo = useChunkyChestGb()
return (
<GBPool>
  <GalleonCheck
    id={4040}
    name="Chunky's Right Chest"
    region="Galleon Caves"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
  </GBPool>
)
}

export default GalleonChest
