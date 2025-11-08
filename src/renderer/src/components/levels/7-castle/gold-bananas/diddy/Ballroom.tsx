import { useDiddyRoomGb } from '@renderer/hooks/castle'
import GBPool from '@renderer/components/pools/GB'
import CastleCheck from '../../check'

const DiddyBallroom: React.FC = () => {
const canDo = useDiddyRoomGb()
return (
<GBPool>
  <CastleCheck
    id={7011}
    name="Diddy's Ballroom Barrel"
    region="Various Castle Rooms"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
  </GBPool>
)
}

export default DiddyBallroom
