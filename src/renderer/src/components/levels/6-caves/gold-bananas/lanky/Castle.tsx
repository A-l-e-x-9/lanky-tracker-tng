import GBPool from '@renderer/components/pools/GB'
import { useLankyCastleGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const CastleSlam: React.FC = () => (
<GBPool>
  <CavesCheck
    id={6021}
    name="Ice Castle Slamming"
    region="Crystal Caves Main"
    canGetLogic={useLankyCastleGb()}
  />
  </GBPool>
)

export default CastleSlam
