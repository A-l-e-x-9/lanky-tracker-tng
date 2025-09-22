import FairyPool from '@renderer/src/components/pools/Fairies'
import VanillaFairy from '@renderer/src/components/pools/VanillaFairy'
import { useRoomFairy } from '@renderer/src/hooks/castle'
import CastleCheck from '../check'

const RoomFairy: React.FC = () => {
  const room = useRoomFairy()
  return (
    <FairyPool>
      <VanillaFairy>
        <CastleCheck
          id={7081}
          name="Castle Fairy (Near Car Race)"
          region="Castle Rooms"
          canGetLogic={room.in}
          canGetBreak={room.out}
        />
      </VanillaFairy>
    </FairyPool>
  )
}

export default RoomFairy
