import { useDiddyRoomGb } from '@renderer/hooks/castle'
import GBPool from '@renderer/components/pools/GB'
import CastleCheck from '../../check'

const DiddyBallroom: React.FC = () => (
<GBPool>
  <CastleCheck
    id={7011}
    name="Diddy's Ballroom Barrel"
    region="Various Castle Rooms"
    canGetLogic={useDiddyRoomGb()}
  />
  </GBPool>
)

export default DiddyBallroom
