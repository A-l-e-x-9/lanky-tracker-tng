import { useChunkyRoomGb } from '@renderer/src/hooks/castle'
import CastleCheck from '../../check'

const ChunkyMuseum: React.FC = () => (
  <CastleCheck
    id={7042}
    name="Castle Chunky Museum"
    region="Castle Rooms"
    canGetLogic={useChunkyRoomGb()}
  />
)

export default ChunkyMuseum
