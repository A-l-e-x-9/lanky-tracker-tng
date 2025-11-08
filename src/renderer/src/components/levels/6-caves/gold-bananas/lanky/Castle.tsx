import GBPool from '@renderer/components/pools/GB'
import { useLankyCastleGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const CastleSlam: React.FC = () => {
const canDo = useLankyCastleGb()
return (
<GBPool>
  <CavesCheck
    id={6021}
    name="Ice Castle Slamming"
    region="Crystal Caves Main"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
  </GBPool>
)
}

export default CastleSlam
