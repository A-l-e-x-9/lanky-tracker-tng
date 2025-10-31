import GBPool from '@renderer/components/pools/GB'
import { useTinyCaveGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const MiniBarrel: React.FC = () => (
<GBPool>
  <CavesCheck
    id={6030}
    name="Tiny's Mini Cave Barrel"
    region="Crystal Caves Main"
    canGetLogic={useTinyCaveGb()}
  />
  </GBPool>
)

export default MiniBarrel
