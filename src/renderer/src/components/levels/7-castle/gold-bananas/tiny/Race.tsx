import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useTinyRoomGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const TinyRace: React.FC = () => (
<ToughGoldenBanana>
  <CastleCheck
    id={7030}
    name="Tiny's Car Race"
    region="Various Castle Rooms"
    canGetLogic={useTinyRoomGb()}
  />
</ToughGoldenBanana>
)

export default TinyRace
