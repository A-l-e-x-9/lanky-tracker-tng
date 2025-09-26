import Miniboss from '@renderer/components/pools/Miniboss'
import { useDiddyRoomGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const DiddyBallroom: React.FC = () => (
<Miniboss>
  <CastleCheck
    id={7011}
    name="Castle Diddy Ballroom"
    region="Castle Rooms"
    canGetLogic={useDiddyRoomGb()}
  />
</Miniboss>
)

export default DiddyBallroom
