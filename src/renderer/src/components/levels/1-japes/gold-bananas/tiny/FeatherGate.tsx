import GBPool from '@renderer/components/pools/GB'
import { useTinyGateGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const FeatherGate: React.FC = () => (
<GBPool>
  <JapesCheck
    id={1031}
    name="Tiny's Feather Gate Barrel"
    region="Japes Lowlands"
    canGetLogic={useTinyGateGb()}
  />
  </GBPool>
)

export default FeatherGate
