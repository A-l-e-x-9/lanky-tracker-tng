import { useDiddyRoomGb } from '@renderer/src/hooks/castle'
import CastleCheck from '../../check'

const DiddyBallroom: React.FC = () => (
  <CastleCheck
    id={7011}
    name="Castle Diddy Ballroom"
    region="Castle Rooms"
    canGetLogic={useDiddyRoomGb()}
  />
)

export default DiddyBallroom
