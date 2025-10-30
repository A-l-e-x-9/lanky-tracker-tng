import GBPool from '@renderer/components/pools/GB'
import { useLankyGateGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const GrapeGate: React.FC = () => (
<GBPool>
  <JapesCheck
    id={1021}
    name="Lanky's Grape Gate Barrel"
    region="Japes Lowlands"
    canGetLogic={useLankyGateGb()}
  />
  </GBPool>
)

export default GrapeGate
