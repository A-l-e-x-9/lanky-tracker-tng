import GBPool from '@renderer/components/pools/GB'
import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useTinyRoomGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const TinyRace: React.FC = () => {
const canDo = useTinyRoomGb()
return (
<GBPool>
<ToughGoldenBanana>
  <CastleCheck
    id={7030}
    name="Tiny's Car Race"
    region="Various Castle Rooms"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
</ToughGoldenBanana>
</GBPool>
)
}

export default TinyRace
