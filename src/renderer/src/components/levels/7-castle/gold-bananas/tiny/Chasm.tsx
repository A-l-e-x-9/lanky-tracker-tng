import GBPool from '@renderer/components/pools/GB'
import { useTinyChasmGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const TinyChasm: React.FC = () => (
<GBPool>
  <CastleCheck
    id={7033}
    name="Tiny's Bonus Barrel Over the Chasm"
    region="Castle Crypt and Dungeon"
    canGetLogic={useTinyChasmGb()}
  />
  </GBPool>
)

export default TinyChasm
