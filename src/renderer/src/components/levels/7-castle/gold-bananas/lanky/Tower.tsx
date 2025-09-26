import Miniboss from '@renderer/components/pools/Miniboss'
import { useLankyRoomGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const LankyTower: React.FC = () => {
  const roomGb = useLankyRoomGb()
  return (
  <Miniboss>
    <CastleCheck
      id={7020}
      name="Castle Lanky Tower"
      region="Castle Rooms"
      canGetLogic={roomGb.in}
      canGetBreak={roomGb.out}
    />
  </Miniboss>
  )
}

export default LankyTower
