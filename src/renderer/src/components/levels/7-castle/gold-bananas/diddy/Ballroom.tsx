import { useDiddyRoomGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const DiddyBallroom: React.FC = () => (
  <CastleCheck
    id={7011}
    name="Diddy's Ballroom Barrel"
    region="Various Castle Rooms"
    canGetLogic={useDiddyRoomGb()}
  />
)

export default DiddyBallroom
