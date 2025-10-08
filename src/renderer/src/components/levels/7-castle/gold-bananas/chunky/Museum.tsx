import { useChunkyRoomGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const ChunkyMuseum: React.FC = () => (
  <CastleCheck
    id={7042}
    name="Chunky's Museum"
    region="Various Castle Rooms"
    canGetLogic={useChunkyRoomGb()}
  />
)

export default ChunkyMuseum
