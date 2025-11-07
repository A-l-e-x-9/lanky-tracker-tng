import GBPool from '@renderer/components/pools/GB'
import { useChunkyRoomGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const ChunkyMuseum: React.FC = () => {
const canDo = useChunkyRoomGb()
return (
<GBPool>
  <CastleCheck
    id={7042}
    name="Chunky's Museum"
    region="Various Castle Rooms"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
  </GBPool>
)
}

export default ChunkyMuseum
