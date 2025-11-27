import GBPool from '@renderer/components/pools/GB'
import Miniboss from '@renderer/components/pools/Miniboss'
import { useLankyRoomGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const LankyTower: React.FC = () => {
  const roomGb = useLankyRoomGb()
  return (
  <GBPool>
    <CastleCheck
      id={7020}
      name="Lanky's Wind Tunnel"
      region="Various Castle Rooms"
      canGetLogic={roomGb.in}
      canGetBreak={roomGb.out}
    />
  </GBPool>
  )
}

export default LankyTower
