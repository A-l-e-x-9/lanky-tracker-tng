import BoulderPool from '@renderer/src/components/pools/Boulders'
import { useChunkyRoomGb } from '@renderer/src/hooks/castle'
import CastleCheck from './check'

const BoulderCheck: React.FC = () => {
  const canDoMuseum = useChunkyRoomGb()
  return (
    <BoulderPool>
      <CastleCheck
        id={7205}
        name="Castle Boulder: In the Museum"
        region="Castle Rooms"
        canGetLogic={canDoMuseum}
      />
    </BoulderPool>
  )
}

export default BoulderCheck
