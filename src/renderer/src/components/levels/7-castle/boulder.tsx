import BoulderPool from '@renderer/components/pools/Boulders'
import { useChunkyRoomGb } from '@renderer/hooks/castle'
import CastleCheck from './check'

const BoulderCheck: React.FC = () => {
  const canDoMuseum = useChunkyRoomGb()
  return (
    <BoulderPool>
      <CastleCheck
        id={7205}
        name="Museum Boulder"
        region="Various Castle Rooms"
        canGetLogic={canDoMuseum}
      />
    </BoulderPool>
  )
}

export default BoulderCheck
