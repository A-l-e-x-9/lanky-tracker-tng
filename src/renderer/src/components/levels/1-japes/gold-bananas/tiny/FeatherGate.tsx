import GBPool from '@renderer/components/pools/GB'
import { useTinyGateGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const FeatherGate: React.FC = () => {
const canDo = useTinyGateGb()
return (
<GBPool>
  <JapesCheck
    id={1031}
    name="Tiny's Feather Gate Barrel"
    region="Japes Lowlands"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
  </GBPool>
)
}

export default FeatherGate
