import GBPool from '@renderer/components/pools/GB'
import { useLankyGreenhouseGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const LankyGreenhouse: React.FC = () => (
<GBPool>
  <CastleCheck
    id={7021}
    name="Lanky's Greenhouse"
    region="Creepy Castle Main"
    canGetLogic={useLankyGreenhouseGb()}
  />
  </GBPool>
)

export default LankyGreenhouse
