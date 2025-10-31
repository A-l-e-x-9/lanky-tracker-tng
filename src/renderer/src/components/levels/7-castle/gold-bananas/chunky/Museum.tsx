import GBPool from '@renderer/components/pools/GB'
import { useChunkyRoomGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const ChunkyMuseum: React.FC = () => (
<GBPool>
  <CastleCheck
    id={7042}
    name="Chunky's Museum"
    region="Various Castle Rooms"
    canGetLogic={useChunkyRoomGb()}
  />
  </GBPool>
)

export default ChunkyMuseum
